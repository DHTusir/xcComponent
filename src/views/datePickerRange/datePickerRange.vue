<template>
    <div class="demoWrap">
          <div class="describeBox">
              <xc-showCodeCard headerText="基础用法" :textFilePath="filePath">
                  <template v-slot:describe>
                      <p>传入账号columns，选择账号之后会调用setCurBal函数来设置币种和余额</p>
                  </template>
              </xc-showCodeCard>
          </div>
          <div class="demoBox1"></div>
          <div class="demoBox">
              <div class="phoneHeader">
                  <van-nav-bar
                      title="时间范围选择"
                      left-arrow
                      />
              </div>
              <div class="phoneContent">
                  <div style="marginTop:3em"><xc-date-range v-model:dateStart="dateStart" v-model:dateEnd="dateEnd"></xc-date-range></div> 
              </div>
          </div>
      </div>
  </template>
  
  <script setup>
      import {ref,reactive} from "vue"
      const filePath = ref('static/views/datePickerRange/datePickerRange.txt')
      let dateStart=ref('2022/01/01')
      let dateEnd=ref('2022/03/01')  
  </script>
  
  <style>
  
  </style>