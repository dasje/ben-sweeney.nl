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
    <div className="bg-secondcolor border-solid border-8 rounded-xl px-5 py-5 pt-1 pb-2.5">
      <div className="font-semibold text-lg text-left md:text-white text-thirdcolor tracking-wide">
        <div>{instituteName}</div>
      </div>
      <div className="font-light text-right text-white tracking-wide">
        <div>{role}</div>
        <div>{years}</div>
        <div>{tools}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default ExperienceRack;
