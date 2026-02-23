"use client";
import Modal from "@/app/ui/components/Modal";
import { AdditiveDataType } from "@/types/definitions";

interface AdditiveItemProps {
  item: AdditiveDataType;
}

const AdditiveItem = ({ item }: AdditiveItemProps) => {
  const { e_number, name, description, status, source } = item;
  return (
    <li className="inline-block ">
      <Modal.Open opens={e_number}>
        <button
          className={`rounded-full px-3 py-1 text-sm font-semibold shadow-sm hover:-translate-y-1 hover:scale-[1.1] transition-all duration-500 min-w-[6ch] border cursor-pointer ${
            status === "VEGAN"
              ? "bg-brand-100 text-brand-700 border-brand-700"
              : status === "NON_VEGAN"
                ? "bg-red-100 text-red-700 border-red-700"
                : "bg-orange-100 text-orange-700 border-orange-700"
          } `}
          aria-label={`Consulter en détail l'additif ${e_number}`}
        >
          {e_number}
        </button>
      </Modal.Open>
      <Modal.Window name={e_number}>
        <div>
          <h3
            className={`px-4 py-2 font-semibold ${
              status === "VEGAN"
                ? "text-brand-500"
                : status === "NON_VEGAN"
                  ? "text-red-500"
                  : "text-orange-500"
            }`}
          >
            {e_number} &mdash; {name}
          </h3>
          <p className="px-4 py-2 leading-relaxed">{description}</p>
          {source && (
            <span className="px-4 py-2 mt-2">
              <a
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                className={`italic pb-1 inline-flex items-center gap-2 border-b  cursor-pointer text-sm text-gray-600 hover:shadow-[0_1rem_2rem] hover:text-white hover:-translate-y-1 focus:text-white  transition-transform duration-300 ${
                  status === "VEGAN"
                    ? "border-brand-500 hover:bg-brand-500 focus:bg-brand-600 active:border-brand-600"
                    : status === "NON_VEGAN"
                      ? "border-red-500 hover:bg-red-500 focus:bg-red-600 active:border-red-600"
                      : "border-orange-500 hover:bg-orange-500 focus:bg-orange-600 active:border-orange-600"
                }`}
              >
                Souces&nbsp;: {source}
              </a>
            </span>
          )}
        </div>
      </Modal.Window>
    </li>
  );
};

export default AdditiveItem;
