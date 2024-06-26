export default interface DetailsType {
  companyName: string;
  contact: {
    street: string;
    number: string;
    postcode: string;
    city: string;
    country: string;
    email: string;
    github: string;
    linkedin: string;
  };
  aboutText: string[];
  programmingLanguageSkills: {
    skillName: string;
    progressPercentage: number;
    librariesFrameworks: {
      skillName: string;
      progressPercentage: number;
    }[];
  }[];
  achievements: {
    experience: {
      instituteName: string;
      years: string;
      role: string;
      tools: string;
      description: string[];
    }[];
    otherExperience: {
      instituteName: string;
      years: string;
      role: string;
      tools: string;
      description: string[];
    }[];
    education: {
      instituteName: string;
      studied: string;
    }[];
    courses: {
      instituteName: string;
      studied: string;
    }[];
  };
}
