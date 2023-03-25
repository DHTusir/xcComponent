<template>
  <div class="demoWrap">
        <div class="describeBox">
            <xc-showCodeCard headerText="基础用法" :textFilePath="filePath">
                <template v-slot:describe>
                    <p style="font-size: 20px;">传入账号columns，选择账号之后会调用setCurBal函数来设置币种和余额，有两种样式，参数都一样，区别是第一种需要在setCurBal中设置币种，第二种是需要在setCurBal中设置币种编号（例如：USD）对自动转化为对应币种符号</p>
                </template>
            </xc-showCodeCard>
            <h1>Props</h1>
            <xc-tableCode border :columns="propColumns" :content="propTableData"></xc-tableCode>
            <h1>Event</h1>
            <xc-tableCode border :columns="callColumns" :content="callTableData"></xc-tableCode>
            <h1>slots</h1>
            <xc-tableCode border :columns="slotColumns" :content="slotTableData"></xc-tableCode>
            <h1>columns数据结构</h1>
            <xc-tableCode border :columns="cColumns" :content="cTableData"></xc-tableCode>
        </div>
        <div class="demoBox1"></div>
        <div class="demoBox">
            <div class="phoneHeader">
                <van-nav-bar
                    title="账户选择下拉框"
                    left-arrow
                    />
            </div>
            <div class="phoneContent">
                <div style="margin:50px 0"><xc-down-account  v-model="obj.value" :current="obj.current" :balance="obj.balance"  label="动态账户" @setCurBal="setCurBal" :columns="columns"></xc-down-account></div>
                <xc-down-accountT v-model="obj1.value1" :current="obj1.current1" :balance="obj1.balance1" label="付款卡" @setCurBal="setCurBal1" :columns="columns1"></xc-down-accountT>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref,reactive} from "vue"
    const filePath = ref('static/views/accountDownDemo/accountDownDemo.txt')
    const columns = reactive([
        { text: '6212136666668855', value: '6212136666668855'},
        { text: '6212136666668858', value: '6212136666668858'},
        { text: '6212136666665988', value: '6212136666665988'},
        { text: '6212136666668888', value: '6212136666668888'},
        { text: '6212136666665533', value: '6212136666665533'},
    ])
    let obj=reactive({
        value : "6212136666668855",
        current:'' ,
        balance: ''
    })
    const setCurBal = ()=>{
        //发送请求获取币种或余额 设置组件中的币种和余额
        obj.current=["人民币","美元"][Math.floor(Math.random()*2)],
        obj.balance=["888,888,00","666,666,666,00"][Math.floor(Math.random()*2)]
    }

    const columns1 = reactive([
        { text: '南洋商业银行(8855)', value: '6212136666668855'},
        { text: '南洋商业银行(8858)', value: '6212136666668858'},
        { text: '南洋商业银行(5988)', value: '6212136666665988'},
        { text: '南洋商业银行(8888)', value: '6212136666668888'},
        { text: '南洋商业银行(5533)', value: '6212136666665533'},
    ])
    let obj1=reactive({
        value1   : "6212136666668855",
        current1 : '',
        balance1 : ''
    })
    const setCurBal1=()=>{
        //发送请求获取币种或余额 设置组件中的币种和余额
        obj1.current1=['CNY','USD'][Math.floor(Math.random()*2)]
        obj1.balance1=["888,888,00","666,666,666,00"][Math.floor(Math.random()*2)]
    }
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
        attrName: "columns",
        explain: "用来设置组件中账号list,格式{text-value}对象",
        type: "Array",
        defaultValue: "[]",
    },
    {
        attrName: "modelvalue",
        explain: "双向绑定组件中账号信息",
        type: "String",
        defaultValue: "",
    },
    {
        attrName: "current",
        explain: "用来设置组件中币种信息",
        type: "String",
        defaultValue: "",
    },
    {
        attrName: "balance",
        explain: "用来设置组件中余额信息",
        type: "String",
        defaultValue: "",
    }
])

    const callColumns = ref([
        {
            title: "事件名",
            key: "attrName",
        },
        {
            title: "说明",
            key: "explain",
        },
        {
            title: "回调值",
            key: "defaultValue",
        }
    ])    
    
    const callTableData = ref([
    {
        attrName: "serCurBal",
        explain: "初始化和选择账号点击确认按钮后会触发,用来设置组件中的币种和余额",
        defaultValue: "{selectedOptions}",
    },
    {
        attrName: "cancel",
        explain: "点击取消按钮时触发",
        defaultValue: "selectedOptions",
    },
    {
        attrName: "change",
        explain: "选项改变时触发",
        defaultValue: "{ selectedValues, selectedOptions, selectedIndexes, columnIndex }",
    },
    {
        attrName: "click-option",
        explain: "点击选项时触发",
        defaultValue: "{ currentOption, selectedValues, selectedOptions, selectedIndexes, columnIndex }",
    },
    
])
const slotColumns = ref([
        {
            title: "名称",
            key: "attrName",
        },
        {
            title: "说明",
            key: "explain",
        },
        {
            title: "参数",
            key: "defaultValue",
        }
    ])
const slotTableData = ref([
    {
        attrName: "toolbar",
        explain: "自定义整个顶部栏的内容",
        defaultValue: "-",
    },
    {
        attrName: "title",
        explain: "自定义标题内容",
        defaultValue: "-",
    },
    {
        attrName: "confirm",
        explain: "自定义确认按钮内容",
        defaultValue: "-",
    },
    {
        attrName: "click-option",
        explain: "点击选项时触发",
        defaultValue: "{ currentOption, selectedValues, selectedOptions, selectedIndexes, columnIndex }",
    },
    
])
const cColumns = ref([
        {
            title: "键名",
            key: "attrName",
        },
        {
            title: "说明",
            key: "explain",
        },
        {
            title: "类型",
            key: "defaultValue",
        }
    ])
const cTableData = ref([
    {
        attrName: "text",
        explain: "选项文字内容",
        defaultValue: "string | number",
    },
    {
        attrName: "value",
        explain: "选项对应的值",
        defaultValue: "string | number",
    },
    {
        attrName: "disabled",
        explain: "是否禁用选项",
        defaultValue: "boolean",
    }
    
])
</script>

<style>

</style>