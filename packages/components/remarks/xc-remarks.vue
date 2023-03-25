<!-- 备注组件 -->
<template>
  <div :style="{color:textColor}" class="remarks">
    <div>{{title}}：</div>
    <p class="item" v-for="(item,index) in contentList" :key="index">
      {{ item.text }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const { textColor, title, contentList } = defineProps({
  textColor: {
    type: String,
    default: '#BCBEC1'
  },
  title: {
    type: String,
    default: '备注'
  },
  contentList: {
    type: Array,
    default: []
  },
})

</script>

<style lang="less" scoped>
.remarks {
  padding: 10px;
  .item{
    margin-bottom: 10px;
    // 首行缩进
    // text-indent: 2em;
  }
}
</style>