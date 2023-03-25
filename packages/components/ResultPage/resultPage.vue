<template>
  <result :type="resultType" :resultInfo="props.resultInfo.resultMsg ?? props.resultInfo" :mainText="mainText"
    :assistantText="ectypeText" :okBtnText="text !== undefined ? props.text : '返回'" @on-details="detail" @on-ok="ok">
  </result>
</template>

<script setup>
import { ref, defineProps, defineEmits, onMounted } from 'vue'
import result from './XcResultPage.vue'
const props = defineProps({
  resultInfo: {
    type: Object,
    default: () => { },
  },
  text: {
    type: String,
  },
})
// 向父组件发射事件
const emit = defineEmits(["on-confirm", "on-info"]);
// 关闭按钮事件
const ok = () => {
  emit("on-confirm")
}
// 交易成功，点击每一项的详情页跳转
const detail = (item) => {
  emit("on-info", item)
}

// 交易状态
let resultType = ref("success");
// 主标题
let mainText = ref("");
// 副标题
let ectypeText = ref("");

let resultInfo = ref("");
onMounted(() => {
  if (props.resultInfo.path == "success") {
    mainText.value = props.resultInfo.state; // 主标题
    ectypeText.value = props.resultInfo.describe; // 副标题
  } else if (props.resultInfo.path === "error") {
    // 交易状态
    resultType.value = props.resultInfo.path;
    // 主标题
    mainText.value = props.resultInfo.state;
    // 错误信息
    resultInfo.value = props.resultInfo.resMsg;
  } else if (props.resultInfo.path == "wait") {
    resultType.value = props.resultInfo.path;
    mainText.value = props.resultInfo.state;
    resultInfo.value = props.resultInfo.resMsg;
  }
})
</script>

<style scoped></style>