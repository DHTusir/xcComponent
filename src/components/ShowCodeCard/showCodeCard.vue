<template>
  <div>
    <van-row class="example">
      <van-col span="24" :id="'left-' + uuid" class="example-demo">
        <!--  -->
        <div class="example-case"><slot name="left"></slot></div>
        <!-- 描述标题 -->
        <header class="example-header">
          <span style="font-size: 2rem;font-weight: 600;">{{ headerText }}</span>
        </header>
        <div class="example-desc">
          <!-- 描述插槽 -->
          <slot name="describe"></slot>
        </div>
      </van-col>
      <div class="example-split"></div>
      <van-col span="24" class="example-code">
        <div
          :style="{
            overflowX: 'scroll',
            overflowY: 'hidden',
            marginBottom: '35px',
            height: btnStyle ? '500px' : 'auto'
          }"
        >
          <pre><code id="code" v-html="tempCodeText"></code></pre>
        </div>
        <div class="example-code-more">
          <van-icon  name="arrow-down" @click="clickBtn" :style="!btnStyle ? { display: 'none' } : {display: 'block'}"/>
          <van-icon name="arrow-up" @click="clickBtn" :style="!btnStyle ? {display: 'block'} : { display: 'none' }"/>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script setup name="xc-showCodeCard">
import { ref, defineProps, onMounted } from "vue";
import hljs from "./highlight.js";
import loadFile from './formatFile.js'
// 用于生成唯一的id
const idGen = () => {
  return new Date().getTime();
};
const props = defineProps({
    // 显示在左边分割线上的文字
    headerText: {
      type: String,
      default: "",
    },
    // 代码默认位置
    codePos: {
      type: String,
      default: "left",
    },
    // 显示在右边的代码文本
    // codeText: {
    //   type: String,
    //   default: "",
    // },
    // 文件路径绝对路径
    textFilePath: {
      type: String,
      default: "",
    }
});
const uuid = ref(idGen()); 
const btnStyle = ref(true); 
const tempCodeText = ref(""); 
const codeText1 = ref(""); 
const clickBtn = () => {
  btnStyle.value = !btnStyle.value;
}
const initCodeText = () => {
  tempCodeText.value = hljs.highlight(codeText1.value, {
    language: "xml",
  }).value;
}
// 加载文件内容
const loadFileText = () => {
  if (!!props.textFilePath) {
    codeText1.value = loadFile(props.textFilePath);
    initCodeText();
  }
}
onMounted(() => {
  loadFileText()
})
</script>

<style scoped>
.ivu-row {
  position: relative;
  margin-left: 0;
  margin-right: 0;
  height: auto;
  zoom: 1;
  display: block;
}
.example {
  width: calc(100vw - 900px);
  border: 1px solid #eee;
  border-radius: 6px;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.example-split {
  display: block;
  border: 1px dashed #eee;
}
.example-demo {
  padding: 20px 0;
  position: relative;
}
.inline-block {
  float: left;
}
.example-code {
  padding: 0 10px;
  position: relative;
  overflow: hidden;
  transition: height 0.2s ease-in-out;
}
.ivu-row:after {
  clear: both;
  visibility: hidden;
  font-size: 0;
  height: 0;
}
.ivu-row:after,
.ivu-row:before {
  content: "";
  display: table;
}
.example-case {
  padding: 0 20px;
}
.example-header {
  font-weight: 500;
  margin: 30px 0 10px;
  position: relative;
}
.example-desc {
  font-size: 12px;
  padding: 0 20px;
}
.example-header:before {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: #eee;
  position: absolute;
  top: 10px;
  left: 0;
}
.example-header span {
  display: inline-block;
  background: #fff;
  padding: 0 10px 0 18px;
  position: relative;
  top: -5px;
  margin-left: 30px;
  font-size: 14px;
}
.example-desc p {
  text-align: justify;
}
pre code {
  display: inline;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
}
:deep(code) {
  display: inline-block;
  background: #f7f7f7;
  font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
  margin: 0 3px;
  padding: 1px 5px;
  border-radius: 3px;
  color: #666;
  border: 1px solid #eee;
}
.example-code-more {
  position: absolute;
  bottom: 0;
  left: 4px;
  right: 4px;
  text-align: center;
  cursor: pointer;
  padding: 5px 0;
}
.example-code-more:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  box-shadow: inset 0 -15px 30px #fff;
}
.example-code-more i {
  position: relative;
  top: 5px;
  z-index: 2;
}
.ivu-icon {
  display: inline-block;
  font-family: Ionicons;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  vertical-align: middle;
}
.ivu-icon-ios-arrow-down:before {
  content: "\F116";
}
.ivu-icon-ios-arrow-up:before {
  content: "\F124";
}
.example-code-more .ivu-btn {
  padding: 0 0 4px;
  position: relative;
  top: 4px;
  z-index: 2;
}
:deep(.hljs-tag) {
  color: #3e76f6;
}
:deep(.hljs-attr){
  color: #e96900;
}
:deep(.hljs-string) {
  color: #42b983;
}
:deep(.hljs-keyword) {
  color: #e96900;
}
</style>