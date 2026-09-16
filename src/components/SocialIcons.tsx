import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { useEffect, useRef } from "react";

const SocialIcons = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const social = rootRef.current;
    if (!social) return;

    // One shared frame loop and one listener for both icons. Previously each
    // icon started its own loop and added a document listener that was never
    // removed, so they kept running for the life of the page.
    const items = Array.from(social.querySelectorAll("span")).flatMap((elem) => {
      const link = elem.querySelector("a");
      if (!link) return [];
      const rect = elem.getBoundingClientRect();
      return [
        {
          link,
          rect,
          mouse: { x: rect.width / 2, y: rect.height / 2 },
          current: { x: 0, y: 0 },
        },
      ];
    });

    let frame = 0;

    const onMouseMove = (e: MouseEvent) => {
      for (const item of items) {
        const x = e.clientX - item.rect.left;
        const y = e.clientY - item.rect.top;
        const inside = x < 40 && x > 10 && y < 40 && y > 5;
        item.mouse.x = inside ? x : item.rect.width / 2;
        item.mouse.y = inside ? y : item.rect.height / 2;
      }
    };

    const loop = () => {
      for (const item of items) {
        item.current.x += (item.mouse.x - item.current.x) * 0.1;
        item.current.y += (item.mouse.y - item.current.y) * 0.1;
        item.link.style.setProperty("--siLeft", `${item.current.x}px`);
        item.link.style.setProperty("--siTop", `${item.current.y}px`);
      }
      frame = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMouseMove);
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social" ref={rootRef}>
        <span>
          <a
            href="https://github.com/Divyanshrana01"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/divyanshrana991"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </span>
      </div>
    </div>
  );
};

export default SocialIcons;
