import Image, { StaticImageData } from "next/image";
import { SquareArrowOutUpRight } from "lucide-react";

interface PartnersListItemProps {
  partner: {
    brandName: string;
    logoName: StaticImageData;
    discountCode: string;
    discountAmount: string;
    description: string;
    websiteUrl: string;
    affiliate: boolean;
  };
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
          <Image
            src={logoName}
            alt={`Logo de notre partenaire ${brandName}`}
            className="w-40 m-auto"
          />
        </div>

        <div className="grow h-full flex flex-col">
          <div className="w-full flex justify-between items-center mb-3">
            <h2 className="text-2xl leading-snug font-extrabold text-brand-700 mt-2 mb-1 sm:mt-0 sm:mb-0">
              {brandName}
            </h2>
            {affiliate && <span className="text-2xl">⭐️</span>}
          </div>

          <p className="mb-2 leading-relaxed text-brand-900 whitespace-normal">
            {description}
          </p>

          <div className="mt-auto">
            <p className="text-yellow-600 mb-2">{discountAmount}</p>
            <div className="flex items-center justify-between">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersListItem;
