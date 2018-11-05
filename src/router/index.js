import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "*",
      redirect: "/notFound"
    },
    {
      path: '/',  //首页
      redirect:'/home',
      component: resolve => require(['@/components/home'], resolve),
    },
    {
      path: '/home',
      name: 'home',             //首页
      component: resolve => require(['@/components/home/index'],resolve),
    },
    {
      path: '/product',
      name: 'product',             //产品
      redirect:'/product/list',
      component: resolve => require(['@/components/product/product'],resolve),
      children:[//二级头部菜单导航
        {
          path: '/product/list',//产品列表
          name: 'list',
          component: resolve => require(['@/components/product/productList'],resolve),
          meta:{isLogin:true,
            permissions:'Allow_ProductAndServceMenuItem',
            titOption:"AllProductMenuItem",
            defaultActiveMenu:"ProductCenter",
            perantMenuItemName:"ProductCenterMenuItem"
          },   //是否需要强制登录
          children:[//二级头部菜单导航
            {
              path: '/product/list/screenGroup',//产品列表
              name: 'list',
              component: resolve => require(['@/components/product/productList-child/screenGroup'],resolve),
              meta:{isLogin:true,
                permissions:'',
                titOption:"",
                defaultActiveMenu:"",
                perantMenuItemName:""
              },   //是否需要强制登录

            },
          ]
        },
        {
          path: '/attribute-manager',//属性管理
          component: () => import('@/components/example/product-attribute')
        },
        {
          path: '/tags-manager',//标签管理
          component: () => import('@/components/example/tags-manager')
        },
        {
          path: '/categories-manager',//分类管理
          component: () => import('@/components/example/categories-manager')
        },
        {
          path: '/description',//描述模板
          component: resolve => require(['@/components/settings/description/description'], resolve),
        },
        {
          path: '/spec',//规格模板
          component: resolve => require(['@/components/settings/spec/spec'], resolve),
        },
        {
          path: '/imgSpace',//图片空间管理
          component: resolve => require(['@/components/server/imgSpace/imgSpace'], resolve),
        },
      ]
    },
    {
      path: '/newProduct',
      name: 'newProduct',             //新建产品
      component: resolve => require(['@/components/product/newProduct'],resolve),
      meta:{isLogin:true,
        permissions:'Allow_ProductAndServceMenuItem',
        titOption:"AllProductMenuItem",
        defaultActiveMenu:"ProductCenter",
        perantMenuItemName:"ProductCenterMenuItem"
      }   //是否需要强制登录
    },
    {
      path: '/editOneProduct',
      name: 'editOneProduct',          //单个编辑产品页面
      component: resolve => require(['@/components/product/editOneProduct'],resolve),
      meta:{isLogin:true,
        permissions:'Allow_ProductAndServceMenuItem',
        titOption:"AllProductMenuItem",
        defaultActiveMenu:"ProductCenter",
        perantMenuItemName:"ProductCenterMenuItem"
      }   //是否需要强制登录
    },
    {
      path: '/editMoreProduct',
      name: 'editMoreProduct',          //批量编辑产品页面
      component: resolve => require(['@/components/product/editMoreProduct'],resolve),
      meta:{isLogin:true,
        permissions:'Allow_ProductAndServceMenuItem',
        titOption:"AllProductMenuItem",
        defaultActiveMenu:"ProductCenter",
        perantMenuItemName:"ProductCenterMenuItem"
      }   //是否需要强制登录
    },
    {
      path: '/recovery',
      name: 'recovery',          //垃圾箱主页
      component: resolve => require(['@/components/recovery/recovery'],resolve),
    },
  ]
})

// router.beforeEach((to, from, next) => {
//
// });


export default router;
