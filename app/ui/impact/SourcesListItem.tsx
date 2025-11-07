import { clsx } from "clsx";
import { SquareArrowOutUpRight } from "lucide-react";
import { Markup } from "interweave";
import { SourceDataType } from "@/types/definitions";
import Icon from "@/app/ui/components/Icon";

interface SourceProps {
  source: SourceDataType;
}

const SourcesListItem = ({
  source: {
    title,
    description,
    icon,
    color,
    link: { url, label },
  },
}: SourceProps) => {
  return (
    <div
      className={clsx(
        "w-full lg:w-1/2 group hover:-translate-y-1 hover:scale-[1.05] duration-500",
        {
          "mb-10 lg:mb-0": ["pink", "orange", "emerald"].includes(color),
        }
      )}
    >
      <div className="relative h-full ml-0 mr-0 lg:mr-10">
        <span
          className={clsx(
            "absolute top-0 left-0 w-full h-full mt-0.5 ml-0.5 rounded-lg",
            {
              "bg-pink-400": color === "pink",
              "bg-purple-400": color === "purple",
              "bg-orange-400": color === "orange",
              "bg-emerald-400": color === "emerald",
              "bg-blue-400": color === "blue",
            }
          )}
        ></span>
        <div
          className={clsx(
            "relative h-full p-5 bg-white border rounded-lg flex flex-col",
            {
              "border-pink-400": color === "pink",
              "border-purple-400": color === "purple",
              "border-orange-400": color === "orange",
              "border-emerald-400": color === "emerald",
              "border-blue-400": color === "blue",
            }
          )}
        >
          <div className="flex items-center -mt-1">
            <h3
              className={clsx(
                "my-2 ml-3 text-lg font-bold flex items-center gap-2",
                {
                  "text-pink-600": color === "pink",
                  "text-purple-600": color === "purple",
                  "text-orange-600": color === "orange",
                  "text-emerald-600": color === "emerald",
                  "text-blue-600": color === "blue",
                }
              )}
            >
              <Icon name={icon} /> <Markup content={title} />
            </h3>
          </div>
          <div
            className={clsx("mt-3 mb-1 text-xs font-medium uppercase", {
              "text-pink-400": color === "pink",
              "text-purple-400": color === "purple",
              "text-orange-400": color === "orange",
              "text-emerald-400": color === "emerald",
              "text-blue-400": color === "blue",
            })}
          >
            ------------
          </div>
          <h4
            className={clsx("font-semibold", {
              "text-pink-600": color === "pink",
              "text-purple-600": color === "purple",
              "text-orange-600": color === "orange",
              "text-emerald-600": color === "emerald",
              "text-blue-600": color === "blue",
            })}
          >
            {label}
          </h4>
          <p className="mb-2 text-gray-600 leading-relaxed">{description}</p>
          <div className="mt-auto">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "text-gray-600 text-sm inline-flex items-center gap-2 px-1 py-2 relative border-b-2  cursor-pointer group-hover:shadow-[0_1rem_2rem] group-hover:rounded-sm group-hover:text-white group-hover:-translate-y-1 focus:text-white active:text-white transition-transform duration-300",
                {
                  "border-pink-500 group-hover:bg-pink-500 focus:bg-pink-500 active:bg-pink-500":
                    color === "pink",
                  "border-purple-500 group-hover:bg-purple-500 focus:bg-purple-500 active:bg-purple-500":
                    color === "purple",
                  "border-orange-500 group-hover:bg-orange-500 focus:bg-orange-500 active:bg-orange-500":
                    color === "orange",
                  "border-emerald-500 group-hover:bg-emerald-500 focus:bg-emerald-500 active:bg-emerald-500":
                    color === "emerald",
                  "border-blue-500 group-hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-500":
                    color === "blue",
                }
              )}
            >
              Consulter
              <SquareArrowOutUpRight
                className="size-4 text-current group-hover:text-current"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourcesListItem;
