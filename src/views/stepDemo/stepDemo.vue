<template>
    <div class="demoWrap">
        <div class="describeBox">
            <xc-showCodeCard headerText="基础用法" :textFilePath="filePath">
                <template v-slot:describe>
                    <!-- <p>通过设置属性<code>searchOptions</code>来渲染搜索模块,通过二维数组的格式来渲染出一行两列的样式，内部组件对象目前有四种，分别是：</p> -->
                    <h2>
                    通过标签使用, 'stepList', 'stepIndex' 为必传属性,  <br>
                    分别为步骤数组和当前所在步骤
                    </h2>
                </template>
            </xc-showCodeCard>
            <xc-showCodeCard headerText="竖向步骤条" :textFilePath="filePath2">
                <template v-slot:describe>
                    <!-- <p>通过设置属性<code>searchOptions</code>来渲染搜索模块,通过二维数组的格式来渲染出一行两列的样式，内部组件对象目前有四种，分别是：</p> -->
                    <h2>
                    通过标签使用, 'stepList', 'stepIndex' 为必传属性,  <br>
                    分别为步骤数组和当前所在步骤 <br>
                    数组里属性为 'label': 当前步骤标题, 'slot': 自定义插槽内容的插槽名
                    </h2>
                </template>
            </xc-showCodeCard>
            <h3>props</h3>
            <xc-tableCode border :columns="propColumns" :content="propTableData"></xc-tableCode>
        </div>
        <div class="demoBox1"></div>
        <div class="demoBox">
            <div class="phoneHeader">
                <van-nav-bar
                    title="步骤条"
                    left-arrow
                    />
            </div>
            <div class="phoneContent">
                <xc-step :stepList="stepList" :stepIndex="stepIndex"></xc-step>

                <xc-detail-card v-if="stepIndex == 1" :detailInfo="obj1"></xc-detail-card>
                <xc-detail-card v-if="stepIndex == 2" :detailInfo="obj2">
                    <template #slotName>
                        <span style="display: flex; justify-content: end; color: #0099ff; margin-left: 21.8rem;">可用份额详情</span>
                    </template>
                </xc-detail-card>
                <xc-result-page 
                v-if="stepIndex == 3"
                :resultInfo="successInfo"
                text="关闭"
                @on-confirm="returnEn">
                </xc-result-page>

                <xc-button v-if="stepIndex !== 3" @click="next" style="margin-top: 10rem" size="large">下一步</xc-button>

                <xc-stepcol :stepList="stepList2" :stepIndex="stepIndex">
                    <template #sloatName>
                        <xc-button>订单详情</xc-button>
                    </template>
                    <template #sloatName2>
                        <span style="font-size: 1.6rem; color: #D4594A;">正在换汇...</span>
                    </template>
                </xc-stepcol>
            </div>
        </div>
    </div>
</template>
<script setup name="buttonDemo">
import { ref, reactive } from 'vue';

const filePath = ref('static/views/stepDemo/stepDemoCode.txt')
const filePath2 = ref('static/views/stepDemo/stepColDemoCode.txt')

const stepList = ref(['汇款信息', '收款信息', '审核结果']);
const stepIndex = ref(1)

const stepList2 = ref([
    {
        label: '下单',
        slot: 'sloatName'
    },
    {
        label: '等待付款',
        slot: 'sloatName'
    },
    {
        label: '付款成功',
        slot: 'sloatName2'
    }
]);

const next = () => {
    if(stepIndex.value > 3) {
        stepIndex.value = 1;
        return;
    }
    stepIndex.value++;
}

const obj1 = ref({
    金额: '12,321,312.00',
    姓名: '涂**',
    银行卡号: '1233 **** **** 2322',
    交易日期: '2023-03-17',
    币种: '人名币',
    交易状态: '成功',
    账户类型: '其他',
    交易流水号: '2132139835712783'
});

const obj2 = ref({
    金额: '12,321,312.00',
    姓名: '涂**',
    银行卡号: '1233 **** **** 2322',
    交易日期: '2023-03-17',
    币种: '人名币',
    交易状态: '成功',
    'slot': 'slotName',
    账户类型: '其他',
    交易流水号: '2132139835712783'
});

let successInfo = reactive({
  "path": "success",
  "resCode": "BTE0000000",
  "state": "交易成功",
  "describe": "12345.60元"
  // "flowNo": "102022110710006881",
})

const returnEn = () => {
  stepIndex.value = 1
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
        attrName: "stepIndex",
        explain: "当前索引",
        type: "Number",
        defaultValue: "空",
    },
    {
        attrName: "stepList",
        explain: "步骤数组",
        type: "Array",
        defaultValue: "空",
    }
])
</script>
<style scoped>


</style>
