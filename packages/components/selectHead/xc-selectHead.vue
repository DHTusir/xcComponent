<template>
  <div class="xc-select">
    <span class="label" v-if="label" :style="{width:labelWidth}">{{ label }}</span>
    <template v-if="selectList.length>0">
      <template v-for="(item,index) in selectList" :key="index" >
        <template v-if="item.type=='slot'">
          <slot :name="item.slotName"></slot>
        </template>
        <template v-else>
          <van-cell @click="()=>{item.click&&item.click()}" :style="{width:item.width}"  >
            <template #title>
              <span class="title" style="padding: 0 0.8rem;">{{ item.title }}</span>
            </template>
          </van-cell>
        </template>
      </template>
    </template>

    <template v-if="showRightIcon">
      <van-cell center :style="{width: rightSearchWidth}" :value="rightSearchTitle" @click="rightSearchClick">
        <template #right-icon>
          <van-icon class="rightIcon" name="filter-o" size="1.8rem" color="#000000" style="padding-left: 0.2rem;"/>
          <img src="./Vector.svg" style="height: 7px;position: relative;top: 3px;left: -5px;">
        </template>
      </van-cell>
    </template>
  </div>
</template>

<script setup>
import {ref, useSlots, onMounted, watchEffect, defineProps, defineEmits} from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  labelWidth: {
    type: String,
    default: '15rem'
  },
  rightSearchTitle: {
    type: String,
    default: '筛选',
  },
  rightSearchWidth: {
    type: String,
    default: '22rem',
  },
  showRightIcon: {
    type: Boolean,
    default: true,
  },
  selectList: {
    type: Array,
    default: [],
  }
})
const emit = defineEmits(['rightSearchClick'])
const slot = useSlots()
const label = ref(props.label)
const labelWidth = ref(props.labelWidth)
const rightSearchTitle = ref(props.rightSearchTitle)
const rightSearchWidth = ref(props.rightSearchWidth)
const showRightIcon = ref(props.showRightIcon)
const selectList = ref(props.selectList)
const rightSearchClick = () => {
  emit("rightSearchClick")
}
watchEffect(()=>{
  showRightIcon.value=props.showRightIcon;
})
watchEffect(()=>{
  label.value=props.label;
})
watchEffect(()=>{
  labelWidth.value=props.labelWidth;
})
watchEffect(()=>{
  rightSearchWidth.value=props.rightSearchWidth;
})
watchEffect(()=>{
  rightSearchTitle.value=props.rightSearchTitle;
})
watchEffect(()=>{
  selectList.value=props.selectList;
})
onMounted(() => {
  console.log(slot)
})

</script>
<script>
export default {
  name: "xc-selectHead"
}
</script>

<style scoped lang="less">
.xc-select {
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  justify-content: space-between;

  .label {
    padding-left: 1.6rem;
    font-size: var(--van-cell-font-size);
    font-family: var(--van-base-font);
  }

  :deep(.van-cell__value) {
    color: var(--van-cell-text-color);
  }

  .title::after {
    position: absolute;
    margin-top: 0.8rem;
    margin-left: 0.6rem;
    content: ' ';
    border: 0.6rem solid transparent;
    border-top: 1rem solid #333333;
  }
}

</style>
