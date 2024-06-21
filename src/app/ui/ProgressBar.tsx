import Image from "next/image";
import downArrow from "@/app/lib/icons/icons8-down-arrow-101.png";

interface ProgessBarsProps {
  skillName: string;
  progressPercentage: number;
  librariesFrameworks: { skillName: string; progressPercentage: number }[];
}

const ProgressBar = ({
  skillName,
  progressPercentage,
  librariesFrameworks,
}: ProgessBarsProps) => {
  return (
    <div className="h-4 grid grid-cols m-2 md:m-0 md:p-4 bg-sixthcolor rounded-full content-center">
      <div className="h-5 w-full bg-white rounded-full self-center">
        <div
          style={{ width: `${progressPercentage}%` }}
          className={`h-full rounded-full ${
            progressPercentage < 70 ? "bg-green-600" : "bg-green-600"
          }`}
        >
          <div className="grid grid-cols-5 gap-2 text-white text-sm md:text-sm font-semibold tracking-tight md:tracking-wide font-light">
            <div className="col-span-4 md:place-self-start pl-2">
              {skillName}{" "}
              {librariesFrameworks.length > 0 && (
                <>
                  <div className="hidden md:contents">
                    -- ({librariesFrameworks.length} libraries/frameworks)
                  </div>
                  <div className="md:hidden contents">
                    -- ({librariesFrameworks.length})
                  </div>
                  <Image
                    //   style={{ rotate: "180deg" }}
                    className="animate-pulse"
                    width={30}
                    height={15}
                    src={downArrow}
                    alt="down arrow"
                  />
                </>
              )}
            </div>
            <div className="col-span-1 md:place-self-end pr-2 text-black md:text-white text-right">
              {progressPercentage}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
