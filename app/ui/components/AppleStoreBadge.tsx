import { appStoreLinks } from "@/assets/assets";
import Image from "next/image";

const AppleStoreBadge = () => {
  return (
    <a
      href={appStoreLinks.apple}
      target="_blank"
      rel="noopener noreferrer"
      className="w-50 relative z-0 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded hover:after:bg-black hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500"
      aria-label="Téléchargez l'application pour IOS"
    >
      <Image src="/apple-badge.png" alt="" width={1024} height={303} />
    </a>
  );
};

export default AppleStoreBadge;
