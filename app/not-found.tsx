import Link from "next/link";
import { ArrowRight } from "lucide-react";

function NotFound() {
  return (
    <div className="grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <header>
          <h1 className=" text-lg font-semibold text-brand-600">404</h1>
          <h2 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-brand-800 sm:text-7xl">
            Page non trouvée <small>😕</small>
          </h2>
        </header>

        <main>
          <h2 className="mt-6 text-lg font-medium text-pretty sm:text-xl/8 font-merriweather">
            Désolé, nous n&apos;avons pas trouvé la page que vous recherchez.
          </h2>

          <div className="mt-10 flex items-center justify-center">
            <Link
              href="/"
              className="mt-5 py-3 px-8 w-max flex items-center justify-center gap-2 font-semibold mx-auto rounded-lg cursor-pointer border border-white bg-brand-500 text-white relative z-0 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-lg after:bg-brand-500 hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500 "
            >
              Retour au site
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default NotFound;
