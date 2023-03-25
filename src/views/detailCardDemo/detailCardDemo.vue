<template>
    <div class="demoWrap">
        <div class="describeBox">
            <xc-showCodeCard headerText="基础用法" :textFilePath="filePath">
                <template v-slot:describe>
                    <!-- <p>通过设置属性<code>searchOptions</code>来渲染搜索模块,通过二维数组的格式来渲染出一行两列的样式，内部组件对象目前有四种，分别是：</p> -->
                    <h2>
                    通过标签使用, 'detailInfo'为必传属性, 类型为对象 <br>
                    downLine属性为是否开启下划线
                    </h2>
                </template>
            </xc-showCodeCard>
            <xc-showCodeCard headerText="插槽" :textFilePath="filePath2">
                <template v-slot:describe>
                    <!-- <p>通过设置属性<code>searchOptions</code>来渲染搜索模块,通过二维数组的格式来渲染出一行两列的样式，内部组件对象目前有四种，分别是：</p> -->
                    <h2>
                    如果某行内容特殊, 可通过插槽自定义内容 <br>
                    绑定的对象里插槽对应的属性名为 'slot', 值为自定义插槽名
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
                    title="明细卡片"
                    left-arrow
                    />
            </div>
            <div class="phoneContent">
                <van-divider>普通</van-divider>
                <xc-detail-card :detailInfo="obj1"></xc-detail-card>

                <van-divider>插槽</van-divider>
                <xc-detail-card :detailInfo="obj2" :downLine="true">
                    <template #slotName>
                        <span style="display: flex; justify-content: end; color: #0099ff; margin-left: 21.7rem;">可用份额详情</span>
                    </template>
                </xc-detail-card>
            </div>
        </div>
    </div>
</template>
<script setup name="basicInputDemo">
import { ref } from 'vue'

const filePath = ref('static/views/detailCardDemo/detailCardDemoCode1.txt')
const filePath2 = ref('static/views/detailCardDemo/detailCardDemoCode2.txt')
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
        attrName: "detailInfo",
        explain: "信息对象",
        type: "Object",
        defaultValue: "空",
    },
    {
        attrName: "downLine",
        explain: "是否开启下划线",
        type: "Boolean",
        defaultValue: "false",
    }
])
</script>
<style scoped>


</style>
