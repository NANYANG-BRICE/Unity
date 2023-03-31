const MainRoutes = {
    path: '/main',
    meta: {
        requiresAuth: true
    },
    redirect: '/main',
    component: () => import('@/layouts/full/FullLayout.vue'),
    children: [
        {
            name: 'Dashboard',
            path: '/',
            component: () => import('@/views/dashboard/index.vue')
        },
        {
            name: 'Parametres',
            path: '/Parametres',
            component: () => import('@/views/pages/Parametres.vue')
        },
        {
            name: 'Repertoire',
            path: '/repertoire',
            component: () => import('@/views/pages/Repertoire.vue')
        },
        {
            name: 'Historique',
            path: '/Historique',
            component: () => import('@/views/pages/Historique.vue')
        },
        {
            name: 'Messagerie',
            path: '/Messagerie',
            component: () => import('@/views/pages/Messagerie.vue')
        },
    ]
};

export default MainRoutes;
