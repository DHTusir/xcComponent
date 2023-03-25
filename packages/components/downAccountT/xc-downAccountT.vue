 <!--
 * @FileDescription: 账号下拉选择组件
 * @Author: 蔡鸿轩
 * @Date: 2023/3/20
 * @LastEditors: 
 * @LastEditTime: 
 -->
 <template>
    <div class="content">
        <div class="downAcct">
                <div>
                    <div id="accountName">{{label}}</div>
                </div>
                <div class="right" @click="select">
                    <div>
                        <div class="accout">
                            <div class="accoutText">{{textVal}}</div>
                        </div>
                        <div class="cur-bal">
                            <div>余额：<span class="balance">{{curSymbol}}{{props.balance}}</span></div>
                        </div>
                    </div>
                    <div class="iconArrow">
                        <img  src="./right.svg"/>
                    </div>
                </div>
        </div>
    </div>  

   <van-popup v-model:show="showPicker" round position="bottom">
       <div>
           <van-picker
               v-bind="$attrs"
               title="请选择账号"
               v-model="tempValue"
               :columns="columnsC"
               @confirm="onConfirm"
               @cancel="oncancel"
           >
            <template v-for="(item, key, index) in $slots" :key="index" v-slot:[key]>
                <slot :name="key"></slot>
            </template>
           </van-picker>  
       </div>
   </van-popup>
</template>

<script setup>
   import {ref,reactive,defineProps,defineEmits,watch,watchEffect} from 'vue';
   import utils from '../../js/utils.js';
   // props
   const props = defineProps({
       modelValue:{
           type: [String,Number],
           default: ''
       },
       label:{
           type: [String],
           default: '账号'
       },
       cancel:{
            type:Function,
            default:()=>{}
        },
       columns:{
           type:Array,
           default:()=>[]
       },
       current:{
           type:String,
           default:''
       },
       balance:{
           type:[String,Number],
           default:''
       }
   })
   let columnsC=reactive(props.columns)
   // emit
   const emit = defineEmits(['update:modelValue','setCurBal'])
   //computed
   let tempValue=ref([props.modelValue])
   let curSymbol=ref('')//货币符号
   emit('setCurBal')
   let showPicker =ref(false)
   watch(tempValue,(newVal,oldVal)=>{
       emit('update:modelValue', newVal[0])
   })
   watch(()=>props.current,(newVal,oldVal)=>{
       curSymbol.value = utils.getSymByCur(newVal)
   })
   const getText = () =>{
      return columnsC.find(item=>item.value==tempValue.value[0]).text
   }
   const textVal=ref(getText())
   const select = () =>{
       showPicker.value=!showPicker.value
   }
   const onConfirm = ({selectedOptions}) =>{
       showPicker.value=!showPicker.value
       textVal.value = getText()
       emit('setCurBal',selectedOptions)
   }
   const oncancel = ()=>{
       showPicker.value=!showPicker.value
       props.cancel()
   }
</script>
<script>
   export default{
       name:'xcDownaccountT',
       inheritAttrs: false
   }
</script>
<style scoped>
.content{
    background-color: #ffffff;
    padding: 12px 16px;
}
.downAcct{
    display: flex;
    justify-content: space-between;
}
.accountName{
    font-size: 18px;
}
#accountName{
    font-size: 16px;
}
.right{
    display: flex;
}
.accout{
    display: flex;
    flex-direction: row-reverse;
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 2px;
    color: #333333;
    font-size: 16px;
}
.cur-bal{
    font: PingFang SC;
    font-size: 12px;
    color: #999999;
    display: flex;
    flex-direction: row-reverse;
}
.iconArrow{
    display: flex;
    align-items: center;
    padding-left: 13px;
}
</style>