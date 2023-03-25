<template>
    <div class="tableBox">
      <van-row>
        <van-col v-for="(item, cindex) in columns" :span="item.key == 'explain' ? 12 : 12/(columns.length - 1)" :key="cindex+item.key">{{ item.title }}</van-col>
      </van-row>
      <van-row v-for="(item1, cindex1) in content" :key="cindex1">
        <van-col v-for="(item2, cindex2) in item1" :span="cindex2 == 'explain' ? 12 : 12/(columns.length - 1)" :key="cindex2">{{ item2 }}</van-col>
      </van-row>
    </div>
  </template>
  
  <script setup name="xc-tableCode">
  import { defineProps } from "vue";
  
  const props = defineProps({
      columns: { // table头数据
        type: Array,
        default: []
      },
      content: { // 数据
        type: Array,
        default: []
      }
  });
  
  
  </script>
  
  <style scoped>
  .tableBox {
    width: 100%;
    margin: 16px;
    background: #fff;
    border-radius: 20px;
  }
  :deep(.van-row) {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }
  </style>