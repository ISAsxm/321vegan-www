import { TestimonialDataType } from "@/types/definitions";
import clsx from "clsx";

interface TestimonialProps {
  testimonial: TestimonialDataType;
}

const Testimonial = ({
  testimonial: { username, title, comment, rate },
}: TestimonialProps) => {
  return (
    <div className="h-full lg:min-h-[410px] py-5 pl-8 lg:pl-14 pr-4 bg-linear-to-r from-brand-300 to-brand-700 text-white rounded-3xl relative shadow-sm mx-4">
      <div className="absolute top-0 left-0 w-full h-full bg-brand-50 opacity-8 transform -skew-x-10"></div>
      <div className="relative z-10 ">
        <svg
          className="w-12 h-12 mb-4 text-brand-500"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <span className="text-[15px] font-semibold">{title}</span>

        <div
          className="flex items-center space-x-1 mt-4"
          role="img"
          aria-label={`Note: ${rate} sur 5 étoiles`}
        >
          {Array.from({ length: 5 }, (_, i) => i).map((i) => (
            <svg
              key={`rate-${i}`}
              className={clsx("w-4 stroke-yellow-400", {
                "fill-yellow-400": i + 1 <= rate,
              })}
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          ))}
        </div>

        <div className="mt-4">
          <blockquote className="text-[15px] font-medium leading-relaxed">
            <p className="before:content-['\201C'] after:content-['\201D']">
              {comment}
            </p>
          </blockquote>
          <cite className="mt-1 text-xs">—&nbsp;{username}</cite>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
