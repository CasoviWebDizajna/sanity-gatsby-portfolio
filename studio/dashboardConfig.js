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
                  buildHookId: '5e51387b34b48dbd32e549ff',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-mxvgk85r',
                  apiId: '94d8ca4d-09e9-443a-aad6-54cc42acba21'
                },
                {
                  buildHookId: '5e51387b3832e0e9e28c65c3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-suc41kwn',
                  apiId: 'fdc03efb-bf99-480f-8514-ef5ca79323da'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CasoviWebDizajna/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-suc41kwn.netlify.com',
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
