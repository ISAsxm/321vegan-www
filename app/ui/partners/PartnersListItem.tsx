import { PartnerDataType } from "@/types/definitions";
import { Info, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

interface PartnersListItemProps {
  partner: PartnerDataType;
}

const PartnersListItem = ({
  partner: {
    brandName,
    logoName,
    discountCode,
    discountAmount,
    description,
    websiteUrl,
    affiliate,
  },
}: PartnersListItemProps) => {
  return (
    <div className="bg-brand-50 shadow-sm rounded-lg hover:-translate-y-1 hover:scale-[1.1] transition-all duration-500 h-full group">
      <div className="flex flex-col gap-4 sm:flex-row items-start px-6 py-5 h-full">
        <div className="flex items-center justify-center min-w-40">
          <Image src={logoName} alt="" className="w-40 l-auto m-auto" />
        </div>

        <div className="grow h-full flex flex-col">
          <div className="w-full flex justify-between items-center mb-3">
            <span className="text-2xl leading-snug font-extrabold text-brand-700 mt-2 mb-1 sm:mt-0 sm:mb-0">
              {brandName}
            </span>
            {affiliate && (
              <span
                className="text-2xl"
                role="img"
                aria-label="Code promo affilié"
              >
                ⭐️
              </span>
            )}
          </div>

          <p className="mb-2 leading-relaxed text-brand-900 whitespace-normal">
            {description}
          </p>

          <div className="mt-auto">
            <h3 className="font-medium">Code promo {brandName}&nbsp;:</h3>
            <p className="text-yellow-600 mb-2">{discountAmount}</p>
            {affiliate ? (
              <div className="flex items-center justify-between gap-2">
                <span className="py-1 px-2.5 border-none rounded-lg bg-brand-600 text-white font-medium">
                  {discountCode}
                </span>
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 flex items-center gap-2 pb-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-100 md:after:scale-x-0 after:bg-brand-600 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100"
                >
                  Consulter
                  <SquareArrowOutUpRight aria-hidden="true" />
                </a>
              </div>
            ) : (
              <p className="text-brand-700 text-sm font-medium flex items-center gap-2">
                <Info size={16} aria-hidden="true" />
                Téléchargez l&apos;application pour voir le code de réduction
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersListItem;
