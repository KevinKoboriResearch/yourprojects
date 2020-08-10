const mainRoutes = [
  {
    path: '/',
    component: () => import('layouts/Web.vue'),
    children: [
      { path: '', component: () => import('pages/main/Home.vue') },
      { path: 'about', component: () => import('pages/main/About.vue') },
      { path: 'services', component: () => import('pages/main/Services.vue') },
      { path: 'doubts', component: () => import('pages/main/Doubts.vue') }
    ]
  },
  {
    path: '/mac',
    component: () => import('layouts/Mac.vue'),
    children: [
      { path: '', component: () => import('pages/main/Home.vue') },
      { path: 'about', component: () => import('pages/main/About.vue') },
      { path: 'services', component: () => import('pages/main/Services.vue') },
      { path: 'doubts', component: () => import('pages/main/Doubts.vue') }
    ]
  },
  {
    path: '/windows',
    component: () => import('layouts/Windows.vue'),
    children: [
      { path: '', component: () => import('pages/main/Home.vue') },
      { path: 'about', component: () => import('pages/main/About.vue') },
      { path: 'services', component: () => import('pages/main/Services.vue') },
      { path: 'doubts', component: () => import('pages/main/Doubts.vue') }
    ]
  },
  {
    path: '/android',
    component: () => import('layouts/Android.vue'),
    children: [
      { path: '', component: () => import('pages/main/Home.vue') },
      { path: 'about', component: () => import('pages/main/About.vue') },
      { path: 'services', component: () => import('pages/main/Services.vue') },
      { path: 'doubts', component: () => import('pages/main/Doubts.vue') }
    ]
  },
  {
    path: '/ios',
    component: () => import('layouts/iOS.vue'),
    children: [
      { path: '', component: () => import('pages/main/Home.vue') },
      { path: 'about', component: () => import('pages/main/About.vue') },
      { path: 'services', component: () => import('pages/main/Services.vue') },
      { path: 'doubts', component: () => import('pages/main/Doubts.vue') }
    ]
  }
]

const dynamicRoutes = [
  {
    path: '/dynamic',
    component: () => import('layouts/Web.vue'),
    children: [
      { path: '', component: () => import('pages/main/Home.vue') },
      { path: 'about', component: () => import('pages/main/About.vue') },
      { path: 'services', component: () => import('pages/main/Services.vue') },
      { path: 'doubts', component: () => import('pages/main/Doubts.vue') }
    ]
  }
]

const errorRoute = [
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

const routes = [
  ...mainRoutes,
  ...dynamicRoutes,
  ...errorRoute
]

export default routes
