module.exports = {
  title: 'Marco von Nerdisch',
  tagline: 'Softwareentwicklung und mehr',
  url: 'https://marco-nerdisch.de',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'marco-nerdisch.de', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Nerdisch',
      logo: {
        alt: 'Mein Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Home',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          to: 'docs/uber-marco/',
          activeBasePath: 'docs',
          label: 'Über Marco',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Seiten',
          items: [
            {
              label: 'Home',
              to: 'docs/',
            },
            {
              label: 'Kurse',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              label: 'Facebook',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Instagram',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'Mehr',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nerdisch, Marco Bullin.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.json'),
          // Please change this to your repo.
          editUrl: 'https://github.com/marcobullin/marco-nerdisch.de.git/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/marcobullin/marco-nerdisch.de.git/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
