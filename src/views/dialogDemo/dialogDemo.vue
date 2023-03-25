<template>
  <div class="demoWrap">
    <div class="describeBox">
      <div class="van-doc-card">
        <p>通过调用 <code>proxy.$dialog({ title: "标题", message: "内容", confirmButtonText: "确认" });
};</code></p>
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>title</td>
              <td>标题</td>
              <td><em>string</em></td>
              <td>-</td>
            </tr>
            <tr>
              <td>width</td>
              <td>弹窗宽度，默认单位为 <code>px</code></td>
              <td><em>number | string</em></td>
              <td><code>320px</code></td>
            </tr>
            <tr>
              <td>message</td>
              <td>文本内容，支持通过 <code>\n</code> 换行</td>
              <td><em>string | () =&gt; JSX.Element</em></td>
              <td>-</td>
            </tr>
            <tr>
              <td>message-align</td>
              <td>
                内容水平对齐方式，可选值为 <code>left</code> <code>right</code>
                <code>justify</code>
              </td>
              <td><em>string</em></td>
              <td><code>center</code></td>
            </tr>
            <tr>
              <td>theme</td>
              <td>样式风格，可选值为 <code>round-button</code></td>
              <td><em>string</em></td>
              <td><code>default</code></td>
            </tr>
            <tr>
              <td>show-confirm-button</td>
              <td>是否展示确认按钮</td>
              <td><em>boolean</em></td>
              <td><code>true</code></td>
            </tr>
            <tr>
              <td>show-cancel-button</td>
              <td>是否展示取消按钮</td>
              <td><em>boolean</em></td>
              <td><code>false</code></td>
            </tr>
            <tr>
              <td>confirm-button-text</td>
              <td>确认按钮文案</td>
              <td><em>string</em></td>
              <td><code>确认</code></td>
            </tr>
            <tr>
              <td>confirm-button-color</td>
              <td>确认按钮颜色</td>
              <td><em>string</em></td>
              <td><code>#ee0a24</code></td>
            </tr>
            <tr>
              <td>confirm-button-disabled</td>
              <td>是否禁用确认按钮</td>
              <td><em>boolean</em></td>
              <td><code>false</code></td>
            </tr>
            <tr>
              <td>cancel-button-text</td>
              <td>取消按钮文案</td>
              <td><em>string</em></td>
              <td><code>取消</code></td>
            </tr>
            <tr>
              <td>cancel-button-color</td>
              <td>取消按钮颜色</td>
              <td><em>string</em></td>
              <td><code>black</code></td>
            </tr>
            <tr>
              <td>cancel-button-disabled</td>
              <td>是否禁用取消按钮</td>
              <td><em>boolean</em></td>
              <td><code>false</code></td>
            </tr>
            <tr>
              <td>z-index</td>
              <td>将弹窗的 z-index 层级设置为一个固定值</td>
              <td><em>number | string</em></td>
              <td><code>2000+</code></td>
            </tr>
            <tr>
              <td>overlay</td>
              <td>是否展示遮罩层</td>
              <td><em>boolean</em></td>
              <td><code>true</code></td>
            </tr>
            <tr>
              <td>overlay-class</td>
              <td>自定义遮罩层类名</td>
              <td><em>string</em></td>
              <td>-</td>
            </tr>
            <tr>
              <td>overlay-style</td>
              <td>自定义遮罩层样式</td>
              <td><em>object</em></td>
              <td>-</td>
            </tr>
            <tr>
              <td>close-on-popstate</td>
              <td>是否在页面回退时自动关闭</td>
              <td><em>boolean</em></td>
              <td><code>true</code></td>
            </tr>
            <tr>
              <td>close-on-click-overlay</td>
              <td>是否在点击遮罩层后关闭弹窗</td>
              <td><em>boolean</em></td>
              <td><code>false</code></td>
            </tr>
            <tr>
              <td>lazy-render</td>
              <td>是否在显示弹层时才渲染节点</td>
              <td><em>boolean</em></td>
              <td><code>true</code></td>
            </tr>
            <tr>
              <td>lock-scroll</td>
              <td>是否锁定背景滚动</td>
              <td><em>boolean</em></td>
              <td><code>true</code></td>
            </tr>
            <tr>
              <td>allow-html</td>
              <td>是否允许 message 内容中渲染 HTML</td>
              <td><em>boolean</em></td>
              <td><code>false</code></td>
            </tr>
            <tr>
              <td>before-close</td>
              <td>
                关闭前的回调函数，返回 <code>false</code> 可阻止关闭，支持返回
                Promise
              </td>
              <td>
                <em>(action: string) =&gt; boolean | Promise&lt;boolean&gt;</em>
              </td>
              <td>-</td>
            </tr>
            <tr>
              <td>transition</td>
              <td>
                动画类名，等价于
                <a
                  href="https://v3.cn.vuejs.org/api/built-in-components.html#transition"
                  target="_blank"
                  >transition</a
                >
                的 <code>name</code> 属性
              </td>
              <td><em>string</em></td>
              <td>-</td>
            </tr>
            <tr>
              <td>teleport</td>
              <td>
                指定挂载的节点，等同于 Teleport 组件的
                <a
                  href="https://v3.cn.vuejs.org/api/built-in-components.html#teleport"
                  target="_blank"
                  >to 属性</a
                >
              </td>
              <td><em>string | Element</em></td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="demoBox1"></div>
    <div class="demoBox">
      <div class="phoneHeader">
        <van-nav-bar title="dialog弹窗" left-arrow />
      </div>
      <div class="phoneContent">
        <van-space direction="vertical" fill>
          <xc-button text="提示弹窗" size="large" @click="dialogA"></xc-button>
          <xc-button text="带取消按钮" size="large" @click="dialogB"></xc-button>
          <xc-button text="带按钮样式" size="large" @click="dialogC"></xc-button>
          <xc-button text="异步关闭" size="large" @click="dialogD"></xc-button>
        </van-space>
      </div>
    </div>
  </div>
</template>
<script setup name="dialogDemo">
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
const dialogA = () => {
  proxy.$dialog({ title: "标题", message: "内容", confirmButtonText: "确认" });
};
const dialogB = () => {
  proxy.$dialog({
    message: "内容",
    confirmButtonText: "确认",
    showCancelButton: "取消",
  });
};
const dialogC = () => {
  proxy.$dialog({
    message: "内容",
    theme: "round-button",
  });
};
const dialogD = () => {
  proxy.$dialog({
    title: "标题",
    message: "内容",
    confirmButtonText: "确认",
    beforeClose,
  });
};
const beforeClose = (action) =>
  new Promise((resolve) => {
    setTimeout(() => {
      if (action === "confirm") {
        resolve(true);
      } else {
        // 拦截取消操作
        resolve(false);
      }
    }, 1000);
  });
</script>
<style scoped>

.van-doc-card > table {
  width: 100%;
  margin-top: 12px;
  color: var(--van-doc-text-color-3);
  font-size: 14px;
  line-height: 1.5;
  border-collapse: collapse;
}
thead {
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.van-doc-card > table th {
  font-weight: 600;
  text-align: left;
  padding: 8px 10px;
}
.van-doc-card > table td {
  padding: 8px;
  border-top: 1px solid #f2f3f5;
}
</style>