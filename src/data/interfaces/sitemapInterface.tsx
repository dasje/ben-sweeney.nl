export default interface sitemap {
  home: {
    pageName: string;
    pageUrl: string;
    children: {
      pageName: string;
      pageUrl: string;
      children: {
        pageName: string;
        pageUrl: string;
        children: [];
      }[];
    }[];
  };
}
