<template>
    <div class="datePickerRange">
        <div class="date">
            <div class="dateRange dateLeft"  @click="selectDate('left')">
                <div class="dateVal">{{dateStartC}}</div>
                <div class="icon">
                    <img src="./down.svg">
                </div>
            </div>
            <div class="KeyWord">至</div>
            <div class="dateRange dateRight" @click="selectDate('right')">
                <div class="dateVal" >{{dateEndC}}</div>
                <div class="icon">
                    <img src="./down.svg">
                </div>
            </div>
        </div>
    </div>
    <van-popup v-model:show="showLeft" round position="bottom">
        <van-date-picker
            title="选择日期"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="onConfirm($event,'left')"
            @cancel="onConfirm($event,'left')"
        />
    </van-popup>
    <van-popup v-model:show="showRight" round position="bottom">
        <van-date-picker
            title="选择日期"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="onConfirm($event,'right')"
            @cancel="onConfirm($event,'right')"
        />
    </van-popup>
    
</template>
<script setup>
    import {ref,reactive,defineProps,defineEmits,watch} from 'vue';
    import utils from '../../js/utils.js';
    const props = defineProps({
        dateStart:{
            type: String,
            default: ''
        },
        dateEnd:{
            type: String,
            default: ''
        }
    })
    const emit = defineEmits(['update:dateStart','update:dateEnd'])
    //复制props防止props被修改
    let dateStartC  = ref(props.dateStart)
    let dateEndC    = ref(props.dateEnd)
    watch(dateStartC,(newVal,oldVal)=>{
        emit('update:dateStart',newVal)
    })
    watch(dateEndC,(newVal,oldVal)=>{
        emit('update:dateEnd',newVal)
    })
    let minDate     = new Date(2020, 0, 1)
    let maxDate     = new Date(2029, 9, 1)
    let showLeft    = ref(false)
    let showRight   = ref(false)
    const selectDate =(str)=>{
        if(str=='left')showLeft.value=true
        if(str=='right')showRight.value=true
    }
    const onConfirm =(event,str)=>{
        let value=event.selectedValues
        let formatStr='-'
        if(str=='left'){
            dateStartC.value = value[0]+formatStr+value[1]+formatStr+value[2]
            showLeft.value   = false
        }
        if(str=='right'){
            //判断是否大于左边date
            // if(isMoreThan(value[0]+formatStr+value[1]+formatStr+value[2]))
            dateEndC.value = value[0]+formatStr+value[1]+formatStr+value[2]
            showRight.value=false
        }
    }
    const isMoreThan=(dateR)=>{
        if(dateR.slice(0,4)<dateStartC.value.slice(0,4)){
            return false
        }else if(dateR.slice(0,4)>dateStartC.value.slice(0,4)){
            return true
        }else{
            if(dateR.slice(5,7)<dateStartC.value.slice(5,7)){
                return false
            }else if(dateR.slice(5,7)>dateStartC.value.slice(5,7)){
                return true
            }else{
                if(dateR.slice(8,10)<dateStartC.value.slice(8,10)){
                    return false
                }else{
                    return true
                }
            }
        }
    }

</script>
<script>
    export default{
        name:'datePickerRange'
    }
</script>
<style scoped>
.date{
    display: flex;
}
.dateRange{
    width: 14em;
    height: 3.6em;
    background-color: #f5f6f8;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.KeyWord{
    display: flex;
    align-items: center;
    margin: 5px 15px;
}
.dateVal{
    font-size: 16px;
    display: flex;
    align-items: center;
    margin: 3px 0px 3px 15px;
}
.icon{
    display: flex;
    align-items: center;
    margin-right: 4px;
}
</style>