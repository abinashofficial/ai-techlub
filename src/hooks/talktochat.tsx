import { useEffect } from "react";

type TawkToChatProps = {
  enabled?: boolean;
};

export const TawkToChat = ({ enabled = true }: TawkToChatProps) => {
  useEffect(() => {
    if (!enabled) return; // 🔴 disabled

    const timer = setTimeout(() => {
      if (document.getElementById("tawk-script")) return;

      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];

      (window as any).Tawk_API = (window as any).Tawk_API || {};
      (window as any).Tawk_LoadStart = new Date();

      s1.id = "tawk-script";
      s1.async = true;
      s1.src = "https://embed.tawk.to/68f4f362abd1d819558fb249/1j7uddefk";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");

      s0?.parentNode?.insertBefore(s1, s0) || document.body.appendChild(s1);
    }, 5000);

    return () => {
      clearTimeout(timer);

      // Remove script
      document.getElementById("tawk-script")?.remove();

      // Remove widget if already loaded
      if ((window as any).Tawk_API?.hideWidget) {
        (window as any).Tawk_API.hideWidget();
      }
    };
  }, [enabled]);

  return null;
};
