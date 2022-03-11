export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '622afb5bd887111b57ad7081',
                  title: 'Sanity Studio',
                  name: 'test-portfolio-studio',
                  apiId: '9bdbaa0b-425b-436e-9ba0-222e1dd41895'
                },
                {
                  buildHookId: '622afb5dfff1861e1f58a2e8',
                  title: 'Portfolio Website',
                  name: 'test-portfolio-web',
                  apiId: '622b5511-ec34-4569-9ee5-efde7f2438cb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/oscar-leung/test-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://test-portfolio-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
