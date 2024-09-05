export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  // navItems: [
  //   {
  //     label: "Home",
  //     href: "/",
  //   },
  //   {
  //     label: "Docs",
  //     href: "/docs",
  //   },
  //   {
  //     label: "Pricing",
  //     href: "/pricing",
  //   },
  //   {
  //     label: "Blog",
  //     href: "/blog",
  //   },
  //   {
  //     label: "About",
  //     href: "/about",
  //   },
  // ],
  navItems: [
    {
      label: "Home",
      href: "/home",
    },
    {
      label: "Checklist",
      href: "/home/checklist",
    },
    {
      label: "Report Issue",
      href: "/home/report-issue",
    },
    {
      label: "About",
      href: "/home/about",
    },
    {
      label: "Settings",
      href: "/home/settings",
    },
  ],
  links: {
    perth: "https://perth.com",
    lanark: "https://lanark.com",
    /* ... */
  },
};
