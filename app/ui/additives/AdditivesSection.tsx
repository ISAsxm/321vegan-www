"use client";
import {
  veganAdditivesData,
  nonVeganAdditesData,
  maybeVeganAdditivesData,
} from "@/assets/additives";
import Modal from "@/app/ui/components/Modal";
import AdditivesList from "@/app/ui/additives/AdditivesList";
import AdditivesSearch from "@/app/ui/additives/AdditivesSearch";
import { CircleQuestionMark, CircleX, Vegan } from "lucide-react";

const AdditivesSection = () => {
  return (
    <Modal>
      <section id="additives" className="scroll-mt-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 my-12">
          <h2 className="text-lg font-merriweather">
            Liste des additifs par catégories&nbsp;:
          </h2>

          <AdditivesSearch />
        </div>

        <div className="w-full bg-brand-600/80 rounded-xl shadow-sm p-8 mb-8">
          <div className="flex flex-col text-center">
            <h3 className="text-xl md:text-3xl font-bold tracking-tight text-white p-4 flex items-center justify-center gap-3">
              <Vegan className="size-10" aria-hidden="true" />
              Additifs véganes
            </h3>
            <p className="mb-8 text-sm text-white italic leading-relaxed">
              Cliquez sur un additif ou utilisez la recherche pour voir le
              détail.
            </p>

            <AdditivesList data={veganAdditivesData} />
          </div>
        </div>

        <div className="w-full bg-orange-600/60 rounded-xl shadow-sm p-8 mb-8">
          <div className="flex flex-col text-center">
            <h3 className="text-xl md:text-3xl font-bold tracking-tight text-white p-4 flex items-center justify-center gap-3">
              <CircleQuestionMark className="size-10" /> Additifs
              potentiellement véganes
            </h3>
            <p className="mb-8 text-sm text-white italic leading-relaxed">
              Cliquez sur un additif ou utilisez la recherche pour voir le
              détail.
            </p>

            <AdditivesList data={maybeVeganAdditivesData} />
          </div>
        </div>

        <div className="w-full bg-red-600/60 rounded-xl shadow-sm p-8">
          <div className="flex flex-col text-center">
            <h3 className="text-xl md:text-3xl font-bold tracking-tight text-white p-4 flex items-center justify-center gap-3">
              <CircleX className="size-10" aria-hidden="true" />
              Additifs non véganes
            </h3>
            <p className="mb-8 text-sm text-white italic leading-relaxed">
              Cliquez sur un additif ou utilisez la recherche pour voir le
              détail.
            </p>

            <AdditivesList data={nonVeganAdditesData} />
          </div>
        </div>

        <p className="mt-12 mb-16 italic leading-relaxed">
          La base de données des additifs est disponible hors ligne sur
          l&apos;application, pratique pour vérifier un ingédient même dans les
          zones sans réseau.
        </p>
      </section>
    </Modal>
  );
};

export default AdditivesSection;
