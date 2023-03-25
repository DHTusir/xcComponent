 <!--
 * @FileDescription: 账号下拉选择组件
 * @Author: 蔡鸿轩
 * @Date: 2023/3/20
 * @LastEditors: 
 * @LastEditTime: 
 -->
<template>
     <div >
            <div class="accout-name">
                <div id="accountName">{{label}}</div>
                <div class="accout" @click="select">
                    <div class="accoutText">{{textVal}}</div>
                    <div class="iconT">
                        <img v-if="!showPicker" src="./down.svg"/>
                        <img v-if="showPicker" src="./up.svg" />
                    </div>
                </div>
            </div>
            <hr>
            <div class="cur-bal">
                <div style="color:#666666;">币种：{{props.current}}</div>
                <div><span style="color:#666666;">可用余额：</span><span class="balance">{{props.balance}}</span></div>
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
                @cancel="oncancel($event)"
            >
            <template v-for="(item, key, index) in $slots" :key="index" v-slot:[key]>
                <slot :name="key"></slot>
              </template>
            </van-picker>  
        </div>
    </van-popup>
</template>

<script setup>
    import {ref,reactive,defineProps,defineEmits,watch} from 'vue';
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
        columns:{
            type:Array,
            default:()=>[]
        },
        cancel:{
            type:Function,
            default:()=>{}
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
    //处理columns，使其中的账号脱敏
    if(columnsC){
        columnsC.forEach(item=>{
            item.text = utils.acctMiss(item.text)
        })
    }
    // emit
    const emit = defineEmits(['update:modelValue','setCurBal'])
    
    //computed
    let tempValue=ref([props.modelValue])
    emit('setCurBal')
    let showPicker =ref(false)
    watch(tempValue,(newVal,oldVal)=>{
        emit('update:modelValue', newVal[0])
    })
    const getText =()=>{
       return columnsC.find(item=>item.value==tempValue.value[0]).text
    }
    const textVal=ref(utils.acctMiss(getText()))
    const select = () =>{
        showPicker.value=!showPicker.value
    }
    const onConfirm = ({selectedOptions})=>{
        showPicker.value=!showPicker.value
        textVal.value = utils.acctMiss(getText())
        emit('setCurBal',selectedOptions)
    }
    const oncancel =(event)=>{
        showPicker.value=!showPicker.value
        props.cancel()
    }
</script>
<script>
    export default{
        name:'xcDownaccount',
        inheritAttrs: false
    }
</script>
<style scoped>
    .accout-name{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        background-color: #ffffff;
    }
    #accountName{
        color: #223968;
        font-size: 18px;
    }
    .accout{
        display: flex;
    }
    .accoutText{
        margin-right:8px;
        font-size: 18px;
    }
    .iconT{
        display: flex;
        align-items: center;
    }
    .cur-bal{
        display: flex;
        justify-content: space-between;
        padding: 14px;
        background-color: #ffffff;
    }
    .balance{
        color:#1A96D5
    }
    hr{
        border: 1px solid #f8f8f8;
    }
</style>