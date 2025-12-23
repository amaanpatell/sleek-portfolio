export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  logo: {
    src: '/assets/logo.PNG',
    alt: 'logo',
    width: 100,
    height: 100,
  },
  navItems: [
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Blogs',
      href: '/blog',
    },
    {
      label: 'Resume',
      href: '/resume',
    }
  ] as NavItem[],
};
