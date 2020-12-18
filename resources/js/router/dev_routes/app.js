export default {
    routes: [
        {
            path: '/forgotPass',
            name: 'forgotPass',
            component: resolve => require(['@/js/basic/login'], resolve),
            meta: {
                tokenRequired: false
            }
        },
        {
            path: '/verifyCode/:id',
            name: 'verifyCode',
            component: resolve => require(['@/js/basic/forgotPass'], resolve),
            meta: {
                tokenRequired: false
            }
        },
        {
            path: '/changePass/:email',
            name: 'changePass',
            component: resolve => require(['@/js/basic/changePass'], resolve),
            meta: {
                tokenRequired: false
            }
        },
        {
            path: '/login',
            name: 'login',
            component: resolve => require(['@/js/basic/landing'], resolve),
            meta: {
                tokenRequired: false
            }
        },
        {
            path: '/registerAccount',
            name: 'registerAccount',
            component: resolve => require(['@/js/basic/register'], resolve),
            meta: {
                tokenRequired: true
            }
        },
        {
            path: '/register',
            name: 'register',
            component: resolve => require(['@/js/basic/registerUser'], resolve),
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
            path: '/adminDashboard',
            name: 'adminDashboard',
            component: resolve => require(['@/js/modules/dashboard/adminDashboard'], resolve),
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
            path: '/productOnline',
            name: 'productOnline',
            component: resolve => require(['@/js/modules/onlineOrder/productOnline'], resolve),
            meta: {
                tokenRequired: true
            }
        },
        {
            path: '/orderHistory',
            name: 'orderHistory',
            component: resolve => require(['@/js/modules/onlineOrder/orderHistory'], resolve),
            meta: {
                tokenRequired: true
            }
        },
        {
            path: '/customerCart',
            name: 'customerCart',
            component: resolve => require(['@/js/modules/onlineOrder/cart'], resolve),
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
            path: '/salesInventory',
            name: 'salesInventory',
            component: resolve => require(['@/js/modules/inventory/salesInventory'], resolve),
            meta: {
                tokenRequired: true
            }
        },
        {
            path: '/allOrder',
            name: 'allOrder',
            component: resolve => require(['@/js/modules/inventory/allOrder'], resolve),
            meta: {
                tokenRequired: true
            }
        },
        {
            path: '/personalInfo/:id',
            name: 'personalInfo',
            component: resolve => require(['@/js/modules/profile/personalInfo'], resolve),
            meta: {
                tokenRequired: true
            }
        },
        {
            path: '/cupsInventory',
            name: 'cupsInventory',
            component: resolve => require(['@/js/modules/inventory/cupsInventory'], resolve),
            meta: {
                tokenRequired: true
            }
        },
        {
            path: '/ingredientsInventory',
            name: 'ingredientsInventory',
            component: resolve => require(['@/js/modules/inventory/ingredientsInventory'], resolve),
            meta: {
                tokenRequired: true
            }
        },
        {
            path: '/logs',
            name: 'logs',
            component: resolve => require(['@/js/modules/logs/log'], resolve),
            meta: {
                tokenRequired: true
            }
        },
        {
            path: '/orderInventory',
            name: 'orderInventory',
            component: resolve => require(['@/js/modules/inventory/orderInventory'], resolve),
            meta: {
                tokenRequired: true
            }
        },
        {
            path: '/onlineDashboard',
            name: 'onlineDashboard',
            component: resolve => require(['@/js/modules/dashboard/onlineOrderDashboard'], resolve),
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
        
    ],
}   