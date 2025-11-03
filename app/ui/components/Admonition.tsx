import { PropsWithChildren } from "react";
import { clsx } from "clsx";
import Icon from "./Icon";

const iconChoices = {
  yellow: "triangle-alert",
  indigo: "circle-alert",
  teal: "flame",
};

type ColorVariant = "yellow" | "indigo" | "teal";

interface AdmonitionProps extends PropsWithChildren {
  variant: ColorVariant;
}

const Admonition = ({ children, variant }: AdmonitionProps) => {
  return (
    <div
      className={clsx("rounded-xs border-l-4 p-4", {
        "bg-yellow-50 border-yellow-400 ": variant === "yellow",
        "bg-indigo-50 border-indigo-400 ": variant === "indigo",
        "bg-teal-50 border-teal-400 ": variant === "teal",
      })}
    >
      <div className="flex">
        <div className="shrink-0">
          <Icon
            name={iconChoices[variant]}
            aria-hidden="true"
            className={clsx("size-5", {
              "text-yellow-400": variant === "yellow",
              "text-indigo-400": variant === "indigo",
              "text-teal-400": variant === "teal",
            })}
          />
        </div>
        <div
          className={clsx("ml-3", {
            "text-yellow-700": variant === "yellow",
            "text-indigo-700": variant === "indigo",
            "text-teal-700": variant === "teal",
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
export default Admonition;
