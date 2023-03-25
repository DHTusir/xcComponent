<template>
  <div class="demoWrap">
    <div class="describeBox">
      <xc-showCodeCard headerText="备注组件描述与用法" :textFilePath="filePath">
        <template v-slot:describe>
              用于需要备注场景的组件，可以根据传入的参数，改变文字的颜色，改变标题

              <h1 class="code">代码演示</h1>
        </template>
      </xc-showCodeCard>
      <h3>备注组件 xc-remarks props(参数说明)</h3>
      <xc-tableCode border :columns="propColumns" :content="propTableData"></xc-tableCode>
      <!-- <br />
      <h3>Button events</h3>
      <xc-tableCode border :columns="eventColumns" :content="eventTableData"></xc-tableCode> -->
    </div>
    <div class="demoBox1">
      <div class="demoBox">
        <div class="phoneHeader">
          <van-nav-bar title="备注组件" left-arrow />
        </div>
        <div class="phoneContent">
          <xc-remarks :textColor="color" title="说明" :contentList="list"></xc-remarks>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, } from 'vue'
const filePath = ref('static/views/remarksDemo/remarksDemo.txt');

const list = reactive([
  { text: '1. Vant 是一个轻量、可定制的移动端组件库，于 2017 年开源。目前 Vant 官方提供了 Vue 2 版本、Vue 3 版本和微信小程序版本。' },
  { text: '2. Vant 是一个轻量、可定制的移动端组件库，于 2017 年开源。目前Vue 3 版本和微信小程序版本。' },
  { text: '3. Vant 是一个轻量、可定制的移动端组件库，于 2017 年开源。' },
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
]);
const propTableData = ref([
  {
    attrName: "textColor",
    explain: "设置文字的颜色",
    type: "String",
    defaultValue: "#BCBEC1",
  },
  {
    attrName: "title",
    explain: "设置标题",
    type: "String",
    defaultValue: "备注",
  },
  {
    attrName: "contentList",
    explain: "设置内容",
    type: " Array",
    defaultValue: "默认是个空数组",
  }
])

</script>

<style lang="less" scoped>
.code {
  margin-top: 20px;
}
</style>