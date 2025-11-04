import { Metadata } from "next";
import { mockups } from "@/assets/assets";
import Image from "next/image";
import AppStoresCta from "@/app/ui/components/AppStoresCta";
import AdditivesSection from "@/app/ui/additives/AdditivesSection";
import JoinUsCta from "@/app/ui/components/JoinUsCta";

export const metadata: Metadata = {
  title: "Vérification d'additifs",
  description:
    "Consultez rapidement si un additif est végétalien grâce à notre base de données d'additifs.",
};

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-16 space-y-24 lg:px-[12%]">
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 py-24 mx-auto xl:px-0 mt-5">
        <header>
          <h1 className="mb-1 text-5xl text-brand-600 font-extrabold leading-tight">
            Vérification d&apos;additifs
          </h1>
        </header>

        <main>
          <section>
            <h2 className="mb-12 text-lg font-merriweather">
              Consultez rapidement si un additif est végétalien grâce à notre
              base de données d&apos;additifs
            </h2>

            <div className="flex flex-col lg:flex-row mx-auto overflow-hidden">
              <div className="lg:w-1/2 flex-1">
                <Image
                  src={mockups.mockupAdditives}
                  alt=""
                  width={1080}
                  height={1920}
                  className="object-content w-auto h-auto mx-auto lg:w-full lg:mx-0 lg:-ml-8 hover:-translate-y-1 hover:scale-[1.1] transition-all duration-500"
                />
              </div>
              <div className="lg:p-4 p-2 lg:w-1/2 flex flex-col gap-6 flex-2 mb-12">
                <p className="text-justify lg:pt-12 leading-relaxed">
                  <strong>
                    Les étiquettes deviennent facile à déchiffrer grâce à la
                    recherche d&apos;additifs de l&apos;appli 321 Vegan
                  </strong>
                  , même sans accès a internet.
                </p>
                <p className="text-justify leading-relaxed">
                  <strong>
                    Saissisez simplement le code ou le nom d&apos;un additif
                    pour vérifier s&apos;il est végane ou non.
                  </strong>
                </p>
                <p className="text-justify leading-relaxed">
                  La base de données des additifs est{" "}
                  <strong>
                    disponible hors ligne sur l&apos;application, pratique pour
                    vérifier un ingédient même dans les zones sans réseau.
                  </strong>
                </p>
                <p className="text-justify leading-relaxed">
                  Grâce à l&apos;appli 321 Vegan,{" "}
                  <strong>
                    les additifs douteux ne sont plus un problème&nbsp;
                  </strong>
                  !
                </p>
                <section className="lg:mt-auto">
                  <AppStoresCta />
                </section>
              </div>
            </div>
          </section>

          <AdditivesSection />

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
}
