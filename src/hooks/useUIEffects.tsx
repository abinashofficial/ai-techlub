import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import GLightbox from "glightbox";
import Swiper from "swiper";
import "swiper/css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.css";

export const useUIEffects = () => {
  const location = useLocation();

  useEffect(() => {
    /** SCROLL EFFECT */
    const toggleScrolled = () => {
      const body = document.body;
      const header = document.querySelector("#header");
      if (!header) return;
      if (
        !header.classList.contains("scroll-up-sticky") &&
        !header.classList.contains("sticky-top") &&
        !header.classList.contains("fixed-top")
      )
        return;

      if (window.scrollY > 100) body.classList.add("scrolled");
      else body.classList.remove("scrolled");
    };

    document.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);

    /** MOBILE NAV - Event delegation so it works on all pages */
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;

      // Mobile nav toggle button
      if (target.matches(".mobile-nav-toggle") || target.closest(".mobile-nav-toggle")) {
        document.body.classList.toggle("mobile-nav-active");
        const btn = document.querySelector(".mobile-nav-toggle");
        btn?.classList.toggle("bi-list");
        btn?.classList.toggle("bi-x");
      }

      // Mobile nav link click
      if (target.matches("#navmenu a")) {
        if (document.body.classList.contains("mobile-nav-active")) {
          document.body.classList.remove("mobile-nav-active");
          const btn = document.querySelector(".mobile-nav-toggle");
          btn?.classList.add("bi-list");
          btn?.classList.remove("bi-x");
        }
      }

      // Mobile dropdown toggle
      if (target.matches(".navmenu .toggle-dropdown")) {
        e.preventDefault();
        const parent = target.parentElement;
        parent?.classList.toggle("active");
        const next = parent?.nextElementSibling as HTMLElement;
        next?.classList.toggle("dropdown-active");
        e.stopPropagation();
      }

      // FAQ toggle
      if (
        target.matches(".faq-item h3") ||
        target.matches(".faq-item .faq-toggle")
      ) {
        target.parentElement?.classList.toggle("faq-active");
      }
    };

    document.addEventListener("click", handleClick);

    /** PRELOADER */
    const preloader = document.querySelector("#preloader");
    if (preloader) window.addEventListener("load", () => preloader.remove());

    /** SCROLL TOP BUTTON */
    const scrollTop = document.querySelector(".scroll-top");
    const toggleScrollTop = () => {
      if (!scrollTop) return;
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    scrollTop?.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    window.addEventListener("load", toggleScrollTop);
    document.addEventListener("scroll", toggleScrollTop);

    /** AOS ANIMATION */
    const aosInit = () => {
      AOS.init({
        duration: 100,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    };
    window.addEventListener("load", aosInit);

    /** INIT GLIGHTBOX */
    GLightbox({ selector: ".glightbox" });

    /** INIT SWIPER */
    const initSwiper = () => {
      document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
        const configEl = swiperElement.querySelector(".swiper-config");
        if (!configEl) return;
        const config = JSON.parse(configEl.innerHTML.trim());
        new Swiper(swiperElement as HTMLElement, config);
      });
    };
    window.addEventListener("load", initSwiper);

    /** HASH SCROLL CORRECTION */
    window.addEventListener("load", () => {
      if (window.location.hash) {
        const section: any = document.querySelector(window.location.hash);
        if (section) {
          setTimeout(() => {
            const scrollMarginTop = parseInt(
              getComputedStyle(section).scrollMarginTop || "0"
            );
            window.scrollTo({
              top: section.offsetTop - scrollMarginTop,
              behavior: "smooth",
            });
          }, 100);
        }
      }
    });

    /** NAVMENU SCROLLSPY */
    const navlinks = document.querySelectorAll(".navmenu a");
    const navmenuScrollspy = () => {
      navlinks.forEach((link: any) => {
        if (!link.hash) return;
        const section = document.querySelector(link.hash);
        if (!section) return;
        const position = window.scrollY + 200;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          document.querySelectorAll(".navmenu a.active").forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    };
    window.addEventListener("load", navmenuScrollspy);
    document.addEventListener("scroll", navmenuScrollspy);

    /** CLEANUP ON UNMOUNT */
    return () => {
      document.removeEventListener("scroll", toggleScrolled);
      document.removeEventListener("click", handleClick);
      window.removeEventListener("load", aosInit);
      window.removeEventListener("load", toggleScrollTop);
      window.removeEventListener("load", initSwiper);
      window.removeEventListener("load", navmenuScrollspy);
    };
  }, [location]); // <--- rerun on route change
};
