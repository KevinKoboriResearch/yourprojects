var mainRoutes = [
  {
    path: '/',
    component: () => import('layouts/main/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/main/Home.vue') },
      { path: 'about', component: () => import('pages/main/About.vue') },
      { path: 'services', component: () => import('pages/main/Services.vue') },
      { path: 'doubts', component: () => import('pages/main/Doubts.vue') }
    ]
  },
  {
    path: '/1',
    component: () => import('layouts/main/Layout1.vue'),
    children: [
      { path: '', component: () => import('pages/main/Home.vue') },
      { path: 'about', component: () => import('pages/main/About.vue') },
      { path: 'services', component: () => import('pages/main/About.vue') },
      { path: 'doubts', component: () => import('pages/main/About.vue') }
    ]
  },
  {
    path: '/2',
    component: () => import('layouts/main/Layout2.vue'),
    children: [
      { path: '', component: () => import('pages/main/Home.vue') },
      { path: 'about', component: () => import('pages/main/About.vue') },
      { path: 'services', component: () => import('pages/main/About.vue') },
      { path: 'doubts', component: () => import('pages/main/About.vue') }
    ]
  },
  {
    path: '/3',
    component: () => import('layouts/main/Layout3.vue'),
    children: [
      { path: '', component: () => import('pages/main/Home.vue') },
      { path: 'about', component: () => import('pages/main/About.vue') },
      { path: 'services', component: () => import('pages/main/About.vue') },
      { path: 'doubts', component: () => import('pages/main/About.vue') }
    ]
  },
  {
    path: '/4',
    component: () => import('layouts/main/Layout4.vue'),
    children: [
      { path: '', component: () => import('pages/main/Home.vue') },
      { path: 'about', component: () => import('pages/main/About.vue') },
      { path: 'services', component: () => import('pages/main/About.vue') },
      { path: 'doubts', component: () => import('pages/main/About.vue') }
    ]
  }
]

// exemplos de templates

// template personalizado pelo usuario

// var mainDrawerRoutes = [
//   {
//     path: '/',
//     component: () => import('layouts/main/DrawerLayout.vue'),
//     children: [
//       { path: 'doubt', component: () => import('pages/main/Home.vue') }
//     ]
//   }
// ]

// const premadeLayoutRoutes = [
// {
//   path: '/layout1',
//   component: () => import('layouts/main/Layout1.vue'), // drawer
//   children: [
//     { path: '', component: () => import('pages/main/Home.vue') },
//     { path: 'about', component: () => import('pages/main/About.vue') },
//     { path: 'services', component: () => import('pages/main/About.vue') },
//     { path: 'doubt', component: () => import('pages/main/About.vue') }
//   ]
// },
// {
//   path: '/layout2',
//   component: () => import('layouts/main/Layout2.vue'), // drawer
//   children: [
//     { path: '', component: () => import('pages/main/Home.vue') },
//     { path: 'about', component: () => import('pages/main/About.vue') },
//     { path: 'services', component: () => import('pages/main/About.vue') },
//     { path: 'doubt', component: () => import('pages/main/About.vue') }
//   ]
// },
// {
//   path: '/layout3',
//   component: () => import('layouts/main/Layout3.vue'), // drawer
//   children: [
//     { path: '', component: () => import('pages/main/Home.vue') },
//     { path: 'about', component: () => import('pages/main/About.vue') },
//     { path: 'services', component: () => import('pages/main/About.vue') },
//     { path: 'doubt', component: () => import('pages/main/About.vue') }
//   ]
// },
// {
//   path: '/layout4',
//   component: () => import('layouts/main/Layout4.vue'), // drawer
//   children: [
//     { path: '', component: () => import('pages/main/Home.vue') },
//     { path: 'about', component: () => import('pages/main/About.vue') },
//     { path: 'services', component: () => import('pages/main/About.vue') },
//     { path: 'doubt', component: () => import('pages/main/About.vue') }
//   ]
// }
// {
//   path: '/premade-layouts/drawer-1',
//   component: () => import('layouts/premade-layouts/PremadeLayout6.vue'), // drawer
//   children: [
//     { path: '', component: () => import('pages/main/Home.vue') },
//     { path: 'services', component: () => import('pages/main/Home.vue') },
//     { path: 'about', component: () => import('pages/main/Home.vue') },
//     { path: 'doubts', component: () => import('pages/main/Home.vue') }
//   ]
// },
// {
//   path: '/premade-layouts/app-bar-1',
//   component: () => import('layouts/premade-layouts/PremadeLayoutAppBar1.vue'),
//   children: [
//     { path: '', component: () => import('pages/main/Home.vue') },
//     { path: 'services', component: () => import('pages/main/Home.vue') },
//     { path: 'about', component: () => import('pages/main/Home.vue') },
//     { path: 'doubt', component: () => import('pages/main/Home.vue') }
//   ]
// }
// {
//   path: '/premade-layout2',
//   component: () => import('layouts/premade-layouts/PremadeLayout1.vue'),
//   children: [
//     { path: '', component: () => import('pages/main/Index.vue') } // 'pages/premadelayouts/Layout1.vue') }
//   ]
// }
// ]

// const Routes

// const Routes

// const Routes

const errorRoute = [
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

const routes = [
  ...mainRoutes,
  // ...mainDrawerRoutes,
  // ...premadeLayoutRoutes,
  ...errorRoute
]

export default routes
