import { cosmeticsCriteria, cosmeticsLabelsData } from "@/assets/assets";
import Image from "next/image";
import clsx from "clsx";

const LabelComparisonTable = () => {
  const labelsCount = cosmeticsLabelsData.length;
  const criteriaCount = cosmeticsCriteria.length;
  return (
    <div className="overflow-auto">
      <h3
        id="label_comparison_table_desc"
        className="sticky left-0 py-2 text-brand-500 font-extrabold tracking-tight"
      >
        Tableau comparatif des labels vegan et cruelty free pour les cosmétiques
      </h3>
      <p className="sticky left-0 mb-2 text-sm italic leading-relaxed text-brand-500">
        Faites défiler vers la gauche pour consulter tous les labels.
      </p>
      <div
        className="grid grid-rows-9 grid-flow-col min-w-[1020px] lg:min-w-[1520px]"
        role="table"
        aria-label="Tableau comparatif des labels vegan et cruelty free pour les cosmétiques"
        aria-describedby="label_comparison_table_desc"
        aria-rowcount="9"
      >
        <div className="col-start-1 col-end-2 h-full sticky left-0 py-2 px-3 flex items-center font-semibold bg-white border-b border-l border-transparent text-xs lg:text-sm tracking-tight">
          &nbsp;
        </div>
        {cosmeticsCriteria.map((criterion, index) => (
          <div
            key={`criterion-${index}`}
            className={clsx(
              `col-start-1 col-end-2 h-full sticky left-0 py-2 px-3 flex items-center bg-brand-100 text-brand-700 font-semibold border-b border-l border-brand-600 text-xs lg:text-sm tracking-tight`,
              {
                "border-t rounded-tl-lg": index === 0,
                "rounded-bl-lg": index === criteriaCount - 1,
              }
            )}
            style={{ gridRowStart: index + 2, gridRowEnd: index + 2 }}
            role="row"
            aria-rowindex={index + 2}
          >
            {criterion}
          </div>
        ))}

        {cosmeticsLabelsData.map(({ logo, name, certify }, index) => (
          <div
            key={name}
            className="row-span-10 grid grid-cols-1 grid-rows-9 h-full"
            role="row"
          >
            <div
              className={clsx(
                `row-start-1 row-end-2 flex flex-col items-center justify-center px-2 bg-brand-100 border border-b-0 border-brand-600 text-brand-700 `,
                {
                  "rounded-tl-lg border-l": index === 0,
                  "border-l-0": index > 0,
                  "rounded-tr-lg": index === labelsCount - 1,
                }
              )}
              style={{
                gridColumnStart: index + 2,
                gridColumnEnd: index + 2,
              }}
              aria-rowindex="1"
              role="columnheader"
            >
              <Image
                src={logo}
                alt={`Logo du label ${name}`}
                width={480}
                height={480}
                className="object-contain h-10"
              />
              <h3 className="text-center text-xs font-semibold tracking-tight">
                {name}
              </h3>
            </div>
            {certify.map((val, i) => (
              <div
                key={`certify-${i}`}
                className={clsx(
                  `px-2 flex flex-col items-center justify-center bg-brand-50 border border-r border-brand-600 text-xs lg:text-sm`,
                  {
                    "border-t": i === 0,
                    "border-l": index === 0,
                    "border-l-0": index > 0,
                    "border-t-0": i > 0,
                    "rounded-br-lg":
                      i === criteriaCount - 1 && index === labelsCount - 1,
                  }
                )}
                style={{
                  gridColumnStart: index + 2,
                  gridColumnEnd: index + 2,
                  gridRowStart: i + 2,
                  gridRowEnd: i + 2,
                }}
                role="cell"
                aria-rowindex={i + 2}
                aria-label={val ? "Oui" : "Non"}
              >
                {val ? "✅" : "❌"}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabelComparisonTable;
