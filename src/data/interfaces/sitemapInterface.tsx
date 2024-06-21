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
  contact: {
    pageName: string;
    pageUrl: string;
    children: [];
  };
}
