<!-- 
<xc-ResultPage
      :resultInfo="resultInfo"
      resultTopText="交易成功"
      okBtnText="查看回单" //okBtnText传值不为"",则显示该按钮，按钮名称为所传值，点击该按钮会触发ok事件
      @ok="showInfo"    //和okBtnText配合使用
      backBtnText="再转一笔" // 同okBtnText,点击时触发back事件
      @back="back"
    ></xc-ResultPage>
  -->
<template>
  <div>
    <div class="resultPage">
      <div :class=" mainText === '交易成功' ? 'resultPage-top bgc' : 'resultPage-top'">
        <div>
          <div style="display: flex; justify-content: center">
            <div class="resultPage-top-img">
              <img v-if="type == 'success'" src="./img/success.png" />
              <img v-if="type == 'wait'" src="./img/wait.png" />
              <img v-if="type == 'error'" src="./img/error.png" />
            </div>
          </div>
          <!-- 主标题 -->
         <template v-if="mainText === '交易成功' || mainText === '提交失败'">
           <div v-if="mainText === '交易成功'" class="top-main-text active">{{ mainText }}</div>
           <div v-else class="top-main-text fail">{{ mainText }}</div>
         </template>
         <template v-else>
          <div class="top-main-text">{{ mainText }}</div>
         </template>
          <!-- 副标题 -->
          <template v-if="mainText !== '交易成功'">
            <div v-if="type === 'success'" class="top-assistant-text">时间：{{ assistantText }}</div>
            <div v-else class="top-assistant-text"> {{ assistantText || resultInfo.resMsg}} </div>
          </template>
          <template v-else>
            <div class="money"> {{ assistantText}} </div>
          </template>
        </div>
      </div>
      <div>
        <div v-if="mainText == '交易成功'">
         <div class="content">
          <div class="item" v-for="(ele, index) in list" :key="index" @click="details(ele)">
            <div class="title">
              <span class="text">{{ ele }}</span>
            </div>
            <van-icon name="arrow" size="20" color="#999" />
          </div>  
          </div>
        </div>
        <div v-if="mainText == '待审核'" class="resultPage-cneter">
            <div class="center-info">
            <xc-detail-card :detailInfo="resultInfo"></xc-detail-card>
            </div>
        </div>
        <div class="resultPage-footer">
          <template v-if="okBtnText != '' || backBtnText != ''">
            <!-- <button v-show="backBtnText != ''" @click="back">
              {{ backBtnText }}
            </button> -->
            <xc-button v-show="okBtnText != ''"
              @click="ok"
              :text="okBtnText"
              size="large"
              style="margin: 0 20px;"
              :style="backBtnText ? 'margin-left: 24px;' : ''" block></xc-button>
            <!-- <xc-Button
              v-show="backBtnText != ''"
              type="info"
              size="middle"
              @click="back"
              :text="backBtnText"
            ></xc-Button>
            <xc-Button
              v-show="okBtnText != ''"
              size="middle"
              :style="backBtnText ? 'margin-left: 24px;' : ''"
              @click="ok"
              :text="okBtnText"
            ></xc-Button> -->
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits,reactive,onMounted,ref } from "vue";
const {resultInfo,mainText,assistantText,okBtnText,backBtnText,type} = defineProps({
  //  //   {key:"交易流水号",value:"23743286473826432"}或者[{key:"交易流水号",value:"3242424242"},{key:"key2",value:"value2"},...]
  resultInfo: {
    type: Object,
  },
  // 交易成功
  mainText: {
    type: String,
    default: "",
  },
  // 副标题
  assistantText: {
    type: String,
    default: "",
  },
  // 确定按钮文字
  okBtnText: {
    type: String,
    default: "",
  },
  // 返回按钮文字
  backBtnText: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    validator(value) {
      return ["success", "wait", "warn", "error"].indexOf(value) !== -1;
    },
    default: "success",
  },
});

// 成功页面展示
const list = reactive(['转账记录','继续转账','下载回单']);

// 向父组件发射事件
const emit = defineEmits(["on-back", "on-ok","on-details"]);
// 返回事件
// const back = () => {
//   emit("on-back");
// };
// 确定/完成事件
const ok = () => {
  emit("on-ok");
};
const details = (item) => {
  emit("on-details",item)
}
</script>

<style lang="less" scoped>

.resultPage {
  /* width: 600px; */
  align-items: center;
  /* padding: 64px 0px 0px; */
  position: relative;
  margin: 0 auto ; 
}
.resultPage-top {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 20px 0;
  margin-bottom: 10px;
  .money {
    font-size: 28px;
    font-weight: bold;
  }
}
.bgc {
      // background-color: #fff;
  }
.resultPage-top-img {
  display: flex;
  justify-content: center;
  width: 60px;
  height: 60px;
}
.resultPage-top-img img{
  width: 100%;
  height: 100%;
}
.top-main-text {
  display: flex;
  justify-content: center;
  height: 27px;
  font-family: "Source Han Sans CN";
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #333333;
  margin-top: 10px;
  // margin-bottom: 10px;
}
.active {
  color: green;
}
.fail {
  // color: red;
  color: #F9C922;
}
.top-assistant-text {
  display: flex;
  justify-content: center;
  height: 21px;
  font-family: "Source Han Sans CN";
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #666666;
  margin-top: 10px;
}
.resultPage-cneter {
  position: relative;
  padding: 10px;
}
.center-info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 10px;
  padding-bottom: 10px;
  /* background: #f8f8f8; */
  background: #fff;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  border-radius: 3px;
}
.info-error {
  display: flex;
  justify-content: center;
  background: #f4f4f4;
  box-shadow: none;
}
.center-info-top {
  position: absolute;
  height: 16px;
  left: 0px;
  top: 0px;
  background: linear-gradient(180deg, #bbc7e0 0%, #f6f8fb 93.75%);
}
.center-info-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 21px;
  padding: 0 15px;
  font-family: "Source Han Sans CN";
  line-height: 21px;
  margin-top: 10px;
}

.info-row-label {
  font-weight: 400;
  font-size: 14px;
  text-align: right;
  color: #666666;
}
.info-row-value {
  font-weight: 400;
  font-size: 14px;
  color: #333333;
  margin-left: 16px;
}
.resultPage-footer {
  margin-top: 64px;
  display: flex;
  justify-content: center;
}

.content {
  height: calc(100% - 55px);
  background-color: #fff;

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 15px 15px 0;
    margin-left: 20px;
    border-bottom: 1px solid #EEE;
    .title {
      .text {
        font-size: 15px;
      }
    }
  }
}
body .detailCard {
  padding: 0;
}
</style>
