export const routes = [
    {
        path: "/",
        name: "Main",
        meta: { authority: ["ROLE_USER"] },
        component: () =>
            import(/* webpackChunkName: "Main" */ "views/Template/Layout"),
        redirect: "/main",

        children: [
            {
                path: "/main",
                // meta: { authority: ["ROLE_USER"] },
                /* webpackChunkName: 'product' */
                // component: RenderRouterView,
                children: [
                    // {
                    //   path: "/product",
                    //   redirect: "/product/list",
                    // },

                    {
                        path: "/main",
                        name: "main_page",
                        /* webpackChunkName: 'user_register' */
                        component: () => import("views/Product/Main"),
                    },
                    {
                        path: "/product",
                        name: "prd_list",
                        /* webpackChunkName: '/prd_list' */
                        component: () => import("views/Product/List"),
                    },
                    {
                        path: "/product/detail/:id",
                        name: "prd_detail",
                        /* webpackChunkName: '/prd_detail' */
                        component: () => import("views/Product/Detail"),
                    },
                    {
                        path: "/market/seller/list",
                        name: "market_seller_list",
                        /* webpackChunkName: '/prd_list' */
                        component: () => import("@/views/MarketSeller/List"),
                    },
                    {
                        path: "/user/Manage",
                        name: "user_manager",
                        /* webpackChunkName: 'user_manager' */
                        component: () => import("../views/User/Manage"),
                    },

                    {
                        path: "/user/license",
                        name: "user_license",
                        component: () => import("../views/User/License"),
                    },

                    {
                        path: "/user/licenseForm/:id?",
                        name: "user_licenseForm",
                        component: () => import("../views/User/LicenseForm"),
                    },

                    {
                        path: "/user/licensePay",
                        name: "user_licensePay",
                        component: () => import("../views/User/LicensePay.vue"),
                    },

                    {
                        path: "/user/licenseHistory",
                        name: "user_licenseHistory",
                        component: () => import("../views/User/LicenseHistory"),
                    },

                    {
                        path: "/user/FilterProductWords",
                        name: "user_filterProductWords",
                        /* webpackChunkName: 'user_manager' */
                        component: () => import("../views/User/FilterProductWords"),
                    },
                    {
                        path: "/setting/account",
                        name: "setting_account",
                        component: () => import("views/Setting/Account"),
                    },
                    {
                        path: "/setting/margin",
                        name: "setting_margin",
                        component: () => import("views/Setting/Margin"),
                    },
                    {
                        path: "/setting/delivery",
                        name: "setting_delivery",
                        component: () => import("@/views/Setting/DeliveryList.vue"),
                    },
                    {
                        path: "/setting/delivery/form/:id?",
                        name: "setting_delivery_form",
                        component: () => import("@/views/Setting/DeliveryForm.vue"),
                    },
                    {
                        path: "/product/preview/:id",
                        name: "prd_preview",
                        /* webpackChunkName: 'user_register' */
                        component: () => import("@/views/Product/Preview"),
                    },
                    {
                        path: "/product/domeggook",
                        name: "prd_domeggook",
                        /* webpackChunkName: 'user_register' */
                        component: () => import("@/views/Product/Domeggook"),
                    },
                    {
                        path: "/order/list",
                        name: "order_list",
                        /* webpackChunkName: 'user_register' */
                        component: () => import("@/views/Order/List.vue"),
                    },
                    {
                        path: "/board/list",
                        name: "board_list",
                        meta: { authority: ["ROLE_ADMIN"] },
                        /* webpackChunkName: 'user_register' */
                        component: () => import("@/views/Board/List.vue"),
                    },
                    {
                        path: "/board/form/:id?",
                        name: "board_form",
                        meta: { authority: ["ROLE_ADMIN"] },
                        /* webpackChunkName: 'user_register' */
                        component: () => import("@/views/Board/Form.vue"),
                    },
                    {
                        path: "/board/view/:id?",
                        name: "board_view",
                        meta: { authority: ["ROLE_ADMIN"] },
                        /* webpackChunkName: 'user_register' */
                        component: () => import("@/views/Board/View.vue"),
                    },
                    {
                        path: "/board/notice",
                        name: "board_notice",
                        /* webpackChunkName: 'user_register' */
                        component: () => import("@/views/Board/NoticeList.vue"),
                    },
                    {
                        path: "/board/notice/view/:id?",
                        name: "board_notice_view",
                        /* webpackChunkName: 'user_register' */
                        component: () => import("@/views/Board/NoticeView.vue"),
                    },
                    {
                        path: "/board/question",
                        name: "board_question",
                        /* webpackChunkName: 'user_register' */
                        component: () => import("@/views/Board/QuestionList.vue"),
                    },
                    {
                        path: "/board/question/form/:id?",
                        name: "board_question_form",
                        /* webpackChunkName: 'user_register' */
                        component: () => import("@/views/Board/QuestionForm.vue"),
                    },
                    {
                        path: "/board/question/view/:id?",
                        name: "board_question_view",
                        /* webpackChunkName: 'user_register' */
                        component: () => import("@/views/Board/QuestionView.vue"),
                    },
                    // {
                    //   path: "/user/register",
                    //   name: "user_register",
                    //   /* webpackChunkName: 'user_register' */
                    //   component: () => import("../views/User/Register"),
                    // },
                ],
            },
        ],
    },
    {
        path: "/user/register",
        name: "user_register",
        /* webpackChunkName: 'user_register' */
        component: () => import("views/User/Register"),
    },
    {
        path: "/user/login",
        name: "user_login",
        /* webpackChunkName: 'user_register' */
        component: () => import("views/User/Login"),
    },

    {
        path: "/:pathMatch(.*)*",
        name: "404",
        /* webpackChunkName: 'form' */
        component: () => import("views/Template/404"),
    },
    // {
    //   path: "/product",
    //   name: "product",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "views/Product/List.vue"),
    //
    // },
];