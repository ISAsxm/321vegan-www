"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <button
      className="fixed bottom-0 right-0 p-3 mr-6 mb-[71px] rounded-full z-50 flex items-center justify-center bg-brand-300 text-white cursor-pointer hover:-translate-y-1 hover:scale-[1.05] duration-500"
      onClick={scrollToTop}
      aria-label="Revenir en haut de page"
    >
      <ChevronUp className="size-5" aria-hidden="true" />
    </button>
  );
};

export default ScrollToTop;
