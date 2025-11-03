"use client";
import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  Dispatch,
  SetStateAction,
} from "react";
import { IS_DEVMODE } from "@/constants/index";

interface AltchaProps {
  onStateChange?: Dispatch<SetStateAction<string | null>>;
}

const widgetFr = {
  error: "Vérification échouée. Veuillez réessayer ultérieurement.",
  expired: "Vérification expirée. Veuillez réessayer.",
  footer:
    'Protégé par <a href="https://altcha.org/" target="_blank" aria-label="Visit Altcha.org">ALTCHA</a>',
  label: "Je ne suis pas un robot",
  verified: "Vérifié",
  verifying: "Vérification...",
  waitAlert: "Vérification... veuillez patienter.",
};

const Altcha = forwardRef<{ value: string | null }, AltchaProps>(
  ({ onStateChange }, ref) => {
    const challengeUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/captcha/challenge`;
    const widgetRef = useRef<HTMLElement>(null);
    const [value, setValue] = useState<string | null>(null);

    useImperativeHandle(
      ref,
      () => {
        return {
          get value() {
            return value;
          },
        };
      },
      [value]
    );

    useEffect(() => {
      import("altcha");
    }, []);

    useEffect(() => {
      const handleStateChange = (ev: Event | CustomEvent) => {
        if ("detail" in ev) {
          setValue(ev.detail.payload || null);
          onStateChange?.(ev.detail.payload || null);
        }
      };
      const { current } = widgetRef;
      if (current) {
        current.addEventListener("statechange", handleStateChange);
        return () =>
          current.removeEventListener("statechange", handleStateChange);
      }
    }, [onStateChange]);

    return (
      <altcha-widget
        ref={widgetRef}
        challengeurl={challengeUrl}
        style={{
          "--altcha-max-width": "100%",
          "--altcha-color-border": "var(--color-brand-300)",
          "--altcha-color-error-text": "var(--color-red-200)",
        }}
        strings={JSON.stringify(widgetFr)}
        hidelogo={true}
        debug={IS_DEVMODE}
        delay={200}
      ></altcha-widget>
    );
  }
);

Altcha.displayName = "Altcha";
export default Altcha;
