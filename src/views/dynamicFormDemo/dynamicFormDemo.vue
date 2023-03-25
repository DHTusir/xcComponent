<template>
    <div class="demoWrap">
        <div class="describeBox">
            <xc-showCodeCard headerText="动态表单基础用法" :textFilePath="filePath">
                <template v-slot:describe>
                    <!-- <p>通过设置属性<code>searchOptions</code>来渲染搜索模块,通过二维数组的格式来渲染出一行两列的样式，内部组件对象目前有四种，分别是：</p> -->
                    <h2>
                    通过标签使用, 需要传的属性为 'formItem': 表单项配置, 'formData': 表单数据<br>
                    表单项配置基本属性: <br>
                     'type': 需要渲染的组件名, 支持vant原生组件和自定义组件, 命名方式为驼峰命名, 例: inputBasic <br>
                     'name': 当前组件绑定的值的名称, 对应 'formData' 里的属性名<br>
                     'props': 需要给当前组件传递的属性<br>
                     'space': 当前行和上一行是否需要间隙<br>
                     'upLabel': 当前行是否有大标题<br>
                     'vNode': 如果当前使用的组件需要渲染自定义内容到插槽里, 则需要传递vNode属性, 属性值为h渲染函数
                    </h2>
                </template>
            </xc-showCodeCard>
            <h3>props</h3>
            <xc-tableCode border :columns="propColumns" :content="propTableData"></xc-tableCode>
            <br />
            <h3>events</h3>
            <xc-tableCode border :columns="eventColumns" :content="eventTableData"></xc-tableCode>
        </div>
        <div class="demoBox1"></div>
        <div class="demoBox">
            <div class="phoneHeader">
                <van-nav-bar
                    title="转账"
                    left-arrow
                    />
            </div>
            <div class="phoneContent">
                <xc-dynamicForm
                 ref="xcRef" 
                 :formItem="formOpt" 
                 :formData="formData" 
                 @onSubmit="onSubmit"
                 @onFailed="onFailed"
                 >
                    <!-- <template #xc-basicInput>
                        <xc-basicInput v-model="formData.payerName"></xc-basicInput>
                    </template>
                    <template #xc-basicInput1>
                        <xc-basicInput v-model="formData.inputtt"></xc-basicInput>
                    </template>
                    <template #xc-inputmoney>
                        <xc-inputmoney :money="formData.inputMoney"></xc-inputmoney> -->
                    <!-- </template> -->
                    <template #botoomBut>
                        <van-button round block type="primary" native-type="submit">
                        提交
                        </van-button>
                    </template>
                </xc-dynamicForm>
                <xc-remarks :textColor="color" title="提示" :contentList="list"></xc-remarks>
            </div>
        </div>
    </div>
</template>
<script setup name="dynimicFormDemo">
import { ref, h, getCurrentInstance, resolveComponent } from 'vue'

const filePath = ref('static/views/dynamicFormDemoCode/dynamicFormDemoCode.txt')

const xcButton = resolveComponent('xc-button') // 手动解析已注册的组件

const current = getCurrentInstance() // 获取当前实例
const xcRef = ref(null)
const submit = (val) => {
    console.log(current);
}
const onSubmit = (val) => { // 成功触发
    console.log(current);
    console.log(formData.value);
}
const onFailed = (val) => { // 失败触发
    console.log(val);
}
const val = ref('A')
const formOpt = ref([ // 表单项
    {
        upLable: '收款人',
        name: 'payerName',
        type: 'basicInput',
        space: true,
        rules: [{required: true, message: '请填写户名'}],
        props: {
            label: '户名',
            inputAlign: 'right'
        }
    },
    {
        name: 'payerAccount',
        type: 'basicInput',
        rules: [{required: true, message: '请填写金额'}],
        props: {
            label: '账号',
            inputAlign: 'right'
        }
    },
    {
        name: 'bank',
        type: 'vanPicker',
        props: {
            label: '银行',
            placeholder: '选择银行',
            columns: [
                { text: '南洋商业银行', value: '1' },
                { text: '浦发银行', value: '2' },
                { text: '硅谷银行', value: '3' },
            ],
        },
        showPicker: false,
        // rules: [{required: true, message: '请填写金额'}],
        onConfirmm: (val) => {
            console.log(val);
            formData.value.vanpicker = val.selectedOptions[0].text
        }
    },
    {
        name: 'payType',
        type: 'vanPicker',
        props: {
            label: '收款方类型',
            placeholder: '选择类型',
            columns: [
                { text: '境内个人', value: '境内个人' },
                { text: '境外个人', value: '境外个人' },
                { text: '境内企业', value: '境内企业' },
            ],
            showPicker: false,
        },
        // rules: [{required: true, message: '请填写金额'}],
        onConfirmm: (val) => {
            console.log(val);
            formData.value.vanpicker = val.selectedOptions[0].text
        }
    },
    {
        name: 'money',
        type: 'inputMoney',
        space: true,
        upLable: '转账金额',
        rules: [{required: true, message: '请填写金额'}],
        vNode: h('span', {
            class: 'fad',
            style: {
                color: '#1989FF',
                fontSize: '2rem'
            },
            onClick: () => {
                console.log(formData.value.money);
                formData.value.money = '9999999.999'
            }
            
        }, '全部'),
        moneyFormat: (val) => {
            console.log(val);
        }
    },
    // {   // 账户下拉
    //     name: 'account',
    //     type: 'downAccount',
    //     rules: [{required: true, message: '请填写金额'}],
    //     props: {
    //         label: '付款账号:',
    //         columns: [
    //             { text: '623266167272', value: '123'},
    //             { text: '723266167272', value: '456'},
    //             { text: '823266167272', value: '789'},
    //         ]
    //     },
    //     setCurBal: () => {
    //         formData.value.account.current=["人民币","美元"][Math.floor(Math.random()*2)],
    //         formData.value.account.balance=["888,888,00","666,666,666,00"][Math.floor(Math.random()*2)]
    //     }
    // },
    {   // 银行卡下拉
        name: 'accountT',
        type: 'downAccountT',
        rules: [{required: true, message: '请填写金额'}],
        props: {
            label: '付款账号',
            columns: [
                { text: '南洋商业银行(8855)', value: '6212136666668855'},
                { text: '南洋商业银行(8858)', value: '6212136666668858'},
                { text: '南洋商业银行(5988)', value: '6212136666665988'},
            ]
        },
        setCurBal: () => {
            formData.value.accountT.current=['CNY','USD'][Math.floor(Math.random()*2)]
            formData.value.accountT.balance=["888,888,00","666,666,666,00"][Math.floor(Math.random()*2)]
        }
    },
    {
        name: 'payerUse',
        type: 'basicInput',
        space: true,
        rules: [{required: true, message: '请填写金额'}],
        props: {
            label: '转账用途',
            inputAlign: 'right'
        }
    },
    {
        name: 'payerText',
        type: 'basicInput',
        rules: [{required: true, message: '请填写金额'}],
        props: {
            label: '转账附言',
            inputAlign: 'right'
        }
    },
    {
        name: 'phoneNumber',
        type: 'basicInput',
        props: {
            inputAlign: 'right',
            readonly: true
        },
        vNode: [
            {
                slotName: 'label',
                render: [
                h('span', {
                    style: {
                        marginRight: '0.8rem'
                    }
                }, '收款人手机号'),
                h(xcButton, {
                    type: "info",
                    width: "auto",
                    height: "2.5rem",
                    size: "mini"
                }, () => '+86 中国大陆▼')
                ]
            },
            {
                slotName: 'button',
                render: h(xcButton, {
                    style: {
                        marginBottom: "0.5rem",
                    },
                    type:"info" ,
                    width:"3.5rem" ,
                    height:"2.5rem" ,
                    size:"mini"
                }, () => val.value)
            }
        ]
    },
    {
        name: 'cell',
        type: 'vanCell',
        props: {
            title: '标题'
        }
    },
]);

const formData = ref({ // 表单数据
    payerName: '收款人14300292833',
    payerAccount: '621727282718',
    // account: { // 账户下拉
    //     value: '456',
    //     current:'' ,
    //     balance: ''
    // },
    bank: '南洋商业银行',
    payType: '境内个人',
    money: '12345',
    accountT: { // 银行卡下拉
        value  : "6212136666668855",
        current : '',
        balance : ''
    },
    payerUse: '个人转账',
    payerText: '转账',
    phoneNumber: '',
    cell: '内容'
});

const list = ref([
  { text: '1. 为了您的资金安全，请勿向陌生人转账汇款，谨防电信诈骗。' },
  { text: '2. 请正确填写收款方信息，防止因收款方信息填写错误导致对方银行退款。' },
]);
const color = '#969799';

const propColumns = ref([
    {
        title: "属性",
        key: "attrName",
    },
    {
        title: "说明",
        key: "explain",
    },
    {
        title: "类型",
        key: "type",
    },
    {
        title: "默认值",
        key: "defaultValue",
    }
])    
const propTableData = ref([
    {
        attrName: "formItem",
        explain: "表单项配置",
        type: "Array",
        defaultValue: "空",
    },
    {
        attrName: "formData",
        explain: "表单数据",
        type: "Object",
        defaultValue: "空",
    }
])
const eventColumns = ref([
    {
        title: "事件名",
        key: "eventName",
    },
    {
        title: "说明",
        key: "explain",
    },
    {
        title: "返回值",
        key: "returnValue",
    },
])
const eventTableData = ref([
    {
        eventName: "onSubmit",
        explain: "校验成功时触发,获得当前所有表单项数据",
        returnValue: "无",
    },  
    {
        eventName: "onFailed",
        explain: "校验失败时触发,获得当前校验失败表单项的值和错误信息",
        returnValue: "无",
    },  
])
</script>
<style scoped>
.fad:hover {
    cursor: pointer;
}
</style>
