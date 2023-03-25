<script setup>
    import { ref,reactive } from "vue";

    const fileList = ref([
      { url: "https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg" },
      { url: "https://cloud-image", isImage: true },
    ]);
    let count = reactive(1);

    const afterRead = (file) => {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    };

    function increaseCount(n) {
      console.log(n);
    };
</script>

<template>
  <van-divider>按钮组件</van-divider>
  <xc-button @click="increaseCount" text="大按钮" loading-text="加载中..." loading></xc-button>
  <xc-button text="单色按钮"  plain></xc-button>
  <van-space direction="vertical" fill>
    <van-divider>按钮组件</van-divider>
    <xc-button @click="increaseCount" text="大按钮" block></xc-button>
    <xc-button text="单色按钮" block plain></xc-button>
    <xc-button text="小按钮" size="small"></xc-button>
    <xc-button text="mini按钮" size="mini"></xc-button>
    <van-divider>图片上传组件</van-divider>
    <xc-uploader
      :maxCount="9"
      v-model="fileList"
      :after-read="afterRead"
    ></xc-uploader>
    <van-divider>金额输入框</van-divider>
    <xc-inputmoney :money="123333"></xc-inputmoney>
  </van-space>

  <!-- <xc-result-page 
    :resultInfo="resultInfo"
    text="关闭"
    @on-confirm="returnEn"></xc-result-page> -->
</template>
<!-- <script setup>
import { reactive, } from "vue";

// 成功
/* let resultInfo = reactive({
  "path": "success",
  "resCode": "BTE0000000",
  "state": "待复核"
  // "flowNo": "102022110710006881",
}) */
// 待复核
/* let resultInfo = reactive({
  "path": "success",
  "resCode": "BTE0000000",
  "state": "待复核"
  // "flowNo": "102022110710006881",
}) */

// 待审核
let resultInfo = reactive({
  "path": "success",
  "state": "待审核",
  "resultMsg": [
    { key: "金额",value: "19999"},
    { key: "付款人账号",value: "6212 1322 4231 8898"},
    { key: "流水号",value: "102022110710006881"},
    { key: "操作员",value: "张三"},
  ]
})

// 失败
/* let resultInfo = reactive({
  "path": "error",
  "state": "提交失败",
  "resMsg": "对不起，您暂不符合我行贷款申请条件"
}) */
// 已提交
/* let resultInfo = reactive({
  "path": "wait",
  "state": "已提交",
  "resMsg": "您的贷款申请已提交，请稍后申请结果"
}) */

// console.log('信息',resultInfo.path);
const returnEn = () => {
  console.log('返回页面');
}
</script> -->

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
