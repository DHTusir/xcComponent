<template>
    <div class="demoWrap">
        <div class="describeBox">
            <xc-showCodeCard headerText="Button按钮 介绍" :textFilePath="filePath">
                <template v-slot:describe>
                    <h2>按钮用于触发一个操作，如提交表单，支持点击( click )与触摸( touchstart )。<br/>
                    按钮支持 default、primary、info、success 四种类型，默认为 default。<br/>
                    按钮支持 large、middle、small、mini 四种尺寸，默认为 small。<br/>
                    可自定义按钮图标，传入图标名称或图片链接即可<br/>
                    不可用状态( disabled )及加载状态( loading )<br/>
                    自定义宽度( width )、高度( height )、圆角( radius )</h2>
                </template>
            </xc-showCodeCard>
            <h3>Button props</h3>
            <xc-tableCode border :columns="propColumns" :content="propTableData"></xc-tableCode>
            <br />
            <h3>Button events</h3>
            <xc-tableCode border :columns="eventColumns" :content="eventTableData"></xc-tableCode>
        </div>
        <div class="demoBox1"></div>
        <div class="demoBox">
            <div class="phoneHeader">
                <van-nav-bar title="Button 按钮" left-arrow />
            </div>
            <div class="phoneContent">   
                <!-- <xc-button type="default">默认按钮</xc-button>  
                <van-button>默认按钮</van-button>           -->
                <!-- <van-divider>按钮组件</van-divider>               -->
                <span class="title-divider">按钮类型</span>  
                <van-space direction="vertical" fill>
                <div class="showTwoBtn">
                  <xc-button type="default">默认按钮</xc-button>
                  <xc-button type="primary">主要按钮</xc-button>
                </div>
                <div class="showTwoBtn">
                  <xc-button type="info">菜单按钮</xc-button>
                  <xc-button type="success">成功按钮</xc-button>
                </div>
                <span class="title-divider">按钮尺寸</span>                
                <!-- <van-divider>default</van-divider> -->
                <xc-button size="large">大按钮</xc-button>
                <div style="display: flex; flex-wrap: nowrap; justify-content: space-between;">                  
                  <xc-button size="middle">中等按钮</xc-button>
                  <xc-button size="small">默认按钮</xc-button>
                  <xc-button size="mini">迷你</xc-button> 
                </div>

                <!-- <van-divider>primary</van-divider>
                <xc-button type="primary" size="large">大按钮</xc-button>                
                <div style="display: flex; flex-wrap: nowrap; justify-content: space-between;">                  
                  <xc-button type="primary" size="middle">中等按钮</xc-button>
                  <xc-button type="primary" size="small">默认按钮</xc-button>
                  <xc-button type="primary" size="mini">迷你</xc-button>
                </div>


                <van-divider>info</van-divider>
                <xc-button type="info" size="large">大按钮</xc-button>                
                <div style="display: flex; flex-wrap: nowrap; justify-content: space-between;">                  
                  <xc-button type="info" size="middle">中等按钮</xc-button>
                  <xc-button type="info" size="small">默认按钮</xc-button>
                  <xc-button type="info" size="mini">迷你</xc-button>
                </div>
                <van-divider>success</van-divider>
                <xc-button type="success" size="large">大按钮</xc-button>                
                <div style="display: flex; flex-wrap: nowrap; justify-content: space-between;">                  
                  <xc-button type="success" size="middle">中等按钮</xc-button>
                  <xc-button type="success" size="small">默认按钮</xc-button>
                  <xc-button type="success" size="mini">迷你</xc-button>
                </div> -->

                <span class="title-divider">禁用状态</span>
                <div  class="showTwoBtn">
                  <xc-button type="default" disabled>默认按钮</xc-button>
                  <xc-button type="primary" disabled>主要按钮</xc-button>
                </div>
                <div  class="showTwoBtn">
                  <xc-button type="info" disabled>菜单按钮</xc-button>
                  <xc-button type="success" disabled>成功按钮</xc-button>
                </div>                               
                <span class="title-divider">加载中...</span>
                <div  class="showTwoBtn">
                  <xc-button type="default"  loading loading-text="加载中..." icon="src/assets/images/alone1.gif"></xc-button>
                  <xc-button type="primary" loading  icon="src/assets/images/alone1.gif"></xc-button>
                </div>
                <div  class="showTwoBtn">
                  <xc-button type="info" loading  ></xc-button>
                  <xc-button type="success"  loading ></xc-button>
                </div>                                                                
                <span class="title-divider">图标</span>
                <div style="display: flex; flex-wrap: nowrap; justify-content: space-between;">
                  <xc-button icon="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png">user-active</xc-button>
                  <xc-button icon="src/assets/images/alone1.gif">alone1</xc-button>
                  <xc-button icon="src/assets/images/Vector1.png">Vector1</xc-button>
                </div>
                </van-space>
                <span class="title-divider">平铺</span>   
                <div style="display: flex; flex-wrap: nowrap; justify-content: space-between;">
                  <xc-button type="default" size="middle">继续汇购</xc-button>
                  <xc-button type="primary" size="middle">完成</xc-button>
                </div>
                <span class="title-divider">事件</span>
                <div  class="showTwoBtn">
                  <xc-button @click="increaseCount" text="点击事件"></xc-button>
                  <xc-button @touchstart="increaseCount" text="触摸事件"></xc-button>
                </div>  
                <span class="title-divider">圆角</span>
                <!-- <xc-button type="default" size="large" radius="25px" >默认按钮</xc-button> -->
                <xc-button type="primary" size="large" radius="25px">主要按钮</xc-button>
                <!-- <xc-button type="info" size="large" radius="25px">菜单按钮</xc-button> -->
                <!-- <xc-button type="success" size="large" radius="25px">成功按钮</xc-button> -->
            </div>
        </div>
    </div>
</template>
<script setup name="buttonDemo">
    import { ref } from 'vue'
    const filePath = ref('static/views/buttonDemo/buttonDemoCode.txt')
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
          attrName: "width",
          explain: "可以设置宽度（rem）",
          type: "String",
          defaultValue: "空",
        },
        {
          attrName: "height",
          explain: "可以设置高度（rem）",
          type: "String",
          defaultValue: "空",
        },
        {
          attrName: "radius",
          explain: "设置圆角（rem）",
          type: " String",
          defaultValue: "4rem",
        },
        {
          attrName: "type",
          explain: "设置按钮类型 可选值为 default primary info success",
          type: "String",
          defaultValue: "default",
        },
        {
          attrName: "disabled",
          explain: "设置输入框为禁用状态",
          type: "Boolean",
          defaultValue: "false",
        },
        {
          attrName: "loading",
          explain: "设置输入框为loading状态",
          type: "Boolean",
          defaultValue: "false",
        },
        {
          attrName: "text",
          explain: "设置输入框的文本",
          type: "String",
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
            eventName: "click",
            explain: "点击按钮，且按钮状态不为加载或禁用时触发",
            returnValue: "无",
        },
        { 
            eventName: "touchstart", 
            explain: "开始触摸按钮时触发", 
            returnValue: "无" 
        },        
    ])
    const increaseCount = () =>{
        alert("你点击了我！");
    }
</script>
<style scoped lang="less">
  .phoneContent{
    padding: 16px;
    .showTwoBtn{
      display: flex; 
      flex-wrap: nowrap; 
      justify-content: space-between;
      padding-right: 60px;
    }
    .title-divider{
      padding: 16px 0px;
      display: flex;
      align-items: center;
      margin: var(--van-divider-margin);
      color: var(--van-divider-text-color);
      font-size: var(--van-divider-font-size);
      line-height: var(--van-divider-line-height);
      border-color: var(--van-divider-border-color);
      border-style: solid;      
      border-width: 0;
      margin: 0;
      color: #969799;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;    
    }
  }
</style>
