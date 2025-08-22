
'use client';


/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";  

export default function TurnstilePage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // render after script loads
    script.onload = () => {
      (window as any).turnstile?.render("#cf-turnstile", {
        sitekey: "0x4AAAAAABsPRu6Ia4tf3xpx",
        callback: (token: string) => {
          // send back to RN app
          (window as any).ReactNativeWebView?.postMessage(JSON.stringify({ token }));
        }
      });
    };
  }, []);

  return <div id="cf-turnstile" />;
}