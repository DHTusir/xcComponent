<template>
  <div class="demoWrap">
    <div class="describeBox">

            <xc-showCodeCard headerText="xcSelectHead基本用法" :textFilePath="filePath1">
              <template v-slot:describe>
                 <p>该组件可用于设置手机常用的查询头部，可通过设置属性<code>selectList</code>来渲染查询模块,该属性为一个数组，可设置多个具体的查询内容，也可进行自定义，进行自定义时需指明插槽名称。
                 </p>
                <p> 可通过设置属性<code>@rightSearchClick</code>来设置点击右边图标的方法
                </p>
              </template>
            </xc-showCodeCard>
      <xc-showCodeCard headerText="不展示右边筛选图标" :textFilePath="filePath2">
        <template v-slot:describe>
          <p>右边筛选图标默认显示，可通过设置<code>rightSearchWidth</code>设置右侧宽度，通过<code>rightSearchTitle</code>设置右侧展示title。可通过设置属性<code>showRightIcon</code>不展示右边筛选图标。</p>
        </template>
      </xc-showCodeCard>
      <xc-showCodeCard headerText="设置label" :textFilePath="filePath3">
        <template v-slot:describe>
          <p>可通过设置属性<code>label</code>来设置label，label宽度默认15rem,可通过<code>labelWidth</code>进行设置</p>
        </template>
      </xc-showCodeCard>
      <xc-showCodeCard headerText="自定义插槽" :textFilePath="filePath4">
        <template v-slot:describe>
          <p>该可通过设置属性<code>selectList</code>中每一个查询对象的<code>type</code>属性为slot进行自定义插槽，进行自定义时需指明插槽名称，可通过查询对象的<code>slotName</code>来指定</p>
        </template>
      </xc-showCodeCard>

      <h3>xcSelectHead Props</h3>
      <xc-tableCode border :columns="propColumns" :content="propTableData"></xc-tableCode>
      <br/>
      <br/>
      <h3>xcSelectHead Events</h3>
      <xc-tableCode border :columns="eventColumns" :content="eventTableData"></xc-tableCode>
    </div>
    <div class="demoBox1"></div>
    <div class="demoBox">
      <div class="phoneHeader">
        <van-nav-bar
            title="查询头部"
            left-arrow
        />
      </div>
      <div class="phoneContent">
        <VanDivider>基础用法</VanDivider>
        <xc-selectHead :selectList="selectList" @rightSearchClick="rightSearchClick"></xc-selectHead>
        <van-popup
            v-model:show="showTimeSelect"
            position="bottom"
            round
            :style="{ height: '50%' }"
        >
          <van-date-picker
              title="选择日期"
              :max-date="new Date()"
              @confirm="confirmDate"
          />
        </van-popup>
        <van-action-sheet v-model:show="showAccSelect"  title="选择账户" :actions="actions" @select="onSelect" />
        <van-action-sheet v-model:show="show" title="标题">
          <div style=" padding: 16px 16px 160px;">
            <xc-search-condition v-model:searchData="searchData" :searchOptions="searchOptions"></xc-search-condition>
          </div>
        </van-action-sheet>

        <VanDivider>不展示右边筛选图标</VanDivider>
        <xc-selectHead :selectList="selectList1" :showRightIcon="showrightIcon"></xc-selectHead>
        <van-action-sheet v-model:show="showTermList"  title="选择期限" :actions="termList" @select="onSelectTermList" />
        <van-action-sheet v-model:show="showMoneyList"  title="选择金额" :actions="moneyList" @select="onSelectMoneyList" />


        <VanDivider>设置label</VanDivider>
        <xc-selectHead label="选择账户" labelWidth="16rem" :selectList="selectList2" @rightSearchClick="rightSearchClick"></xc-selectHead>

        <van-action-sheet v-model:show="showAccList"  title="选择账户"  :actions="actions1" @select="onAccList" />

        <VanDivider>自定义插槽</VanDivider>
        <xc-selectHead :selectList="selectList3" :showRightIcon="showrightIcon">
          <template #myslot>
            <div style="padding-right: 32px">
              <van-tag type="success" size="large" >自定义插槽</van-tag>
            </div>
          </template>

        </xc-selectHead>
      </div>
    </div>
  </div>

</template>

<script setup>
import {reactive, ref} from "vue";
const filePath1 = ref('static/views/selectHeadDemo/selectHeadDemo1.txt')
const filePath2 = ref('static/views/selectHeadDemo/selectHeadDemo2.txt')
const filePath3 = ref('static/views/selectHeadDemo/selectHeadDemo3.txt')
const filePath4 = ref('static/views/selectHeadDemo/selectHeadDemo4.txt')
const showTimeSelect =ref(false);
const showAccSelect =ref(false);
const showAccList =ref(false);
const showTermList =ref(false);
const showMoneyList =ref(false);
const show =ref(false);
const confirmDate=({selectedValues})=>{
  let time=selectedValues.join('-');
  selectList[0].title=time;
  showTimeSelect.value=false;
}
const actions = [
  { name: '全部账户' },
  { name: '借记卡8362' },
  { name: '借记卡8888' },
  { name: '借记卡6666' },
];
const termList = [
  { name: '半年' },
  { name: '一年' },
  { name: '三年' },
  { name: '不限期限' },
];
const moneyList = [
  { name: '10.000.00' },
  { name: '20.000.00' },
  { name: '50.000.00' },
  { name: '不限金额' },
];

const actions1 = [
  { name: '6212136666668855' },
  { name: '6212136666668123' },
  { name: '6212136666668324' },
];
const onAccList=(action)=>{
  selectList2[0].title=action.name;
  showAccList.value = false;
}
const onSelect=(action)=>{
  selectList[1].title=action.name;
  showAccSelect.value = false;
}
const rightSearchClick=()=>{
  show.value=true;
}
const  onSelectTermList=(action)=>{
  selectList1[0].title=action.name;
  showTermList.value=false;
}
const  onSelectMoneyList=(action)=>{
  selectList1[1].title=action.name;
  showMoneyList.value=false;
}
const selectList = reactive([
  {title: '2023-03-04',click: () => {
      showTimeSelect.value=true;
    }},
  {
    title: '全部账户', click: () => {
      showAccSelect.value=true;
    }
  }])
const selectList1 = reactive([
  {title: '不限期限',click: () => {
      showTermList.value=true;
    },},
  {
    title: '不限金额', click: () => {
      showMoneyList.value=true;
    },
  }])
const selectList2 = reactive([
  {
    title: '6212136666668855', click: () => {
      showAccList.value=true;
    },
  }])
const selectList3 = reactive([
  {
    title: '6212136666668855', width:'20rem',click: () => {
      showAccList.value=true;
    },

  },
  {
    type: 'slot',slotName:'myslot'},])

const showrightIcon = ref(false);
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
const propTableData = ref([
  {
    attrName: "label",
    explain: "设置左侧标签",
    type: "string",
    defaultValue: "",
  },
  {
    attrName: "labelWidth",
    explain: "菜单展开方向，可选值为up",
    type: "String",
    defaultValue: "15rem",
  },
  {
    attrName: "showRightIcon",
    explain: "是否展示右侧查询icon",
    type: "Boolean",
    defaultValue: "true",
  },
  {
    attrName: "rightSearchTitle",
    explain: "右侧查询标题",
    type: "string",
    defaultValue: "筛选",
  },
  {
    attrName: "rightSearchWidth",
    explain: "右侧查询宽度",
    type: "string",
    defaultValue: "22rem",
  },
  {
    attrName: "selectList",
    explain: "查询列表，可设置多个查询对象，每个对象的属性有title标题，click 点击事件，width 宽度，如果需要自定义可设置type属性为slot，并指定slotName",
    type: "Array",
    defaultValue: "[]",
  }
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
    eventName: "rightSearchClick",
    explain: "点击右侧icon触发",
    returnValue: ""
  },
])



  const searchData=reactive({
          city:'Hangzhou',
          country:'zhonguo',
          bz:'all',//币种
          dateStart:'2020-01-11',//date-start
          dateEnd:'2022-03-17'//date-end
      })
  const columns = [
        { text: '杭州', value: 'Hangzhou' },
        { text: '宁波', value: 'Ningbo' },
        { text: '温州', value: 'Wenzhou' },
        { text: '绍兴', value: 'Shaoxing' },
        { text: '湖州', value: 'Huzhou' },
    ];
  const columns1 = [
    { text: '中国', value: 'zhonguo' },
    { text: '韩国', value: 'hanguo' },
    { text: '印度', value: 'yindu' },
    { text: '美国', value: 'meiguo' },
    { text: '加拿大', value: 'jianada' },
  ];
  const columns2 = [
    { text: '全部', value: 'all' },
    { text: '美元', value: 'my' },
    { text: '丹朗', value: 'dm' },
    { text: '日元', value: 'ry' },
    { text: '瑞典克朗', value: 'rdkl' },
    { text: '人民币', value: 'rmb' },
    { text: '澳元', value: 'ay' },
    { text: '欧元币', value: 'oyb' },
    { text: '澳币', value: 'ab' },
    { text: '新加坡元', value: 'xjpy' },
    { text: '人民币跨境', value: 'rmbgj' },
    { text: '加拿大元', value: 'jndy' },
    { text: '英镑', value: 'yb' },
    { text: '挪朗', value: 'll' },
    { text: '台币', value: 'tb' },
    { text: '瑞士法郎', value: 'rsfl' },
    { text: '港币', value: 'gb' },
    { text: '新西兰元', value: 'xxly' },
  ];
  const searchOptions=[
          {
              label:'城市',
              propName:'city',
              type:'select',
              placeholder:'选择城市',
              columns:columns,
          },
          {
              label:'国家',
              propName:'country',
              type:'select',
              placeholder:'选择国家',
              columns:columns1,
          },
          {
              label:'币种',
              propName:'bz',
              type:'selectBtn',
              columns:columns2,
          },
          {
              label:'自定义交易日期',
              propName:['dateStart','dateEnd'],
              type:'dateRange',
          }
      ]
      
</script>

<script>
export default {
  name: "selectHeadDemo"
}
</script>

<style scoped>

</style>
