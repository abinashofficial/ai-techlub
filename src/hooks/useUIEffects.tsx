import { useEffect } from "react";
import AOS from "aos";
import GLightbox from "glightbox";
import Swiper from "swiper";
import "swiper/css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.css";

export const useUIEffects = () => {
  useEffect(() => {
    /** Apply .scrolled class on scroll */
    const toggleScrolled = () => {
      const body = document.querySelector("body");
      const header = document.querySelector("#header");
      if (!header) return;
      if (
        !header.classList.contains("scroll-up-sticky") &&
        !header.classList.contains("sticky-top") &&
        !header.classList.contains("fixed-top")
      )
        return;

      if (window.scrollY > 100) body?.classList.add("scrolled");
      else body?.classList.remove("scrolled");
    };

    document.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);

    /** Mobile nav toggle */
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
    const toggleMobileNav = () => {
      document.body.classList.toggle("mobile-nav-active");
      mobileNavToggleBtn?.classList.toggle("bi-list");
      mobileNavToggleBtn?.classList.toggle("bi-x");
    };
    mobileNavToggleBtn?.addEventListener("click", toggleMobileNav);

    /** Hide mobile nav on link click */
    document.querySelectorAll("#navmenu a").forEach((link) => {
      link.addEventListener("click", () => {
        if (document.body.classList.contains("mobile-nav-active")) {
          toggleMobileNav();
        }
      });
    });

    /** Toggle mobile dropdowns */
    document.querySelectorAll(".navmenu .toggle-dropdown").forEach((dropdown) => {
      dropdown.addEventListener("click", (e) => {
        e.preventDefault();
        const parent = dropdown.parentElement;
        parent?.classList.toggle("active");
        const next = parent?.nextElementSibling as HTMLElement;
        next?.classList.toggle("dropdown-active");
        e.stopImmediatePropagation();
      });
    });

    /** Preloader */
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.remove();
      });
    }

    /** Scroll top button */
    const scrollTop = document.querySelector(".scroll-top");
    const toggleScrollTop = () => {
      if (scrollTop) {
        window.scrollY > 100
          ? scrollTop.classList.add("active")
          : scrollTop.classList.remove("active");
      }
    };

    scrollTop?.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    window.addEventListener("load", toggleScrollTop);
    document.addEventListener("scroll", toggleScrollTop);

    /** Animation on scroll */
    const aosInit = () => {
      AOS.init({
        duration: 100,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    };
    window.addEventListener("load", aosInit);

    /** Init GLightbox */
    GLightbox({ selector: ".glightbox" });

    /** FAQ toggle */
    document
      .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
      .forEach((faqItem) => {
        faqItem.addEventListener("click", () => {
          faqItem.parentElement?.classList.toggle("faq-active");
        });
      });

    /** Init Swiper */
    const initSwiper = () => {
      document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
        const configEl = swiperElement.querySelector(".swiper-config");
        if (!configEl) return;
        const config = JSON.parse(configEl.innerHTML.trim());
        new Swiper(swiperElement as HTMLElement, config);
      });
    };
    window.addEventListener("load", initSwiper);

    /** Correct scroll on hash links */
    window.addEventListener("load", () => {
      if (window.location.hash) {
        const section :any = document.querySelector(window.location.hash);
        if (section) {
          setTimeout(() => {
            const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
            window.scrollTo({
              top: section.offsetTop - parseInt(scrollMarginTop),
              behavior: "smooth",
            });
          }, 100);
        }
      }
    });

    /** Navmenu scrollspy */
    const navmenulinks = document.querySelectorAll(".navmenu a");
    const navmenuScrollspy = () => {
      navmenulinks.forEach((link:any) => {
        if (!link.hash) return;
        const section = document.querySelector(link.hash);
        if (!section) return;
        const position = window.scrollY + 200;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          document
            .querySelectorAll(".navmenu a.active")
            .forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    };

    window.addEventListener("load", navmenuScrollspy);
    document.addEventListener("scroll", navmenuScrollspy);

    /** Cleanup */
    return () => {
      document.removeEventListener("scroll", toggleScrolled);
      mobileNavToggleBtn?.removeEventListener("click", toggleMobileNav);
      window.removeEventListener("load", aosInit);
    };
  }, []);
};
