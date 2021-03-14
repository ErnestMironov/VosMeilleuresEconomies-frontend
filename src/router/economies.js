

export default [
    {
        path: '/' + process.env.VUE_APP_ECONOMIES_ROUTE,
        component: () => import('Views/layout/EconomiesLayout.vue'),
        children: [
            {
                path: 'details',
                name: 'economies-details',
                component: () => import('Views/economies/EconomiesDetails.vue'),
                meta: {
                    title: 'economies details',
                    breadcrumb: null,
                }
            }
        ]
    }
]
