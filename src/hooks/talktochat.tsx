
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type TawkToChatProps = {
  enabled?: boolean;
};

export const TawkToChat = ({
  enabled = true,
}: TawkToChatProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!enabled) return;

    const isLandingPage = pathname === "/";
    const tawk = (window as any).Tawk_API;

    // If Tawk.to is already initialized, just show or hide it
    if (tawk && typeof tawk.showWidget === "function") {
      if (isLandingPage) {
        tawk.showWidget();
      } else {
        tawk.hideWidget();
      }
      return;
    }

    // Don't load the script on other routes
    if (!isLandingPage) return;

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
  }, [enabled, pathname]);

  // Control visibility after Tawk.to finishes loading
  useEffect(() => {
    if (!enabled) return;

    const tawk = (window as any).Tawk_API;
    if (!tawk) return;

    if (pathname === "/") {
      tawk.showWidget?.();
    } else {
      tawk.hideWidget?.();
    }
  }, [enabled, pathname]);

  return null;
};
