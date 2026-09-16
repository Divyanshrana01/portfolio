import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let hover = false;
    let frame = 0;
    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };

    // quickSetter writes the transform directly. The previous version built a
    // fresh gsap.to() tween on every animation frame for the life of the page.
    const setX = gsap.quickSetter(cursor, "x", "px");
    const setY = gsap.quickSetter(cursor, "y", "px");

    const onMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    const loop = () => {
      if (!hover) {
        const delay = 6;
        cursorPos.x += (mousePos.x - cursorPos.x) / delay;
        cursorPos.y += (mousePos.y - cursorPos.y) / delay;
        setX(cursorPos.x);
        setY(cursorPos.y);
      }
      frame = requestAnimationFrame(loop);
    };

    // Delegated so elements rendered after mount are covered too; the previous
    // version only bound whatever existed at mount.
    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-cursor]"
      );
      if (!target) return;

      if (target.dataset.cursor === "icons") {
        const rect = target.getBoundingClientRect();
        cursor.classList.add("cursor-icons");
        setX(rect.left);
        setY(rect.top);
        cursor.style.setProperty("--cursorH", `${rect.height}px`);
        hover = true;
      }
      if (target.dataset.cursor === "disable") {
        cursor.classList.add("cursor-disable");
      }
    };

    const onOut = (e: MouseEvent) => {
      if (!(e.target as HTMLElement | null)?.closest("[data-cursor]")) return;
      cursor.classList.remove("cursor-disable", "cursor-icons");
      hover = false;
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;
