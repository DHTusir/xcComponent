<template>
    <div class="demoWrap">
        <div class="describeBox">
            <xc-showCodeCard headerText="基础用法" :textFilePath="filePath">
                <template v-slot:describe>
                    <!-- <p>通过设置属性<code>searchOptions</code>来渲染搜索模块,通过二维数组的格式来渲染出一行两列的样式，内部组件对象目前有四种，分别是：</p> -->
                    <h2>
                    通过标签使用, 可设置'money'初始传入金额, 通过自定义事件 '@money-format' 来接收子组件传回来的格式化后的金额和金额汉字大写
                    </h2>
                </template>
            </xc-showCodeCard>
            <xc-showCodeCard headerText="插槽" :textFilePath="filePath2">
                <template v-slot:describe>
                    <!-- <p>通过设置属性<code>searchOptions</code>来渲染搜索模块,通过二维数组的格式来渲染出一行两列的样式，内部组件对象目前有四种，分别是：</p> -->
                    <h2>
                    可通过'#button'插槽插入自定义内容在金额尾部
                    </h2>
                </template>
            </xc-showCodeCard>
            <xc-showCodeCard headerText="禁用" :textFilePath="filePath3">
                <template v-slot:describe>
                    <!-- <p>通过设置属性<code>searchOptions</code>来渲染搜索模块,通过二维数组的格式来渲染出一行两列的样式，内部组件对象目前有四种，分别是：</p> -->
                    <h2>
                    通过'disabled'可设置输入框是否禁用
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
                    title="金额输入框"
                    left-arrow
                    />
            </div>
            <div class="phoneContent">
                <van-divider>基础</van-divider>
                <xc-inputmoney :money="num1" @money-format="moneyFormat">
                </xc-inputmoney>
                <van-divider>带按钮</van-divider>
                <xc-inputmoney :money="num2" @money-format="moneyFormat">
                    <template #button>
                        <span class="all" @click="click" style="font-size: 1.4rem; color: #1989FF;">全部</span>
                    </template>
                </xc-inputmoney>
                <van-divider>禁用</van-divider>
                <xc-inputmoney :money="num3" @money-format="moneyFormat" :disabled="true">
                </xc-inputmoney>
            </div>
        </div>
    </div>
</template>
<script setup name="inputmoneyDemo">
import { ref } from 'vue'

const filePath = ref('static/views/inputmoneyDemoCode/inputmoneyDemoCode.txt')
const filePath2 = ref('static/views/inputmoneyDemoCode/inputmoneyDemoCode2.txt')
const filePath3 = ref('static/views/inputmoneyDemoCode/inputmoneyDemoCode3.txt')
const num1 = ref('12345');
const num2 = ref('12345');
const num3= ref('12345');

const moneyFormat = (val, cny) => {
    console.log(val, cny);
    num2.value = val
}

const click = () => {
    num2.value = '99999.999'
    console.log(num1.value);
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
        attrName: "money",
        explain: "需要传入的金额",
        type: "String",
        defaultValue: "空",
    },
    {
        attrName: "label",
        explain: "金额大写label",
        type: "String",
        defaultValue: "空",
    },
    {
        attrName: "amtIntLength",
        explain: "最大输入位数",
        type: " Number",
        defaultValue: "14",
    },
    {
        attrName: "disabled",
        explain: "设置输入框为禁用状态",
        type: "Boolean",
        defaultValue: "false",
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
        eventName: "money-format",
        explain: "失焦时触发,获得格式化后的金额和大写汉字",
        returnValue: "无",
    }       
])
</script>
<style scoped>
.button:hover {
    cursor: pointer;
    font-size: 1rem;
}
.all:hover {
    cursor: pointer;
}
</style>
