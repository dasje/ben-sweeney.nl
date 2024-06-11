import ExperienceRack from "./ExperienceRack";

export type ExperienceInstance = {};

interface ExperienceProps {
  experience: {
    instituteName: string;
    years: string;
    role: string;
    tools: string;
    description: string;
  }[];
}

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <div className="bg-sixthcolor rounded-xl m-5 p-1">
      {experience.map((v, k) => {
        return (
          <ExperienceRack
            key={k}
            instituteName={v.instituteName}
            years={v.years}
            role={v.role}
            tools={v.tools}
            description={v.description}
          />
        );
      })}
    </div>
  );
};

export default Experience;
