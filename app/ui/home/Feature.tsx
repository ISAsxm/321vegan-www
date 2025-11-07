import { FeatureDataType } from "@/types/definitions";
import { clsx } from "clsx";
import { MotionDiv, MotionLink } from "@/app/ui/components/Motions";
import { Markup } from "interweave";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Icon from "@/app/ui/components/Icon";

interface FeatureProps {
  feature: FeatureDataType;
  index: number;
}
const Feature = ({
  feature: { title, description, bgImage, link, icon },
  index,
}: FeatureProps) => {
  return (
    <div className="relative">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
        <div
          className={clsx(
            "mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0",
            {
              "lg:col-start-2 ": Math.abs(index % 2) == 1,
            }
          )}
        >
          <div className="md:min-h-[360px]">
            <MotionDiv
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 hover:-translate-y-1 hover:scale-[1.1] transition-all duration-500">
                <Icon name={icon} className="h-8 w-8 text-white" />
              </span>
            </MotionDiv>

            <MotionDiv
              className="mt-6"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-3xl font-bold tracking-tight text-white">
                {title}&nbsp;:
              </h3>
              <p className="mt-4 text-lg text-white/90">
                <Markup content={description} />
              </p>
              <div className="mt-6">
                <MotionLink
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-white bg-brand-500 hover:bg-brand-400 shadow-sm relative z-0 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-lg after:bg-brand-500 hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500"
                  href={link}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  En savoir plus{" "}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </MotionLink>
              </div>
            </MotionDiv>
          </div>
        </div>
        <div className="mt-12 sm:mt-0">
          <MotionDiv
            className={clsx("lg:relative lg:m-0 lg:h-full lg:px-0", {
              "p-3 sm:p-0 sm:pl-6 sm:-mr-16 md:-mr-48  ":
                Math.abs(index % 2) == 1,
              "p-3 sm:p-0 sm:pr-6 sm:-ml-16 md:-ml-48 ": index % 2 == 0,
            })}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={bgImage}
              alt=""
              width={1080}
              height={1920}
              className="object-content w-full sm:w-1/2 h-auto mx-auto  rounded-xl lg:absolute lg:left-0 lg:h-full lg:w-auto hover:-translate-y-1 hover:scale-[1.1] transition-all duration-500"
            />
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default Feature;
