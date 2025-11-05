import { owner, socialNetworkLinks } from "@/assets/assets";
import { Mail } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";
import Sitemap from "./Sitemap";
import ObfuscateEmailAddress from "./ObfuscateEmailAddress";

const Footer = () => {
  return (
    <footer className="mt-20">
      <section className="text-center">
        <div className="size-15 mx-auto">
          <Logo />
        </div>

        <div className="w-max flex items-center justify-center gap-2 mx-auto">
          <div className="flex items-center gap-1">
            <Mail strokeWidth={1} aria-hidden="true" />
            <ObfuscateEmailAddress className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-brand-500 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100" />
          </div>
          <div className="h-4 border-l border-gray-400"></div>
          <a
            href={socialNetworkLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-12 items-center gap-1 overflow-hidden rounded-md"
            aria-label="Instagram @321vegan.app"
          >
            <Image
              src="/logo-instagram.png"
              alt=""
              width={1500}
              height={1500}
              className="size-5"
            />
            <span className="hidden lg:block w-[14ch] relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-brand-500 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom group-hover:after:scale-x-100">
              @321vegan.app
            </span>
          </a>
          <div className="h-4 border-l border-gray-400"></div>
          <a
            href={socialNetworkLinks.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-12 items-center gap-1 overflow-hidden rounded-md"
            aria-label="Serveur Discord 321Vegan"
          >
            <Image
              src="/discord-symbol-blurple.png"
              alt=""
              width={528}
              height={400}
              className="w-5 h-4"
            />
            <span className="hidden lg:block w-[8ch] relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-brand-500 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom group-hover:after:scale-x-100">
              321Vegan
            </span>
          </a>
          <div className="h-4 border-l border-gray-400"></div>
          <a
            href={socialNetworkLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-12 items-center gap-1 overflow-hidden rounded-md"
            aria-label="GitHub 321vegan-app"
          >
            <Image
              src="/github-mark.png"
              alt=""
              width={240}
              height={240}
              className="size-5"
            />
            <span className="hidden lg:block w-[12ch] relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-brand-500 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom group-hover:after:scale-x-100">
              321vegan-app
            </span>
          </a>
        </div>
      </section>

      <section className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <Sitemap />
      </section>

      <section className="py-7 border-t border-gray-400 mx-[10%]">
        <div className="flex items-center justify-center flex-col sm:justify-between sm:flex-row">
          <span className="text-sm text-gray-500 ">
            &copy;
            <Link
              href="/"
              className="hover:text-brand-600 transition duration-300"
            >
              {owner.name} 🌱
            </Link>{" "}
            {new Date().getFullYear()}, Tous droits réservés.
          </span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
