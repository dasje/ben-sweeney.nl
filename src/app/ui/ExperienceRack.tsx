export interface ExperienceRackProps {
  instituteName: string;
  years: string;
  role: string;
  tools: string;
  description: string;
}

const ExperienceRack = ({
  instituteName,
  years,
  role,
  tools,
  description,
}: ExperienceRackProps) => {
  return (
    <div className="grid gird-cols-1 md:grid-cols-2 bg-secondcolor border-solid border-8 rounded-xl px-5 py-5 pt-1 pb-2.5">
      <div className="col-span-1 font-semibold text-lg text-left md:text-white text-thirdcolor tracking-wide">
        <div>{instituteName}</div>
        <div className="font-light text-left text-white tracking-wide">
          {description}
        </div>
      </div>
      <div className="col-span-1 font-light text-right text-white tracking-wide">
        <div>{role}</div>
        <div>{years}</div>
        <div>{tools}</div>
      </div>
    </div>
  );
};

export default ExperienceRack;
