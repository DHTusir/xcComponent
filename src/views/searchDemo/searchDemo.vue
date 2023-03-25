<template>
  <div class="demoWrap">
    <div class="describeBox">
      <xc-showCodeCard headerText="搜索组件描述与用法" :textFilePath="filePath">
        <template #describe>
          <h2>
            用于搜索场景的输入框组件
          </h2>
        </template>
      </xc-showCodeCard>
      <h3>search props</h3>
      <xc-tableCode border :columns="propColumns" :content="propTableData"></xc-tableCode>
      <br />
      <h3>search events</h3>
      <xc-tableCode border :columns="eventColumns" :content="eventTableData"></xc-tableCode>
    </div>
    <div class="demoBox1"></div>
    <div class="demoBox">
      <div class="phoneHeader">
        <van-nav-bar title="搜索组件" left-arrow />
      </div>
      <div class="pahoneContent">
        <xc-search :item="list" @on-search="changeval"  @on-details="itemDetails" v-model.trim="value"></xc-search>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const filePath = ref('static/views/searchDemo/searchDemo.txt');

const propColumns = reactive([
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

const propTableData = reactive([
  {
    attrName: "list",
    explain: "根据用户输入的关键词，去发请求，拿到后端返回的信息列表",
    type: "Array",
    defaultValue: "[]",
  },
  {
    attrName: "v-model",
    explain: "当前输入的值,v-model.trim,要加个trim,去掉前后空格",
    type: "number | string",
    defaultValue: "",
  }
])

const eventColumns = reactive([
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

const eventTableData = reactive([
  {
    eventName: "on-search",
    explain: "拿到用户最新输入的内容，去发请求，拿到后端返回的数据渲染页面",
    returnValue: "无",
  },
  {
    eventName: "on-details",
    explain: "点击列表中的某一项，跳转详情页",
    returnValue: "无",
  },
])
const value = ref('');
let list = reactive([]);
// 跳转详情页

// 根据用户输入的关键词，去发请求
const changeval = () => {
  console.log('最新的值==>', value.value);
  list.length = 0;
  let arr = [
    { iconTitle: '黄浦区', address: '海潮路33弄小区', info: '海潮路33弄' },
    { iconTitle: '浦东新区', address: '康桥', info: '海潮路33弄' },
    { iconTitle: '黄浦区', address: '北京东路', info: '科技京城' },
    { iconTitle: '黄浦区', address: '海潮路33弄小区', info: '海潮路33弄' },
  ];
  // list = reactive(arr);
  arr.forEach(ele => {
    list.push(ele);
  })
}

// 用户点击，跳转详情页
const itemDetails = (item) => {
  console.log('搜索组件', value.value);
  console.log('每一项==>', item);
}
</script>

<style lang="less" scoped></style>
