<template>
  <div class="home">
    <ul>
        <li @click="demoClick($event,'buttonDemo')">button 按钮</li>
        <li @click="demoClick($event,'inputmoneyDemo')">金额输入框</li>
        <li @click="demoClick($event,'basicInputDemo')">basicInput 输入</li>
        <li @click="demoClick($event,'dialogDemo')">dialog弹窗</li>
        <li @click="demoClick($event,'detailCardDemo')">明细卡片</li>
        <li @click="demoClick($event,'stepDemo')">步骤条</li>
        <li @click="demoClick($event,'dynamicFormDemo')">动态表单</li>
        <li @click="demoClick($event,'downAccount')">账号选择下拉框</li>
        <li @click="demoClick($event,'resultPageDemo')">resultPage 结果页面</li>
        <li @click="demoClick($event,'selectHeadDemo')">查询头部</li>
        <!--<li @click="demoClick($event,'dropDownMenuDemo')">下拉菜单</li>-->
        <li @click="demoClick($event,'fieldItemDemo')">表单输入框</li>
        <li @click="demoClick($event,'searchDemo')">search 搜索页面</li>
        <li @click="demoClick($event,'searchCondition')">条件查询</li>
        <li @click="demoClick($event,'remarksDemo')">remarks 备注页面</li>
        <!-- <li @click="demoClick($event,'dateRange')">时间范围</li> -->
        <li @click="demoClick($event,'checkboxProtocol')">复选框选择协议</li>
    </ul>
  </div>
  <!-- remarks -->
</template>

<script setup name="home">
import { onMounted } from "vue"
import {useRouter, useRoute} from "vue-router"

const router = useRouter()
const route = useRoute()
console.log(route)

const demoClick = (event, demoName) => {
  // console.log(event.target);
  document.querySelector(".active").classList.remove("active");
  event.target.classList.add("active");
  router.push({name: demoName});
}
const activeJudge = (routeName) => {
  let val = routeName;
  let index = 0;
  switch(val) {
    case 'buttonDemo':
      index = 0
      break;
    case 'inputmoneyDemo':
      index = 1
      break;
    case 'basicInputDemo':
      index = 2
      break;
    case 'dialogDemo':
      index = 3
      break;
    case 'detailCardDemo':
      index = 4
      break;
    case 'stepDemo':
      index = 5
      break;
    case 'dynamicFormDemo':
      index = 6
      break;
    case 'downAccount':
      index = 7
      break;
    case 'dropDownMenuDemo':
      index = 8
      break;
    case 'fieldItemDemo':
      index = 9
      break;
    case 'searchDemo':
      index = 10
      break;
    case 'searchCondition':
      index = 11
      break;
    case 'remarksDemo':
      index = 12
      break;
  }
  return index
}
onMounted(() => {
  setTimeout(() => {
    let index = activeJudge(route.name)
    document.querySelectorAll('li')[index].classList.add("active");
  }, 100)

})
</script>

<style scoped>
  .active {
    color: #1989fa;
    font-weight: 600;
  }
  li:not(.active):hover {
    color: #3293f4;
  }
  .home{
    width: 300px;
    overflow-y: scroll;
    height: 100%;
    float: left;
  }
  .home::-webkit-scrollbar {
    display: none;
    width: 0!important;
  }
  ul li {
    cursor: pointer;
    height: 70px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
