import { Markup } from "interweave";
import Icon from "@/app/ui/components/Icon";

interface CardProps {
  item: { title: string; description: string; icon: string };
}

const Card = ({ item: { title, description, icon } }: CardProps) => {
  return (
    <div className="group flex flex-col gap-4 rounded-xl p-6 shadow-sm border-[0.5px] border-gray-400 bg-white/50 hover:border-brand-500 hover:-translate-y-1 hover:scale-[1.05] hover:shadow-brand duration-500">
      <span className="flex items-center justify-center w-10 sm:w-12 aspect-square rounded-lg bg-brand-500 border border-brand-400 text-white">
        <Icon name={icon} className="size-6" />
      </span>
      <h4 className="text-lg text-brand-700">{title}</h4>
      <p className="text-sm text-balance text-gray-600 leading-relaxed">
        <Markup content={description} />
      </p>
    </div>
  );
};

export default Card;
