<template>
  <!-- 搜索组件 -->
  <van-search background="none" v-model="value" v-bind="$attrs" placeholder="请输入搜索关键词" />
  <div class="content" v-show="value">
    <div class="item" v-for="(ele, index) in item" :key="index" @click="details(ele)">
      <div class="title">
        <van-tag v-if="ele.iconTitle" class="icon" size="medium" color="#1989ff1a" text-color="#1E90FF">{{ ele.iconTitle
        }}</van-tag>
        <span class="text">{{ ele.address }}</span>
        <p class="info">{{ ele.info }}</p>
      </div>
      <van-icon name="arrow" size="20" color="#999" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch, } from 'vue'
const { modelValue, item } = defineProps({
  modelValue: {
    default: ""
  },
  item: {
    type: Array,
    default: []
  }
})

const value = ref(modelValue);

let timer = null;

// 向父组件发射事件
const emit = defineEmits(["on-details", "update:modelValue", "on-search"]);
const details = (ele) => {
  emit("on-details", ele);
}

watch(value, (newValue) => {
  emit('update:modelValue', newValue);
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    emit('on-search');
  }, 500)
})

</script>

<style lang="less" scoped>
.content {
  height: calc(100% - 55px);
  background-color: #fff;

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 20px 0;
    margin-left: 20px;
    border-bottom: 1px solid #EEE;

    .title {
      .text {
        font-size: 13px;
        font-weight: bold;
      }

      .icon {
        margin-right: 10px;
      }
    }

    .info {
      margin-top: 8px;
      color: #999;
    }
  }
}

:deep(.van-search__content) {
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
}
</style>
