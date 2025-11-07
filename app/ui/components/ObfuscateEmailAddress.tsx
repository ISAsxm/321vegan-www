"use client";
import Link from "next/link";
import { ClipboardEvent, HTMLProps } from "react";
import { owner } from "@/assets/assets";

const ObfuscateEmailAddress = ({ ...props }: HTMLProps<HTMLAnchorElement>) => {
  const emailAddress = owner.email;
  const reverseString = (s: string) => {
    return [...s].reverse().join("");
  };

  const handleClipboardEvent = (e: ClipboardEvent<HTMLElement>) => {
    const selection = document.getSelection();
    if (!selection) return;
    e.clipboardData.setData("text/plain", reverseString(selection.toString()));
    e.preventDefault();
  };

  return (
    <Link
      href="/contact"
      aria-label={reverseString(emailAddress)}
      onCopy={handleClipboardEvent}
      {...props}
    >
      <bdo dir="rtl">{emailAddress}</bdo>
    </Link>
  );
};

export default ObfuscateEmailAddress;
