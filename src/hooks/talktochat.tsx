import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type TawkToChatProps = {
  enabled?: boolean;
};

export const TawkToChat = ({
  enabled = true,
}: TawkToChatProps) => {
  const { pathname } = useLocation();

  // Pages where the chat widget should be displayed
  const allowedPages = [
    "/",
    "/about",
    "/features",
    "/services",
    "/pricing",
     "/contact",
     "/products"
  ];

  const shouldShowChat = allowedPages.includes(pathname);

  useEffect(() => {
    if (!enabled) return;

    const tawk = (window as any).Tawk_API;

    // Show or hide if Tawk.to is already initialized
    if (tawk && typeof tawk.showWidget === "function") {
      if (shouldShowChat) {
        tawk.showWidget();
      } else {
        tawk.hideWidget();
      }
      return;
    }

    // Load the script only on allowed pages
    if (!shouldShowChat) return;

    // Prevent duplicate script loading
    if (document.getElementById("tawk-script")) return;

    const timer = window.setTimeout(() => {
      if (document.getElementById("tawk-script")) return;

      (window as any).Tawk_API =
        (window as any).Tawk_API || {};

      (window as any).Tawk_LoadStart = new Date();

      const script = document.createElement("script");
      script.id = "tawk-script";
      script.async = true;
      script.src =
        "https://embed.tawk.to/68f4f362abd1d819558fb249/1j7uddefk";
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");

      document.body.appendChild(script);
    }, 5000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [enabled, pathname, shouldShowChat]);

  // Update widget visibility when the route changes
  useEffect(() => {
    if (!enabled) return;

    const tawk = (window as any).Tawk_API;
    if (!tawk) return;

    if (shouldShowChat) {
      tawk.showWidget?.();
    } else {
      tawk.hideWidget?.();
    }
  }, [enabled, pathname, shouldShowChat]);

  return null;
};
