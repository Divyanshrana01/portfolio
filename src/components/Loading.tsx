import { useEffect, useMemo, useRef, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const sequenced = useRef(false);

  // The marquee re-measures itself on every render, which made each tick of the
  // percentage counter cost far more than the tick itself. Holding one element
  // keeps it out of the counter's re-renders.
  const marquee = useMemo(
    () => (
      <Marquee>
        <span> A Creative Developer</span> <span>A Creative Designer</span>
        <span> A Creative Developer</span> <span>A Creative Designer</span>
      </Marquee>
    ),
    []
  );

  useEffect(() => {
    if (percent < 100 || sequenced.current) return;
    sequenced.current = true;

    const timers: number[] = [];
    timers.push(
      window.setTimeout(() => {
        setLoaded(true);
        timers.push(window.setTimeout(() => setIsLoaded(true), 700));
      }, 400)
    );
    return () => timers.forEach(clearTimeout);
  }, [percent]);

  useEffect(() => {
    if (!isLoaded) return;
    setClicked(true);

    let cancelled = false;
    const timer = window.setTimeout(async () => {
      const module = await import("./utils/initialFX");
      if (cancelled) return;
      module.initialFX?.();
      setIsLoading(false);
    }, 700);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [isLoaded, setIsLoading]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-header">
        <a href="/#" className="loader-title" data-cursor="disable">
          Logo
        </a>
        <div className={`loaderGame ${clicked && "loader-out"}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className="loading-screen">
        <div className="loading-marquee">{marquee}</div>
        <div
          className={`loading-wrap ${clicked && "loading-clicked"}`}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded && "loading-complete"}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

// The counter is driven by requestAnimationFrame and only pushes state when the
// whole number changes, so it costs one render per visible step instead of one
// every 2ms. It eases toward 90 while the model is still downloading and only
// runs to 100 once the work is genuinely finished.
export const setProgress = (setLoading: (value: number) => void) => {
  let percent = 0;
  let frame = 0;
  let settled = false;

  const push = (value: number) => {
    if (value !== percent) {
      percent = value;
      setLoading(percent);
    }
  };

  const startedAt = performance.now();
  const creep = (now: number) => {
    if (settled) return;
    const elapsed = now - startedAt;
    push(Math.min(90, Math.round(90 * (1 - Math.exp(-elapsed / 1100)))));
    frame = requestAnimationFrame(creep);
  };
  frame = requestAnimationFrame(creep);

  const stop = () => {
    settled = true;
    cancelAnimationFrame(frame);
  };

  function loaded() {
    return new Promise<number>((resolve) => {
      stop();
      const from = percent;
      const startRun = performance.now();
      const duration = 420;

      const run = (now: number) => {
        const t = Math.min(1, (now - startRun) / duration);
        push(Math.round(from + (100 - from) * t));
        if (t < 1) {
          frame = requestAnimationFrame(run);
        } else {
          resolve(100);
        }
      };
      frame = requestAnimationFrame(run);
    });
  }

  function clear() {
    stop();
    push(100);
  }

  return { loaded, percent, clear };
};
