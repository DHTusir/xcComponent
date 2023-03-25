import XcDialog from "./src/xc-dialog.vue";
import {  render ,createVNode,h} from 'vue';

const creatDialog= function(options){
  const modelDom = document.querySelector(`.demoBox`)
  const overlayDom = modelDom.querySelector('.van-overlay')
  const popupDom = modelDom.querySelector('.van-popup')
  if(overlayDom){
    modelDom.removeChild(overlayDom)
  }
  if(popupDom){
    modelDom.removeChild(popupDom)
  }
  //创建虚拟节点
  let vm = createVNode(XcDialog, {
    ...options,
    key: Math.random() // 为了使虚拟节点通过diff算法后会重新渲染
  })
  render(vm, modelDom);
} 
 
export default creatDialog
