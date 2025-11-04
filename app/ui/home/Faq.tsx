import { ChevronDown } from "lucide-react";
import { Markup } from "interweave";

interface FaqProps {
  faq: {
    title: string;
    description: string;
  };
}

const Faq = ({ faq: { title, description } }: FaqProps) => {
  return (
    <div className="py-5 bg-brand-50 rounded-xl shadow-md">
      <details className="group p-6 text-left">
        <summary className="grid grid-cols-[1fr_2rem] list-none marker:hidden text-lg font-semibold text-brand-700 cursor-pointer">
          <span> {title}</span>
          <ChevronDown className="transition-transform duration-300 rotate-0 group-open:rotate-180" />
        </summary>
        <p className="group-open:animate-fadeIn mt-3 text-gray-600 leading-relaxed">
          <Markup content={description} />
        </p>
      </details>
    </div>
  );
};

export default Faq;
