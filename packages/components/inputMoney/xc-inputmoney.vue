<template>
  <div :class="disabled ? 'inputMoney disabled' : 'inputMoney' ">
    <div class="input">
      <span class="logo">¥</span>
      <van-field :disabled="props.disabled" ref="moneyRef" v-model="tempValue" @blur="moneyBlur" @update:model-value="moneyChange" @focus="focus($event)">
        <template #button>
          <slot name="button" class="slot"></slot>
        </template>
      </van-field>
      <div class="mask"></div>
    </div>

    <div class="cny">
      <span>{{props.label}}</span>
      {{CNY}}
    </div>
  </div>
</template>

<script setup name='xc-inputmoney'>
import { ref, defineProps, defineEmits, watch, onMounted, getCurrentInstance, nextTick } from "vue";
import { useCustomFieldValue } from '@vant/use';
import utils from '../../js/utils.js';

const props = defineProps({
    money: { // 金额
      type: [String, Number],
      default: ''
    },
    amtIntLength: { // 最大输入位数
      type:Number,
      default:14
    },
    size: { // 大小
      type: String,
      default: 'large'
    },
    width: String,
    label: { // label文字
        type: String,
        default: ''
    },
    disabled: { // 是否禁用
      type: Boolean,
      default: false,
    },
});

onMounted(() => { // 初始化
  if(tempValue.value[0] == '-') {
    CNY.value = '负' + utils.numToCny(tempValue.value.replace(/,/g, "").split('-')[1]);
  } else {
    CNY.value = utils.numToCny(tempValue.value.replace(/,/g, ""));
  }
  formatCNY()
})

const emit = defineEmits(['money-format'])

const instance = getCurrentInstance();

const tempValue = ref(utils.numberFormat(props.money)); // 输入框绑定值

const CNY = ref(''); // 汉字大写

const moneyRef = ref(null)

// useCustomFieldValue(() => tempValue.value);

const moneyChange = (val) => {
  console.log('------');
  // 矫正值
    nextTick(() => {
      tempValue.value = val.replace(/[^\d.]/g, "");
        if (tempValue.value.split(".").length == 1) {
        if (tempValue.value.length > props.amtIntLength) {
            tempValue.value = tempValue.value.substring(0, props.amtIntLength);
          }
        } else {
            var left = tempValue.value.split(".")[0]
            var right = tempValue.value.split(".")[1]
            if(left.length > props.amtIntLength) {
                left = left.substring(0, props.amtIntLength)
            }
            if(right.length > 2) {
              right = right.substring(0, 2)
            }
            tempValue.value = left + '.' + right
        }
    });
    // if (val !== tempValue.value) {
    //   nextTick(()=>{
    //     val = tempValue.value;
    //   })
    // }
    CNY.value = utils.numToCny(tempValue.value)
    formatCNY();
}

const formatCNY = () => { // 手动调整大写汉字
  if(CNY.value.substring(CNY.value.length-1) === "圆") {
    CNY.value = CNY.value + "整"
  }
  if(CNY.value[0] === "圆" && CNY.value.substring(CNY.value.length-1) == '分' && CNY.value.length < 4) {
    CNY.value = "零圆零角" + CNY.value[1] + "分"
  }
  if(CNY.value[0] === "圆") {
    CNY.value = "零" + CNY.value
  }
  if(CNY.value.substring(CNY.value.length-1) == '分' && CNY.value.substring(CNY.value.length-3)[0] == '圆') {
    CNY.value = CNY.value.substring(0, CNY.value.length-2) + "零角" + CNY.value.substring(CNY.value.length-2)
  }
  if(CNY.value.substring(CNY.value.length-1) === "角") {
    CNY.value = CNY.value + "零分"
  }
}

const moneyBlur = (e) => { // 失焦后格式化
  tempValue.value = utils.numberFormat(tempValue.value)
  // 格式化后的值去除掉逗号再转为大写汉字
  let cny = tempValue.value.replace(/,/g, "")
  CNY.value = utils.numToCny(cny)
  formatCNY();
  // 将格式化后的金额还有大写汉字传给父组件
  emit("money-format", tempValue.value, CNY.value);
}

const focus = (e) => { // 聚焦定位光标
  tempValue.value = tempValue.value.replace(/,/g, '')
  // 光标定位到最后
  let obj = e.srcElement;
    obj.focus();
    const len = obj.value.length;
    //光标定位要加上 setTimeOut，不然就会重新光标定位失败
    setTimeout(()=>{
        obj.selectionStart = obj.selectionEnd = len;
    },60)
}

watch( // 监听
  tempValue,
  (newVal, oldVal) => {
    if(newVal[0] == '-') {
      CNY.value = '负' + utils.numToCny(newVal.replace(/,/g, "").split('-')[1]);
    } else {
      CNY.value = utils.numToCny(newVal.replace(/,/g, ""));
    }
    formatCNY();
  }
)

watch(
  () => props.money,
  (newVal, ov) => {
    console.log('++++++++++');
    tempValue.value = utils.numberFormat(newVal);
    if(tempValue.value[0] == '-') {
      CNY.value = '负' + utils.numToCny(tempValue.value.replace(/,/g, "").split('-')[1]);
    } else {
      CNY.value = utils.numToCny(tempValue.value.replace(/,/g, ""));
    }
    formatCNY();
  }
)

</script>

<style>

</style>