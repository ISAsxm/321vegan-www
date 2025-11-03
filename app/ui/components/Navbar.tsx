"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import Logo from "./Logo";

const menus = [
  { href: "/", label: "Accueil", childs: null },
  { href: "/a-propos", label: "À propos", childs: null },
  {
    href: "/",
    label: "Services",
    childs: [
      { href: "/scanner-vegan", label: "Scan de codes-barres" },
      { href: "/verification-d-additifs", label: "Vérification d'additifs" },
      {
        href: "/verification-de-cosmetiques",
        label: "Vérification de cosmétiques",
      },
      { href: "/suivi-d-impact", label: "Suivi d'impact" },
      { href: "/partenaires", label: "Nos partenaires" },
    ],
  },
  { href: "/contact", label: "Contact", childs: null },
];

const Navbar = () => {
  const pathname = usePathname();
  const sideMenuRef = useRef<null | HTMLUListElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleOpenMenu = () => {
    if (sideMenuRef.current)
      sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const handleCloseMenu = useCallback(() => {
    if (sideMenuRef.current)
      sideMenuRef.current.style.transform = "translateX(16rem)";
  }, []);

  useEffect(() => {
    const handleClick = (e: Event) => {
      if (
        sideMenuRef.current &&
        !sideMenuRef.current.contains(e.target as Element)
      )
        handleCloseMenu();
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [handleCloseMenu]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={clsx(
        "w-full fixed px-5 lg:px-8 x1:px-[8%] py-4 flex items-center justify-between z-50",
        {
          "bg-white lg:opacity-90 backdrop-blur-lg shadow-sm": isScrolling,
        }
      )}
    >
      <Link href="/" className="cursor-pointer inline-flex items-center gap-1">
        <Logo className="size-8 lg:size-12" />{" "}
        <span className="text-brand-600 font-extrabold">321 Vegan</span>
      </Link>

      <div className="flex items-center gap-4">
        <button
          className="block lg:hidden ml-3"
          onClick={handleOpenMenu}
          aria-label="Ouvrir le menu"
        >
          <Menu
            className="size-6 cursor-pointer text-brand-600"
            aria-hidden="true"
          />
        </button>
      </div>

      {/* mobile menu */}
      <ul
        ref={sideMenuRef}
        className="flex lg:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white/96 shadow-sm transition duration-500"
      >
        <li>
          <button
            className="absolute right-5 top-6"
            onClick={handleCloseMenu}
            aria-label="Fermer le menu"
          >
            <X
              className="size-6 cursor-pointer text-brand-600"
              aria-hidden="true"
            />
          </button>
        </li>
        {menus.map(({ href, label, childs }, index) => (
          <li key={index} className="py-1">
            {childs ? (
              <details className="group">
                <summary
                  className={clsx(
                    "inline-flex items-center gap-2 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-brand-500 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] marker:content-none marker:hidden ",
                    {
                      "after:scale-x-100": childs.some(
                        (child) => pathname === child.href
                      ),
                    }
                  )}
                >
                  {label}
                  <ChevronRight className="size-3 text-brand-950 transition-transform duration-300 rotate-0 group-open:rotate-90" />
                </summary>

                <article>
                  <ul className="flex flex-col gap-1 pl-2 py-1 pr-1 w-full">
                    {childs.map((child, i) => (
                      <li key={`child-${i}`}>
                        <Link
                          href={child.href}
                          className={clsx(
                            "pb-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-brand-500 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]",
                            {
                              "after:scale-x-100": pathname === child.href,
                            }
                          )}
                          onClick={handleCloseMenu}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              </details>
            ) : (
              <Link
                href={href}
                className={clsx(
                  "pb-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-brand-500 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]",
                  {
                    "after:scale-x-100": pathname === href,
                  }
                )}
                onClick={handleCloseMenu}
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* other devices menu */}
      <ul className="hidden lg:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
        {menus.map(({ href, label, childs }, index) => (
          <li key={index}>
            {childs ? (
              <div className="group relative cursor-pointer">
                <span
                  className={clsx(
                    "inline-flex items-center gap-2 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-brand-500 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100",
                    {
                      "after:scale-x-100": childs.some(
                        (child) => pathname === child.href
                      ),
                    }
                  )}
                >
                  {label}
                  <ChevronDown className="size-4 text-brand-950 rotate-0 group-hover:rotate-180 transition-transform duration-300" />
                </span>
                <ul className="invisible w-full min-w-max absolute z-50 flex flex-col gap-2 py-1 px-4 group-hover:visible bg-white backdrop-blur-lg shadow-sm">
                  {childs.map((child, i) => (
                    <li key={`child-${i}`} className="last:pb-2">
                      <Link
                        className={clsx(
                          "pb-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-brand-500 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100",
                          {
                            "after:scale-x-100": pathname === child.href,
                          }
                        )}
                        href={child.href}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                className={clsx(
                  "pb-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-brand-500 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100",
                  {
                    "after:scale-x-100": pathname === href,
                  }
                )}
                href={href}
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
