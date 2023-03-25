<template>
  <div class="demoWrap">
    <div class="describeBox">

      <!--      <xc-showCodeCard headerText="fieldItem描述与用法" :textFilePath="filePath">
              <template v-slot:describe>
                &lt;!&ndash; <p>通过设置属性<code>searchOptions</code>来渲染搜索模块,通过二维数组的格式来渲染出一行两列的样式，内部组件对象目前有四种，分别是：</p> &ndash;&gt;
                fieldItem描述与用法
              </template>
            </xc-showCodeCard>-->
      <h3>xcDropdownMenu Props</h3>
      <xc-tableCode border :columns="propColumns" :content="propTableData"></xc-tableCode>
      <br/>
      <h3>DropdownItem Props</h3>
      <xc-tableCode border :columns="propColumns1" :content="propTableData1"></xc-tableCode>
      <br/>
      <h3>DropdownItem Events</h3>
      <xc-tableCode border :columns="eventColumns" :content="eventTableData"></xc-tableCode>
      <br/>
      <h3>DropdownItem Slots</h3>
      <xc-tableCode border :columns="slotColumns" :content="slotTableData"></xc-tableCode>
    </div>
    <div class="demoBox1"></div>
    <div class="demoBox">
      <div class="phoneHeader">
        <van-nav-bar
            title="下拉菜单"
            left-arrow
        />
      </div>
      <div class="phoneContent">

<!--        <xc-dropdownMenu active-color="#ee0a24"  style="padding: 16px">
          <van-dropdown-item  v-model="value1" @change="showSelect(value1)" :options="option1"></van-dropdown-item>
        </xc-dropdownMenu>
        <div style="display: flex;align-items: center;padding: 16px;background-color: #42b983">
          <xc-dropdownMenu active-color="#ee0a24"  style="width: 150px">
            <van-dropdown-item  v-model="value1" @change="showSelect(value1)" :options="option1"></van-dropdown-item>
          </xc-dropdownMenu>
          <span style="padding: 8px;color: #d6c4c4;">——</span>
          <xc-dropdownMenu active-color="#ee0a24" style="width: 150px" >
            <van-dropdown-item  v-model="value1" @change="showSelect(value1)" :options="option1"></van-dropdown-item>
          </xc-dropdownMenu>
        </div>-->




        <van-popup
            v-model:show="showBottom"
            position="bottom"
            :style="{ height: '50%' }"
        >
          <van-date-picker
              v-model="currentDate"
              title="选择日期"
              @confirm="confirmDate"
          />
        </van-popup>

        <XcSelectHead  :selectList="selectList" :showRightSearch="showRightSearch"  @rightSearchClick="rightSearch" >
          <template #select1>
            <span style="width: 8rem;padding-left: 0.8rem">---</span>
          </template>
          <template #select2>
            <span style="width: 8rem;padding-left: 0.8rem">---</span>
          </template>
        </XcSelectHead>
      </div>
    </div>
  </div>

</template>


<script setup name="dropdownMenuDemo">

import {ref} from "vue";
import XcSelectHead from "../../../packages/components/selectHead/xc-selectHead.vue";
const showRightSearch = ref(true);

const selectList=ref([{
  title:'2023-1-2',
  click:()=>{
    console.log("时间")
  }
},
  {
    type:'slot',
    slotName:'select1',
  },{
  title:'2023-2-2',
  click:()=>{
    showRightSearch.value=!showRightSearch.value;
    console.log("账号")
    console.log(showRightSearch.value)
  }
},{
    type:'slot',
    slotName:'select2',
  }])

const currentDate = ref(['2021', '01', '01']);
const value1 = ref(0);
const time = ref("2022-02-03")
const showBottom = ref(false)
const option1 = [
  {text: '2022-1-1', value: 0},
  {text: '2022-2-1', value: 1},
  {text: '2022-3-1', value: 2},
];
const switch1 = ref(false);

const showSelect = (value) => {
  console.log(value)
}
const confirmDate = ({selectedValues}) => {
  let t = selectedValues.join('-');
  time.value = t;
  showBottom.value = false;

}
const rightSearch=()=>{
  console.log('rightSearch')
}

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
])
const propColumns1 = ref([
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
])
const propTableData = ref([
  {
    attrName: "active-color",
    explain: "菜单标题和选项的选中态颜色",
    type: "string",
    defaultValue: "#1989fa",
  },
  {
    attrName: "direction",
    explain: "菜单展开方向，可选值为up",
    type: "String",
    defaultValue: "down",
  },
  {
    attrName: "z-index",
    explain: "菜单栏 z-index 层级",
    type: " number | string",
    defaultValue: "10",
  },
  {
    attrName: "duration",
    explain: "动画时长，单位秒，设置为 0 可以禁用动画",
    type: "number | string",
    defaultValue: "0.2",
  },
  {
    attrName: "overlay",
    explain: "是否显示遮罩层",
    type: "boolean",
    defaultValue: "true",
  },
  {
    attrName: "close-on-click-overlay",
    explain: "是否在点击遮罩层后关闭菜单",
    type: "boolean",
    defaultValue: "true",
  },
  {
    attrName: "close-on-click-outside",
    explain: "是否在点击外部元素后关闭菜单",
    type: "boolean",
    defaultValue: "true",
  }
])
const propTableData1 = ref([
  {
    attrName: "v-model",
    explain: "当前选中项对应的 value",
    type: "number | string",
    defaultValue: "空",
  },
  {
    attrName: "title",
    explain: "菜单项标题",
    type: "String",
    defaultValue: "当前选中项文字",
  },
  {
    attrName: "options",
    explain: "选项数组",
    type: " Option[]",
    defaultValue: "[]",
  },
  {
    attrName: "disabled",
    explain: "是否禁用菜单",
    type: "boolean",
    defaultValue: "false",
  },
  {
    attrName: "lazy-render",
    explain: "是否在首次展开时才渲染菜单内容",
    type: "boolean",
    defaultValue: "true",
  },
  {
    attrName: "title-class",
    explain: "标题额外类名",
    type: "string | Array | object",
    defaultValue: "空",
  },
  {
    attrName: "teleport",
    explain: "指定挂载的节点，等同于 Teleport 组件的 to 属性",
    type: "string | Element",
    defaultValue: "空",
  },
])
const eventColumns = ref([
  {
    title: "事件名",
    key: "eventName",
  },
  {
    title: "说明",
    key: "explain",
  },
  {
    title: "返回值",
    key: "returnValue",
  },
])
const eventTableData = ref([
  {
    eventName: "change",
    explain: "点击选项导致 value 变化时触发",
    returnValue: "event: Event"
  },
  {
    eventName: "open",
    explain: "打开菜单栏时触发",
    returnValue: "",
  },
  {
    eventName: "close",
    explain: "关闭菜单栏时触发",
    returnValue: "",
  },
  {
    eventName: "opened",
    explain: "打开菜单栏且动画结束后触发",
    returnValue: "",
  },
  {
    eventName: "closed",
    explain: "关闭菜单栏且动画结束后触发",
    returnValue: "",
  },
])
const slotColumns = ref([
  {
    title: "名称",
    key: "slotName",
  },
  {
    title: "说明",
    key: "explain",
  },

])
const slotTableData = ref([
  {
    slotName: "default",
    explain: "菜单内容",
  },
  {
    slotName: "title",
    explain: "自定义菜单项标题",
  },
])

</script>
<script>
export default {
  name: 'dropdownMenuDemo'
}
</script>

<style scoped lang="less">


</style>
