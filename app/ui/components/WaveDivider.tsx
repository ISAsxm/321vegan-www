interface WaveDividerProps {
  previousColor?: string;
  nextColor?: string;
}

const WaveDivider = ({ previousColor, nextColor }: WaveDividerProps) => {
  return (
    <div
      className={`overflow-hidden my-0 -mb-1 ${previousColor || "bg-white"} `}
    >
      <svg
        className="h-15 md:h-30 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className={`${nextColor || "text-brand-900"} fill-current`}
          d="M0,288L60,245.3C120,203,240,117,360,112C480,107,600,181,720,229.3C840,277,960,299,1080,256C1200,213,1320,107,1380,53.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default WaveDivider;
