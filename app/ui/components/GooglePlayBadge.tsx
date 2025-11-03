import Image from "next/image";
import { appStoreLinks } from "@/assets/assets";

const GooglePlayBadge = () => {
  return (
    <a
      href={appStoreLinks.google}
      target="_blank"
      rel="noopener noreferrer"
      className="w-50 relative z-0 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded hover:after:bg-black hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500"
      aria-label="Téléchargez l'application pour Android"
    >
      <Image src="/google-badge.png" alt="" width={1200} height={356} />
    </a>
  );
};

export default GooglePlayBadge;
