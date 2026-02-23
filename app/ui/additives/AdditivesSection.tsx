import { Suspense } from "react";
import { AdditiveDataType } from "@/types/definitions";
import { fetchAdditives } from "@/app/lib/datas";
import { AdditivesSkeleton, SearchAdditiveSkeleton } from "@/app/ui/skeletons";
import { CircleQuestionMark, CircleX, Vegan } from "lucide-react";
import Modal from "@/app/ui/components/Modal";
import AdditivesList from "@/app/ui/additives/AdditivesList";
import AdditivesSearch from "@/app/ui/additives/AdditivesSearch";

const partitionBy = (
  arr: AdditiveDataType[],
  fn: (a: AdditiveDataType, i: number, arr: AdditiveDataType[]) => void,
) => [
  ...arr
    .reduce((acc, val, i, arr) => {
      const current = fn(val, i, arr);
      if (acc.has(current)) acc.get(current).push(val);
      else acc.set(current, [val]);
      return acc;
    }, new Map())
    .values(),
];

const AdditivesSection = async () => {
  const additivesData = await fetchAdditives();
  if (!additivesData.length) return null;
  const [veganAdditivesData, nonVeganAdditesData, maybeVeganAdditivesData] =
    partitionBy(additivesData, (a) => a.status);

  return (
    <Modal>
      <>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 my-12">
          <h2 className="text-lg font-merriweather">
            Liste des additifs par catégories&nbsp;:
          </h2>

          <Suspense fallback={<SearchAdditiveSkeleton />}>
            <AdditivesSearch data={additivesData} />
          </Suspense>
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

            <Suspense fallback={<AdditivesSkeleton />}>
              <AdditivesList data={veganAdditivesData} />
            </Suspense>
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

            <Suspense fallback={<AdditivesSkeleton />}>
              <AdditivesList data={maybeVeganAdditivesData} />
            </Suspense>
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

            <Suspense fallback={<AdditivesSkeleton />}>
              <AdditivesList data={nonVeganAdditesData} />
            </Suspense>
          </div>
        </div>

        <p className="mt-12 mb-16 leading-relaxed italic">
          La base de données des additifs est construite à partir de{" "}
          <a
            href="https://github.com/isitvegan/isitvegan-web"
            className="pb-1 inline-flex items-center gap-2 border-b-2 border-brand-500 cursor-pointer hover:shadow-[0_1rem_2rem] hover:bg-brand-500 hover:text-white hover:-translate-y-1 focus:bg-brand-500 focus:text-white active:bg-brand-500 active:text-white transition-transform duration-300"
          >
            Is It Vegan&nbsp;?
          </a>
          . Les données ont été modifiées par rapport à leur version originale.
        </p>
      </>
    </Modal>
  );
};

export default AdditivesSection;
