import { Metadata } from "next";
import { mockups } from "@/assets/assets";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AppStoresCta from "@/app/ui/components/AppStoresCta";
import JoinUsCta from "@/app/ui/components/JoinUsCta";
import HowDoesItWork from "@/app/ui/scan/HowDoesItWork";

export const metadata: Metadata = {
  title: "Scanner végane",
  description:
    "Grâce à l'appli 321 Vegan, scannez les codes barres des produits pour savoir en un clin d'œil s'ils sont véganes. Les arômes naturels, additifs douteux, ingrédients inconnus, ... ne sont plus un problème !",
};

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-16 space-y-24 lg:px-[12%]">
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 py-24 mx-auto xl:px-0 mt-5">
        <header>
          <h1 className="mb-1 text-5xl text-brand-600 font-extrabold leading-tight">
            Vegan Scan
          </h1>
        </header>

        <main>
          <section>
            <h2 className="mb-12 text-lg font-merriweather">
              Idéal pour vos courses, même dans les zones sans réseau&nbsp;!
            </h2>
            <div className="flex flex-col lg:flex-row mx-auto overflow-hidden">
              <div className="lg:w-1/2 flex-1">
                <Image
                  src={mockups.mockupScan}
                  alt=""
                  width={1080}
                  height={1920}
                  className="object-content w-auto h-auto mx-auto lg:w-full lg:mx-0 lg:-ml-8 hover:-translate-y-1 hover:scale-[1.1] transition-all duration-500"
                />
              </div>
              <div className="lg:p-4 p-2 lg:w-1/2 flex flex-col gap-6 flex-2 mb-12">
                <p className="text-justify lg:pt-12 leading-relaxed">
                  Grâce à l&apos;appli 321 Vegan,{" "}
                  <strong>
                    scannez les codes barres des produits pour savoir en un clin
                    d&apos;œil s&apos;ils sont véganes
                  </strong>
                  . Les arômes naturels, additifs douteux, ingrédients inconnus,
                  ... ne sont plus un problème&nbsp;!
                </p>
                <p className="text-justify leading-relaxed">
                  Vous pouvez{" "}
                  <strong>
                    proposer des produits s&apos;ils ne sont pas référencés, et
                    suivre l&apos;avancement de leur ajout sur
                    l&apos;application
                  </strong>
                  . Ainsi,{" "}
                  <strong>
                    vous participez à aider la communauté végane à identifier
                    les produits qui le sont
                  </strong>
                  . L&apos;application est{" "}
                  <strong>entièrement gratuite et sans publicités</strong>.
                </p>
                <section className="lg:mt-auto">
                  <AppStoresCta />
                </section>
              </div>
            </div>
          </section>

          <section>
            <h2 className="my-12 text-lg font-merriweather">
              Comment utiliser le scanner de codes-barres 321 Vegan&nbsp;:
            </h2>

            <HowDoesItWork />

            <p className="mt-12 mb-16 leading-relaxed italic">
              Chaque produit est vérifié manuellement par l&apos;équipe de
              contributrices et contributeurs. Le scan est prévu pour les
              produits alimentaires, pour les cosmétiques, vous pouvez utiliser{" "}
              <Link
                href="/verification-de-cosmetiques"
                className="pb-1 inline-flex items-center gap-2 border-b-2 border-brand-500 cursor-pointer hover:shadow-[0_1rem_2rem] hover:bg-brand-500 hover:text-white hover:-translate-y-1 focus:bg-brand-500 focus:text-white active:bg-brand-500 active:text-white transition-transform duration-300"
              >
                la page recherche
                <ArrowRight
                  className="size-4 text-current"
                  aria-hidden="true"
                />
              </Link>
              .
            </p>
          </section>

          <section>
            <JoinUsCta
              bgColor="bg-brand-600"
              btnColor="bg-brand-800 after:bg-brand-800"
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Page;
