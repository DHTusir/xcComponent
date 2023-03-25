<template>
  <div class="demoWrap">
    <div class="describeBox">

      <xc-showCodeCard headerText="van-field基础用法" :textFilePath="filePath1">
        <template v-slot:describe>
           <p>可以通过<code>v-model</code>双向绑定输入框的值，通过<code>placeholder</code>设置占位提示文字。</p>
           <p>根据 <code>type</code> 属性定义不同类型的输入框，默认值为 text </p>
        </template>
      </xc-showCodeCard>
      <xc-showCodeCard headerText="配置icon" :textFilePath="filePath2">
        <template v-slot:describe>
          <p>通过 left-icon 和 right-icon 配置输入框两侧的图标，也可通过插槽设置，通过 readonly 将输入框设置为只读状态</p>
        </template>
      </xc-showCodeCard>
      <xc-showCodeCard headerText="配合弹出框使用" :textFilePath="filePath3">
        <template v-slot:describe>
          <p>设置 is-link展示右侧箭头并开启点击反馈。也可以通过arrow-direction属性设置箭头方向，可选值为 left up down</p>
        </template>
      </xc-showCodeCard>
      <xc-showCodeCard headerText="自定义插槽" :textFilePath="filePath4">
        <template v-slot:describe>
          <p>flied组件插槽的位置有很多，可以实现许多自定义操作。	</p>
          <p>插槽位置有label 自定义输入框左侧文本	，input自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效	，left-icon 自定义输入框头部图标	，right-icon 自定义输入框尾部图标	，button自定义输入框尾部按钮	，error-message	自定义底部错误提示文案	，extra 自定义输入框最右侧的额外内容.</p>
        </template>
      </xc-showCodeCard>
      <xc-showCodeCard headerText="配合按钮使用" :textFilePath="filePath5">
        <template v-slot:describe>
          <p>可通过button插槽，插入按钮，实现一些具体业务</p>
        </template>
      </xc-showCodeCard>
      <h3>fieldItem props</h3>
      <xc-tableCode border :columns="propColumns" :content="propTableData"></xc-tableCode>
      <br />
      <h3>fieldItem events</h3>
      <xc-tableCode border :columns="eventColumns" :content="eventTableData"></xc-tableCode>
      <br/>
      <h3>fieldItem Slots</h3>
      <xc-tableCode border :columns="slotColumns" :content="slotTableData"></xc-tableCode>

    </div>
    <div class="demoBox1"></div>
    <div class="demoBox">
      <div class="phoneHeader">
        <van-nav-bar
            title="表单输入框"
            left-arrow
        />
      </div>
      <div class="phoneContent">
        <VanDivider >基础用法</VanDivider>
        <van-field v-model="value" label="用户名" placeholder="请输入用户名" />
        <VanDivider >配置icon</VanDivider>
        <van-field
            v-model="bank"
            label="收款银行"
            input-align="right"
            readonly
        >
          <template #right-icon>
              <img style="width: 2rem;height: 2rem;align-items: center;display: flex" src="@/assets/images/alone1.gif" @click="iconClick">
          </template>
        </van-field>

        <VanDivider >配合弹出框使用</VanDivider>
        <van-field
            v-model="acc"
            label="收款账户"
            placeholder="请选择收款账户"
            input-align="right"
            readonly
            is-link
            @click="()=>{showAccPicker = true}"
        >
        </van-field>
        <van-popup :show="showAccPicker" round position="bottom">
          <van-picker
              :columns="accList"
              @cancel="showAccPicker = false"
              @confirm="onAccConfirm"
          />
        </van-popup>

        <VanDivider >自定义插槽</VanDivider>
        <van-field label="是否加入收款人列表" label-width="15rem" style="padding-bottom: 0rem">
          <template #button>
            <van-switch v-model="checked" />
          </template>
        </van-field>

        <VanDivider >配合按钮使用</VanDivider>
        <van-field
            v-model="sms"
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
        >
          <template #button>
            <xc-button size="mini" width="10rem"  radio >发送验证码</xc-button>
          </template>
        </van-field>
      </div>
    </div>
  </div>
</template>
<script setup>

import {ref} from "vue";
const filePath1 = ref('static/views/fieldItemDemo/fieldItemDemo1.txt')
const filePath2 = ref('static/views/fieldItemDemo/fieldItemDemo2.txt')
const filePath3 = ref('static/views/fieldItemDemo/fieldItemDemo3.txt')
const filePath4 = ref('static/views/fieldItemDemo/fieldItemDemo4.txt')
const filePath5 = ref('static/views/fieldItemDemo/fieldItemDemo5.txt')
const bank = ref('南洋商业银行')
const value = ref('')
const sms = ref('')
const checked = ref(false)
const acc=ref("")
const showAccPicker=ref(false)
const accList = [
  {text: '6212136666668855', value: 'AAAAAA'},
  {text: '6212136666668231', value: 'BBBBBB'},
  {text: '6212136666668412', value: 'CCCCCC'},
];
const onAccConfirm=({selectedOptions})=>{
  showAccPicker.value = false;
  acc.value = selectedOptions[0].text;
}
const iconClick = () => {
  alert( bank.value)
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
const propTableData = ref([
  {
    attrName: "v-model",
    explain: "当前输入的值",
    type: "number | string",
    defaultValue: "空",
  },
  {
    attrName: "label",
    explain: "输入框左侧文本",
    type: "String",
    defaultValue: "空",
  },
  {
    attrName: "name",
    explain: "名称，作为提交表单时的标识符",
    type: " String",
    defaultValue: "空",
  },
  {
    attrName: "id",
    explain: "输入框 id，同时会设置 label 的 for 属性",
    type: "String",
    defaultValue: "van-field-n-input",
  },
  {
    attrName: "type",
    explain: "输入框类型, 支持原生 input 标签的所有 type 属性",
    type: "FieldType",
    defaultValue: "text",
  },
  {
    attrName: "size",
    explain: "大小，可选值为 large",
    type: "String",
    defaultValue: "空",
  },
  {
    attrName: "maxlength",
    explain: "输入的最大字符数",
    type: "number | string",
    defaultValue: "空",
  },
  {
    attrName: "placeholder",
    explain: "输入框占位提示文字",
    type: "String",
    defaultValue: "空",
  },
  {
    attrName: "border",
    explain: "是否显示内边框",
    type: "boolean",
    defaultValue: "true",
  },
  {
    attrName: "disabled",
    explain: "是否禁用输入框",
    type: "boolean",
    defaultValue: "false",
  },
  {
    attrName: "readonly",
    explain: "是否为只读状态，只读状态下无法输入内容",
    type: "boolean",
    defaultValue: "false",
  },
  {
    attrName: "colon",
    explain: "是否在 label 后面添加冒号",
    type: "boolean",
    defaultValue: "false",
  },
  {
    attrName: "required",
    explain: "是否显示表单必填星号",
    type: "boolean",
    defaultValue: "false",
  },
  {
    attrName: "center",
    explain: "是否使内容垂直居中",
    type: "boolean",
    defaultValue: "false",
  },
  {
    attrName: "clearable",
    explain: "是否启用清除图标，点击清除图标后会清空输入框",
    type: "boolean",
    defaultValue: "false",
  },
  {
    attrName: "clear-icon",
    explain: "清除图标名称或图片链接，等同于 Icon 组件的 name 属性",
    type: "string",
    defaultValue: "clear",
  },
  {
    attrName: "clear-trigger",
    explain: "显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示",
    type: "FieldClearTrigger",
    defaultValue: "focus",
  },
  {
    attrName: "clickable",
    explain: "是否开启点击反馈",
    type: "boolean",
    defaultValue: "false",
  },
  {
    attrName: "is-link",
    explain: "是否展示右侧箭头并开启点击反馈",
    type: "boolean",
    defaultValue: "false",
  },
  {
    attrName: "autofocus",
    explain: "是否自动聚焦，iOS 系统不支持该属性",
    type: "boolean",
    defaultValue: "false",
  },
  {
    attrName: "show-word-limit",
    explain: "是否显示字数统计，需要设置 maxlength 属性",
    type: "boolean",
    defaultValue: "false",
  },
  {
    attrName: "show-word-limit",
    explain: "是否显示字数统计，需要设置 maxlength 属性",
    type: "boolean",
    defaultValue: "false",
  },
  {
    attrName: "error",
    explain: "是否将输入内容标红",
    type: "boolean",
    defaultValue: "false",
  },
  {
    attrName: "error-message",
    explain: "底部错误提示文案，为空时不展示",
    type: "string",
    defaultValue: "",
  },
  {
    attrName: "error-message-align",
    explain: "错误提示文案对齐方式，可选值为 center right",
    type: "FieldTextAlign",
    defaultValue: "left",
  },
  {
    attrName: "formatter",
    explain: "输入内容格式化函数",
    type: "(val: string) => string",
    defaultValue: "",
  },
  {
    attrName: "format-trigger",
    explain: "格式化函数触发的时机，可选值为 onBlur",
    type: "FieldFormatTrigger",
    defaultValue: "onChange",
  },
  {
    attrName: "arrow-direction",
    explain: "箭头方向，可选值为 left up down",
    type: "string",
    defaultValue: "right",
  },
  {
    attrName: "label-class",
    explain: "左侧文本额外类名",
    type: "string",
    defaultValue: "string | Array | object",
  },
  {
    attrName: "label-width",
    explain: "左侧文本宽度，默认单位为 px",
    type: "number | string",
    defaultValue: "6.2em",
  },
  {
    attrName: "label-align",
    explain: "左侧文本对齐方式，可选值为 center right top",
    type: "FieldTextAlign",
    defaultValue: "left",
  },
  {
    attrName: "input-align",
    explain: "输入框对齐方式，可选值为 center right",
    type: "FieldTextAlign",
    defaultValue: "left",
  },
  {
    attrName: "autosize",
    explain: "是否自适应内容高度，只对 textarea 有效，\n" +
        "可传入对象,如 { maxHeight: 100, minHeight: 50 }，\n" +
        "单位为px",
    type: "boolean | FieldAutosizeConfig",
    defaultValue: "false",
  },
  {
    attrName: "left-icon",
    explain: "左侧图标名称或图片链接，等同于 Icon 组件的 name 属性",
    type: "string",
    defaultValue: "",
  },
  {
    attrName: "right-icon",
    explain: "右侧图标名称或图片链接，等同于 Icon 组件的 name 属性",
    type: "string",
    defaultValue: "",
  },
  {
    attrName: "left-icon",
    explain: "左侧图标名称或图片链接，等同于 Icon 组件的 name 属性",
    type: "string",
    defaultValue: "",
  },
  {
    attrName: "icon-prefix",
    explain: "图标类名前缀，等同于 Icon 组件的 class-prefix 属性",
    type: "string",
    defaultValue: "van-icon",
  },  {
    attrName: "rules",
    explain: "表单校验规则，详见 Form 组件",
    type: "FieldRule[]",
    defaultValue: "",
  },  {
    attrName: "autocomplete",
    explain: "HTML 原生属性，用于控制自动完成功能，详见 MDN - autocomplete",
    type: "string",
    defaultValue: "",
  },  {
    attrName: "left-icon",
    explain: "左侧图标名称或图片链接，等同于 Icon 组件的 name 属性",
    type: "string",
    defaultValue: "",
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
    eventName: "update:model-value",
    explain: "输入框内容变化时触发",
    returnValue: "value: string (当前输入的值)",
  },
  {
    eventName: "focus",
    explain: "输入框获得焦点时触发",
    returnValue: "event: Event"
  },
  {
    eventName: "blur",
    explain: "输入框失去焦点时触发",
    returnValue: "event: Event"
  },
  {
    eventName: "clear",
    explain: "点击清除按钮时触发",
    returnValue: "event: MouseEvent"
  },
  {
    eventName: "click",
    explain: "点击组件时触发",
    returnValue: "event: MouseEvent"
  },
  {
    eventName: "click-input",
    explain: "点击输入区域时触发",
    returnValue: "event: MouseEvent"
  },
  {
    eventName: "click-left-icon",
    explain: "点击左侧图标时触发",
    returnValue: "event: MouseEvent"
  },
  {
    eventName: "click-right-icon",
    explain: "点击右侧图标时触发",
    returnValue: "event: MouseEvent"
  },
  {
    eventName: "start-validate",
    explain: "开始表单校验时触发",
    returnValue: ""
  },
  {
    eventName: "end-validate",
    explain: "结束表单校验时触发",
    returnValue: "{ status: string, message: string }"
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
    slotName: "label",
    explain: "自定义输入框左侧文本",
  },
  {
    slotName: "input",
    explain: "自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效",
  },
  {
    slotName: "left-icon",
    explain: "自定义输入框头部图标",
  },
  {
    slotName: "right-icon",
    explain: "自定义输入框尾部图标",
  },
  {
    slotName: "button",
    explain: "自定义输入框尾部按钮",
  },
  {
    slotName: "error-message",
    explain: "自定义底部错误提示文案 参数{ message: string }",
  },
  {
    slotName: "extra",
    explain: "自定义输入框最右侧的额外内容",
  },

])

</script>
<script>
export default {
  name: "fieldItemDemo"
}
</script>

<style scoped>

</style>
