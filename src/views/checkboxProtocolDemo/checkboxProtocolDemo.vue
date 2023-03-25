<template>
    <div class="demoWrap">
        <div class="describeBox">
            <xc-showCodeCard headerText="checkboxProtocol复选框协议选择  介绍" :textFilePath="filePath">
                <template v-slot:describe>
                    <h2>复选框选择协议用于协议通知确认操作，确认同意勾选。<br/> 
                    </h2>                   
                </template>
            </xc-showCodeCard>
            <h3>checkboxProtocol props</h3>
            <xc-tableCode border :columns="propColumns" :content="propTableData"></xc-tableCode>
            <br />
            <h3>checkboxProtocol events</h3>
            <xc-tableCode border :columns="eventColumns" :content="eventTableData"></xc-tableCode>
        </div>
        <div class="demoBox1"></div>
        <div class="demoBox">
            <div class="phoneHeader">
                <van-nav-bar
                    title="checkboxProtocol"
                    left-arrow
                    />
            </div>
            <div class="phoneContent">
                <xc-checkboxProtocol :checkHtml="infoHtml" v-model="checked" @change="checkClick" label-disabled>                
                </xc-checkboxProtocol>
            </div>
        </div>
    </div>
</template>
<script setup name="checkboxProtocolDemo">
    import { ref } from 'vue'
    const filePath = ref('static/views/checkboxProtocolDemo/checkboxProtocolDemoCode.txt')   
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
          attrName: "checkHtml",
          explain: "设置协议的内容，支持绑定Html标签文本",
          type: "String",
          defaultValue: "空",
        },
        {
          attrName: "label-disabled",
          explain: "是否禁用复选框文本点击",
          type: "	boolean",
          defaultValue: "空",
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
            eventName: "change",
            explain: "当绑定值变化时触发的事件",
            returnValue: "checked: boolean",
        }      
    ])
    const infoHtml = ref(`
        本公司/单位已阅读，理解并同意银行提供的本交易
        <a style="color:#489CD8;">定期条款细则以及科创盈美元阶梯式利率定期存款条款细则</a>，
        并接受任何根据本申请进行的扣划行为。
    `)
    const checked = ref(true)
    const checkClick = () => {
        alert("选中状态："+checked.value);
    }
</script>
<style scoped lang="less">
.phoneContent{
    padding: 16px;
    background-color: #fff;    
    display: flex;
    flex-direction: column-reverse;
    .xc-checkProtocol{
        margin-bottom: 50px;
    }
}

</style>
