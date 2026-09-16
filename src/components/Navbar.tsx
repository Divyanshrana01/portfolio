import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      speed: 1.25,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    // The bar is transparent over the hero and gains a ground once the page
    // scrolls under it, so it never sits on top of unrelated content.
    const trigger = ScrollTrigger.create({
      start: 80,
      end: "max",
      onToggle: (self) =>
        document.querySelector(".header")?.classList.toggle("header-set", self.isActive),
    });

    const onResize = () => ScrollSmoother.refresh(true);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      trigger.kill();
      smoother?.kill();
    };
  }, []);

  const onNavClick = (href: string) => (e: React.MouseEvent) => {
    if (window.innerWidth > 1024 && smoother) {
      e.preventDefault();
      smoother.scrollTo(href, true, "top top");
    }
  };

  return (
    <div className="header">
      <a href="/#" className="navbar-title" data-cursor="disable">
        Divyansh Rana
      </a>
      <nav>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} data-href={l.href} onClick={onNavClick(l.href)}>
                <HoverLinks text={l.label} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
