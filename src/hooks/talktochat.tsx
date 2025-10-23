import { useEffect } from "react";

export const TawkToChat = () => {
  useEffect(() => {
    // Initialize Tawk.to
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];

    (window as any).Tawk_API = (window as any).Tawk_API || {};
    (window as any).Tawk_LoadStart = new Date();

    s1.async = true;
    s1.src = "https://embed.tawk.to/68f4f362abd1d819558fb249/1j7uddefk";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.body.appendChild(s1);
    }

    // Cleanup (optional)
    return () => {
      const existingScript = document.querySelector(
        'script[src="https://embed.tawk.to/68f4f362abd1d819558fb249/1j7uddefk"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // no UI element needed
};

