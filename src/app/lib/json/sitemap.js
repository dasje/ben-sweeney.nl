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
        children: [
          { pageName: "Code", pageUrl: "/pages/portfolio/code", children: [] },
          {
            pageName: "Art",
            pageUrl: "/pages/portfolio/art",
            children: [
              {
                pageName: "Animation",
                pageUrl: "/pages/portfolio/art/animation",
                children: [],
              },
              //   {
              //     pageName: "Motion Graphics",
              //     pageUrl: "/pages/portfolio/art/motion-graphics",
              //     children: [],
              //   },
              //   {
              //     pageName: "Drawing",
              //     pageUrl: "/pages/portfolio/art/drawing",
              //     children: [],
              //   },
            ],
          },
        ],
      },
    ],
  },
};

export default sitemap;
