export default {
    routes: [
        {
            path: '/',
            name: 'landing',
            component: resolve => require(['@/js/basic/landing'], resolve),
            meta: {
                tokenRequired: false
            }
        },
        {
            path: '/login',
            name: 'login',
            component: resolve => require(['@/js/basic/login'], resolve),
            meta: {
                tokenRequired: false
            }
        },
        {
            path: '/registerAccount',
            name: 'registerAccount',
            component: resolve => require(['@/js/basic/register'], resolve),
            meta: {
                tokenRequired: false
            }
        },
        {
            path: '/order/product/:item',
            name: 'order',
            component: resolve => require(['@/js/modules/order/order'], resolve),
            meta: {
                tokenRequired: true
            }
        },
        {
            path: '/casherDashboard',
            name: 'casherDashboard',
            component: resolve => require(['@/js/modules/dashboard/casherDashboard'], resolve),
            meta: {
                tokenRequired: true
            }
        },
        {
            path: '/chosenCategory/:itemChosen',
            name: 'chosenCategory',
            component: resolve => require(['@/js/modules/products/chosenCategory'], resolve),
            meta: {
                tokenRequired: true
            }
        },
        {
            path: '/addProductCategoryAddOns',
            name: 'addProductCategoryAddOns',
            component: resolve => require(['@/js/modules/addingAdmin/add'], resolve),
            meta: {
                tokenRequired: true
            }
        },
        {
            path: '/productCategory/:image?',
            name: 'productCategory',
            component: resolve => require(['@/js/modules/products/productCategory'], resolve),
            meta: {
                tokenRequired: true
            }
        },
        {
            path: '/:any',
            name: 'any',
            component: resolve => require(['@/js/basic/landing'], resolve),
            meta: {
                tokenRequired: false
            }
        },
        {
            path: '/:any',
            name: 'any',
            component: resolve => require(['@/js/modules/dashboard/casherDashboard'], resolve),
            meta: {
                tokenRequired: true
            }
        },
        // {
        //     path: '/userDashboard',
        //     name: 'userDashboard',
        //     component: resolve => require(['@/assets/js/modules/dashboard/userDashboard'], resolve),
        //     meta: {
        //         tokenRequired: true
        //     }
        // },
        // {
        //     path: '/profile',
        //     name: 'profile',
        //     component: resolve => require(['@/assets/js/modules/profile/profile'], resolve),
        //     meta: {
        //         tokenRequired: true
        //     }
        // },
        // {
        //     path: '/cart',
        //     name: 'cart',
        //     component: resolve => require(['@/assets/js/modules/order/cart'], resolve),
        //     meta: {
        //         tokenRequired: true
        //     }
        // },
        // {
        //     path: '/order',
        //     name: 'order',
        //     component: resolve => require(['@/assets/js/modules/order/order'], resolve),
        //     meta: {
        //         tokenRequired: true
        //     }
        // },
    ],
}