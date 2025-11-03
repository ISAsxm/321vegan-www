import { Metadata } from "next";
import Image from "next/image";
import AppStoresCta from "@/app/ui/components/AppStoresCta";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'histoire de 321 Vegan, l'application de scanner de codes-barres créée par un végane, pour les véganes.",
};

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-16 space-y-24 sm:px-[12%]">
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 py-24 mx-auto xl:px-0 mt-5">
        <header>
          <h1 className="mb-1 text-5xl text-brand-600 font-extrabold leading-tight">
            À propos de 321 Vegan
          </h1>
        </header>

        <main>
          <section>
            <h2 className="mb-12 text-lg font-merriweather">
              Découvrez l&apos;histoire de 321 Vegan, l&apos;application créée
              par un végane, pour les véganes.
            </h2>

            <blockquote className="border-l-4 border-brand-500 italic my-8 pl-4 lg:pl-8 py-4 mx-4 lg:mx-10 ">
              <p className="text-lg font-medium leading-relaxed">
                En explorant les applications pour véganes déjà existantes,
                j&apos;ai remarqué que celles proposant une fonction de scan de
                produits étaient souvent peu performantes, rarement mises à jour
                et parfois peu fiables. C&apos;est ainsi qu&apos;est née
                l&apos;idée de créer l&apos;appli 321 Vegan, dans le but
                d&apos;offrir un outil fiable et utile à toutes et tous.
              </p>
              <cite className="block text-right mt-4 text-brand-600">
                - Camille, fondateur de 321 Vegan
              </cite>
            </blockquote>
          </section>

          <article className="bg-brand-600 rounded-lg shadow-sm p-12 mt-12 mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6">
              321 Vegan, des origines à l&apos;actualité
            </h2>
            <div className="space-y-4 leading-relaxed text-white">
              <Image
                className="lg:float-right w-xs mx-auto lg:mx-0 lg:w-sm h-auto  hover:-translate-y-1 hover:scale-[1.1] transition-all duration-500"
                src="/logo-light.png"
                alt="Logo 321 Vegan"
                width={915}
                height={915}
                priority
              />
              <p className="text-lg leading-relaxed">
                À l&apos;origine, 321 Vegan était un simple{" "}
                <strong>
                  site web permettant de calculer l&apos;impact d&apos;une
                  alimentation végétale sur les animaux non humains et sur
                  l&apos;environnement
                </strong>
                . L&apos;idée était inspirée des applications qui aident à
                arrêter de fumer. Peu à peu, j&apos;ai eu envie d&apos;en{" "}
                <strong>faire une application mobile</strong>. En explorant les
                applications déjà existantes, je me suis aperçu que{" "}
                <strong>
                  celles proposant une fonction de scan de produits étaient
                  souvent peu performantes, rarement mises à jour et parfois peu
                  fiables
                </strong>
                .
              </p>
              <p className="text-lg leading-relaxed">
                Pourtant,{" "}
                <strong>
                  cette fonctionnalité peut rendre de grands services
                </strong>
                &nbsp;:
              </p>
              <ul className="list-(--plant-marker) pl-4 text-lg leading-relaxed">
                <li className="pl-1">
                  aux <strong>personnes ayant des problèmes de vue</strong>,
                  pour qui <strong>lire les étiquettes est difficile</strong>,
                </li>
                <li className="pl-1">
                  aux <strong>nouveaux véganes</strong>, souvent piégés par{" "}
                  <strong>
                    des ingrédients d&apos;origine animale dissimulés
                  </strong>
                  ,
                </li>
                <li className="pl-1">
                  et même aux <strong>véganes expérimentés</strong>, qui
                  découvrent parfois que{" "}
                  <strong>
                    certains produits apparemment compatibles ne le sont pas
                    vraiment
                  </strong>
                  .
                </li>
              </ul>
              <p className="text-lg leading-relaxed">
                Un autre problème récurrent&nbsp;:{" "}
                <strong>
                  la plupart de ces applications nécessitent une connexion
                  internet pour fonctionner
                </strong>
                . Mais{" "}
                <strong>
                  dans de nombreux magasins, le réseau est faible ou inexistant
                  et le scan des produits est donc très lent, voir impossible
                </strong>
                . Il fallait donc créer{" "}
                <strong>
                  une application fiable, pratique et utilisable hors ligne
                </strong>
                . Après quelques mois de développement,{" "}
                <strong>
                  elle a vu le jour sur Google Play et l&apos;App Store en
                  novembre 2024
                </strong>
                .
              </p>
              <p className="text-lg leading-relaxed">
                Depuis,{" "}
                <strong>
                  l&apos;application a beaucoup évolué et propose de nouvelles
                  fonctionnalités
                </strong>
                , telles que{" "}
                <strong>
                  la recherche d&apos;additifs et de marques de cosmétiques
                </strong>
                , ou encore{" "}
                <strong>
                  des codes promotionnels pour bénéficier de réductions dans des
                  boutiques en ligne 100 % véganes
                </strong>
                . Quant à{" "}
                <strong>
                  la fonction de scan, elle continue de s&apos;améliorer grâce à
                  la participation active des utilisatrices et utilisateurs
                </strong>
                .
              </p>
              <p className="text-lg leading-relaxed">
                Enfin,{" "}
                <strong>
                  le code de l&apos;application est désormais open source
                </strong>
                , et{" "}
                <strong>
                  son écosystème ne cesse de grandir grâce à la contribution de
                  personnes intéressées par le projet
                </strong>
                .
              </p>
            </div>
          </article>

          <section>
            <AppStoresCta />
          </section>
        </main>
      </div>
    </div>
  );
}
