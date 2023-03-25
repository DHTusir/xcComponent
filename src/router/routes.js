export default [
    {
        path: '/',
        redirect: '/page/buttonDemo'
    },
    // button按钮
    {
        path: '/page/buttonDemo',
        name: 'buttonDemo',
        component: () => import('@/views/buttonDemo/buttonDemo.vue'),
    },
    // BasicInput基本输入框
    {
        path: '/page/basicInputDemo',
        name: 'basicInputDemo',
        component: () => import('@/views/basicInputDemo/basicInputDemo.vue'),
    },
    // 结果页面
    {
        path: '/page/inputmoneyDemo',
        name: 'inputmoneyDemo',
        component: () => import('@/views/inputmoneyDemo/inputmoneyDemo.vue'),
    },
    //dialog弹窗页面
    {
        path: '/page/dialogDemo',
        name: 'dialogDemo',
        component: () => import('@/views/dialogDemo/dialogDemo.vue'),
    },
    // 结果页面
    {
        path: '/page/resultPageDemo',
        name: 'resultPageDemo',
        component: () => import('@/views/resultPageDemo/resultPageDemo.vue'),
    },
    // 明细卡片
    {
        path: '/page/detailCardDemo',
        name: 'detailCardDemo',
        component: () => import('@/views/detailCardDemo/detailCardDemo.vue'),
    },
    // 步骤条
    {
        path: '/page/stepDemo',
        name: 'stepDemo',
        component: () => import('@/views/stepDemo/stepDemo.vue'),
    },
    {
        path: '/page/dropDownMenuDemo',
        name:'dropDownMenuDemo',
        component: ()=> import('@/views/dropdownMenuDemo/dropdownMenuDemo.vue')
    },
    {
        path: '/page/fieldItemDemo',
        name:'fieldItemDemo',
        component: ()=> import('@/views/fieldItemDemo/fieldItemDemo.vue')
    },
    {
        path: '/page/downAccount',
        name:'downAccount',
        component: ()=> import('@/views/accountDownDemo/accountDownDemo.vue')
    },
    {
        // 搜索页面
        path: '/page/searchDemo',
        name: 'searchDemo',
        component: () => import('@/views/searchDemo/searchDemo.vue')
    },
    {
        // 动态表单
        path: '/page/dynamicFormDemo',
        name: 'dynamicFormDemo',
        component: () => import('@/views/dynamicFormDemo/dynamicFormDemo.vue')
    },
    {
        // 条件查询
        path: '/page/searchCondition',
        name: 'searchCondition',
        component: () => import('@/views/searchConditionDemo/searchConditionDemo.vue')
    },
    {
        // 条件查询
        path: '/page/selectHeadDemo',
        name: 'selectHeadDemo',
        component: () => import('@/views/selectHeadDemo/selectHeadDemo.vue')
    },
    {
        // 备注页面
        path: '/page/remarksDemo',
        name: 'remarksDemo',
        component: () => import('@/views/remarksDemo/remarksDemo.vue')
    },
    {
        // 时间范围
        path: '/page/dateRange',
        name: 'dateRange',
        component: () => import('@/views/datePickerRange/datePickerRange.vue')
    },
    {
        // 复选框选择协议
        path: '/page/checkboxProtocolDemo',
        name: 'checkboxProtocol',
        component: () => import('@/views/checkboxProtocolDemo/checkboxProtocolDemo.vue')
    }
];
