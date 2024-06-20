export default interface portfolioDetails {
  portfolioOverview: string;
  code: {
    codeOverview: string;
    projects: {
      projectName: string;
      link: string;
      image: string;
      description: string;
      tech: string[];
    }[];
  };
  art: { artOverview: string; projects: [] };
  drawing: { drawingOverview: string; projects: [] };
  animation: {
    animationOverview: string;
    projects: {
      itemName: string;
      host: string;
      link: string;
      description: string;
    }[];
  };
}
