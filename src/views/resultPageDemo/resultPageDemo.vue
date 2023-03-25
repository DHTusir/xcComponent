<template>
  <div class="demoWrap">
    <div class="describeBox">
      <xc-showCodeCard headerText="结果页组件描述与用法" :textFilePath="filePath">
        <template v-slot:describe>
          用于需要做交易组件的结果页展示，可以根据传入的不同参数，改变结果页展示的信息

          <h1 class="code"><strong>待审核</strong> 页面代码展示</h1>
        </template>
      </xc-showCodeCard>
      <xc-showCodeCard :textFilePath="cuccessPage">
        <template v-slot:describe>
          <h1 class="code"><strong>交易成功</strong> 页面代码展示</h1>
        </template>
      </xc-showCodeCard>
      <xc-showCodeCard :textFilePath="errorPage">
        <template v-slot:describe>
          <h1 class="code"><strong>交易失败</strong> 页面代码展示</h1>
        </template>
      </xc-showCodeCard>
      <h3>结果页 xc-result-page props(参数说明)</h3>
      <xc-tableCode border :columns="propColumns" :content="propTableData"></xc-tableCode>
      <br/>
      <h3>Button events</h3>
      <xc-tableCode border :columns="eventColumns" :content="eventTableData"></xc-tableCode>
    </div>
    <div class="demoBox1">
      <div class="demoBox">
        <div class="phoneHeader">
          <van-nav-bar title="结果页面" left-arrow />
        </div>
        <div class="phoneContent">
          <xc-result-page :resultInfo="resultInfo" text="关闭" @on-confirm="returnEn">
          </xc-result-page>
          <van-nav-bar style="margin-top: 100px;" title="交易成功页面" left-arrow />
          <xc-result-page :resultInfo="successInfo" text="关闭" @on-info="information" @on-confirm="returnEn">
          </xc-result-page>
          <van-nav-bar style="margin-top: 100px;" title="交易失败页面" left-arrow />
          <xc-result-page style="padding-bottom: 100px;" :resultInfo="errorInfo" text="关闭" @on-confirm="returnEn">
          </xc-result-page>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
const filePath = ref('static/views/resultPageDemo/resultPageDemo.txt');
const cuccessPage = ref('static/views/resultPageDemo/cuccessPage.txt');
const errorPage = ref('static/views/resultPageDemo/errorPage.txt');

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
]);
const propTableData = ref([
  {
    attrName: "resultInfo",
    explain: "结果信息",
    type: "Object | Array",
    defaultValue: "{ }",
  },
  {
    attrName: "text",
    explain: "按钮文字",
    type: "String",
    defaultValue: "返回",
  },
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
            eventName: "on-confirm",
            explain: "点击按钮，可以设置返回页面的跳转，或者跳转其他页面",
            returnValue: "无",
        },
        {
            eventName: "on-info",
            explain: "交易成功页面必须传，其他交易可以不用传",
            returnValue: "无",
        },
    ])



const information = (item) => {
  console.log('父元素==>',item);
}

// 成功
let successInfo = reactive({
  "path": "success",
  "resCode": "BTE0000000",
  "state": "交易成功",
  "describe": "12345.60元"
  // "flowNo": "102022110710006881",
})
// 待复核
let check = reactive({
  "path": "success",
  "resCode": "BTE0000000",
  "state": "待复核",
  "describe": "2020-10-19 15:21:45"
  // "flowNo": "102022110710006881",
})

// 待审核
let resultInfo = reactive({
  "path": "success",
  "state": "待审核",
  "describe": "2020-10-19 15:21:45",
  // "resultMsg": [
  //   { key: "金额", value: "19999" },
  //   { key: "付款人账号", value: "6212 1322 4231 8898" },
  //   { key: "流水号", value: "102022110710006881" },
  //   { key: "操作员", value: "张三" },
  // ]
  "resultMsg": {
    '金额': '19999',
    '付款人账号': '6212 1322 4231 8898',
    '流水号': '102022110710006881',
    '操作员': '张三'
  }
})

// 失败
let errorInfo = reactive({
  "path": "error",
  "state": "提交失败",
  "resMsg": "对不起，您暂不符合我行贷款申请条件"
})
// 已提交
/* let resultInfo1 = reactive({
  "path": "wait",
  "state": "已提交",
  "resMsg": "您的贷款申请已提交，请稍后申请结果"
}) */

// console.log('信息',resultInfo.path);
const returnEn = () => {
  console.log('返回页面');
}
</script>

<style lang="less" scoped>
:deep(.van-nav-bar .van-icon) {
  color: #969799;
  font-size: 18px;
}
.code {
  margin-top: 20px;
}
</style>