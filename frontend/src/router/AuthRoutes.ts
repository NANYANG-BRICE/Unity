const AuthRoutes = {
    path: '/auth',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    meta: {
        requiresAuth: false
    },
    children: [
        {
            name: 'Login',
            path: '/auth/login',
            component: () => import('@/views/auth/Login.vue')
        },
        {
            name: 'Reset',
            path: '/auth/reset',
            component: () => import('@/views/auth/Reset.vue')
        },
        {
            name: 'Register',
            path: '/auth/register',
            component: () => import('@/views/auth/Register.vue')
        },
    ]
};

export default AuthRoutes;
