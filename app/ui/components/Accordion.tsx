import { PropsWithChildren, Dispatch, SetStateAction } from "react";
import { Plus } from "lucide-react";
import { clsx } from "clsx";

interface AccordionItemProps extends PropsWithChildren {
  currentOpen: number | null;
  onOpen: Dispatch<SetStateAction<number | null>>;
  num: number;
  title: string;
}

const Accordion = ({
  currentOpen,
  onOpen,
  num,
  title,
  children,
  ...props
}: AccordionItemProps) => {
  const isOpen = num === currentOpen;
  function handleToggle() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div
      className="bg-brand-50 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
      {...props}
      id={`accordionGroup-${num}`}
    >
      <button
        className="w-full flex justify-between items-center p-6 text-left cursor-pointer"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-${num}`}
      >
        <h3 className="text-lg font-semibold text-brand-700">{title}</h3>
        <Plus
          className={clsx("text-brand-700 transition-transform duration-500", {
            "rotate-45": isOpen,
          })}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6" id={`accordion-${num}`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
