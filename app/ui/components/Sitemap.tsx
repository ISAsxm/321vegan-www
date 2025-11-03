import Link from "next/link";
import AppleStoreBadge from "./AppleStoreBadge";
import GooglePlayBadge from "./GooglePlayBadge";
import Logo from "./Logo";
import { sitemapData } from "@/assets/assets";

const Sitemap = () => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row gap-8 pt-14 pb-14">
          <div className="w-full xl:max-w-[265px] max-xl:mb-8">
            <Link
              href="/"
              className="cursor-pointer flex items-center justify-center lg:justify-start gap-1"
            >
              <Logo className="size-8 lg:size-12" />{" "}
              <span className="text-brand-600 font-extrabold">321 Vegan</span>
            </Link>
            <div className="flex max-xl:items-center max-xl:justify-between flex-col sm:flex-row xl:flex-col">
              <p className="text-brand-500 mb-5 text-center lg:text-left">
                Téléchargez l&apos;application dès maintenant
              </p>
              <div className="flex flex-col max-xl:items-center gap-8 ">
                <span className=" flex justify-center lg:justify-start group w-max">
                  <AppleStoreBadge />
                </span>
                <span className="flex justify-center lg:justify-start group w-max">
                  <GooglePlayBadge />
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 min-[890px]:grid-cols-4 lg:grid-cols-4 gap-4 xl:gap-8 w-full max-w-sm mx-auto sm:max-w-3xl min-[890px]:max-w-full">
            <div className="w-full text-left">
              <div className="text-xl text-brand-900 font-medium mb-7">
                Général
              </div>
              <ul className=" transition-all duration-500">
                <li className="mb-6">
                  <Link
                    href="/"
                    className="hover:text-brand-600 transition duration-300"
                  >
                    Accueil
                  </Link>
                </li>
                {sitemapData
                  .filter((item) => item.category === "general")
                  .map(({ url, label, category }, index) => (
                    <li
                      className="mb-6"
                      key={`sitemap-link-${category}-${index}`}
                    >
                      <Link
                        href={url}
                        className="hover:text-brand-600 transition duration-300"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="w-full  text-left">
              <h4 className="text-xl text-brand-900 font-medium mb-7">
                Services
              </h4>
              <ul className=" transition-all duration-500">
                {sitemapData
                  .filter((item) => item.category === "services")
                  .map(({ url, label, category }, index) => (
                    <li
                      className="mb-6"
                      key={`sitemap-link-${category}-${index}`}
                    >
                      <Link
                        href={url}
                        className="hover:text-brand-600 transition duration-300"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="w-full  text-left">
              <h4 className="text-xl text-gray-900 font-medium mb-7">
                Ressources
              </h4>
              <ul className="  transition-all duration-500">
                {sitemapData
                  .filter((item) => item.category === "resources")
                  .map(({ url, label, category }, index) => (
                    <li
                      className="mb-6"
                      key={`sitemap-link-${category}-${index}`}
                    >
                      <Link
                        href={url}
                        className="hover:text-brand-600 transition duration-300"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="w-full text-left">
              <h4 className="text-xl text-brand-900 font-medium mb-7">
                Support
              </h4>
              <ul className="transition-all duration-500">
                {sitemapData
                  .filter((item) => item.category === "support")
                  .map(({ url, label, category }, index) => (
                    <li
                      className="mb-6"
                      key={`sitemap-link-${category}-${index}`}
                    >
                      {url === "/contact" ? (
                        <Link
                          href={url}
                          className="hover:text-brand-600 transition duration-300"
                        >
                          {label}
                        </Link>
                      ) : (
                        <Link
                          href={url}
                          target="_blank"
                          className="hover:text-brand-600 transition duration-300"
                        >
                          {label}
                        </Link>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
