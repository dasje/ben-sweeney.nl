import EducationRack from "./EducationRack";

interface EducationProps {
  experience: {
    instituteName: string;
    studied: string;
  }[];
}

const Education = ({ experience }: EducationProps) => {
  return (
    <div className="bg-sixthcolor rounded-xl md:m-1 p-1">
      {experience.map((v, k) => {
        return (
          <EducationRack
            key={k}
            instituteName={v.instituteName}
            studied={v.studied}
          />
        );
      })}
    </div>
  );
};

export default Education;
