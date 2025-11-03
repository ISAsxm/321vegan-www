"use client";
import {
  Dispatch,
  SetStateAction,
  cloneElement,
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "motion/react";
import { useClickOutside } from "@/app/hooks/useClickOutside";
import { X } from "lucide-react";
import { MotionDiv } from "@/app/ui/components/Motions";

type ChildrenProps = {
  onClick: () => void;
};

type ModalProps = PropsWithChildren;
interface OpenProps extends PropsWithChildren {
  opens: string;
}
interface WindowProps extends PropsWithChildren {
  name: string;
  title?: string;
}

export interface ModalContextI {
  openName: string;
  setOpenName: Dispatch<SetStateAction<string>>;
}

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const ModalContext = createContext<ModalContextI | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context)
    throw Error(
      "useModalContext can only be used inside a ModalContextProvider"
    );
  return context;
};

const Modal = ({ children }: ModalProps) => {
  const [openName, setOpenName] = useState<string>("");
  return (
    <ModalContext.Provider value={{ openName, setOpenName }}>
      {children}
    </ModalContext.Provider>
  );
};

export const Open = ({ children, opens }: OpenProps) => {
  const { setOpenName } = useModalContext();
  return cloneElement(children as React.ReactElement<ChildrenProps>, {
    onClick: () => setOpenName(opens),
  });
};

export const Window = ({ children, name, title }: WindowProps) => {
  const { openName, setOpenName } = useModalContext();
  const close = () => setOpenName("");
  const ref = useClickOutside(close);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {name === openName && (
        <MotionDiv
          key={name}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full h-screen bg-white/[0.1%] backdrop-blur-xs z-1000"
        >
          <div
            ref={ref}
            className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] max-h-[80vh] w-[90vw] sm:w-auto overflow-x-hidden overflow-y-scroll px-8 sm:px-14 py-16 rounded-lg shadow-lg bg-white"
            role="dialog"
            id={`dialog-${name}`}
            aria-labelledby={`dialog-${name}-label`}
            aria-modal="true"
          >
            <button
              className="bg-none border-none rounded-sm absolute top-5 right-6 p-1 translate-x-3 cursor-pointer z-1"
              onClick={close}
              aria-label="Fermer la modale"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
            {title && (
              <h2
                id={`dialog-${name}-label`}
                className="text-lg mb-6 text-brand-700"
              >
                {title}
              </h2>
            )}
            {children}
          </div>
        </MotionDiv>
      )}
    </AnimatePresence>,
    document.body
  );
};

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
