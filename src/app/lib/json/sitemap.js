const sitemap = {
  home: {
    pageName: "Home",
    pageUrl: "/",
    children: [
      {
        pageName: "CV",
        pageUrl: "/pages/cv",
        children: [
          { pageName: "About", pageUrl: "/pages/cv/about", children: [] },
          { pageName: "Skills", pageUrl: "/pages/cv/skills", children: [] },
          {
            pageName: "Experience",
            pageUrl: "/pages/cv/experience",
            children: [],
          },
        ],
      },
      {
        pageName: "Portfolio",
        pageUrl: "/pages/portfolio",
        children: [],
      },
    ],
  },
};

export default sitemap;
