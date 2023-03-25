 <!--
 * @FileDescription: 条件查询组件
 * @Author: 蔡鸿轩
 * @Date: 2023/3/20
 * @LastEditors: 
 * @LastEditTime: 
 -->
<template>
    <div class="selectConditon">
        <div class="option" v-for="(option,index) of searchOptionsD" :key="index">
            <!-- 选择器 -->
            <div v-if="option.type=='select'">
                <van-field
                    v-model="option.showText"
                    is-link
                    readonly
                    :label="option.label"
                    :placeholder="option.placeholder"
                    @click="showPopup(option)"
                    />
            </div>
            <!-- 筛选按钮 -->
            <div v-if="option.type=='selectBtn'">
                <div class="label">{{option.label}}</div>
                <div class="selectBtn" >
                    <div v-for="(item,index) of option.columns" :key="index" class="selectBtnItem"  :class="[index==option.index?'pitch':'notPitch',(index+1)%3!=0?'setMarginR':'']" @click="clickSelected(index,option,item)">
                        <div><span>{{item.text}}</span></div>
                    </div>
                </div>
            </div>
            <!-- 时间范围 -->
            <div v-if="option.type=='dateRange'">
                <div class="label">{{option.label}}</div>
                <div class="dateRange">
                    <xc-date-range v-model:dateStart="searchDataD[option.propName[0]]" v-model:dateEnd="searchDataD[option.propName[1]]"></xc-date-range>
                </div>
            </div>
        </div>
        <!-- 查询按钮 -->
        <van-button  round block type="primary" native-type="select">
            查询
        </van-button>
    </div>
    <!-- 选择器动作面板 -->
    <van-popup v-model:show="popupObj.showPicker" round :position="popupObj.position">
        <van-picker
            :columns="popupObj.columns"
            @cancel="popupObj.showPicker = false"
            @confirm="onConfirm($event,popupObj.option)"
        />
    </van-popup>
    
</template>
<script setup>
    import {ref,reactive,defineProps,defineEmits,watch} from 'vue';
    const props = defineProps({
        searchOptions:{
            type: Array,
            default: ()=>{}
        },
        searchData:{
            type: Object,
            default: () => {}
        }
    })
    //复制props数据到当前vue,防止警告
    const searchOptionsD = reactive(props.searchOptions)
    const searchDataD = reactive(props.searchData)
    const emit = defineEmits(['update:searchData'])
    watch(searchDataD,(newVal,oldVal)=>{
        emit('update:searchData',newVal)
    })
    //#region 初始化searchOptions数据
    const init = () =>{
        searchOptionsD.forEach(item=>{
            // 选择器
            if(item.type=='select'){
                //展示value对应的text值
                try{
                    if(searchDataD[item.propName])
                    item.showText=item.columns.find(i=>i.value==searchDataD[item.propName]).text
                }catch(e){
                    console.error(`找不到value(${searchDataD[item.propName]})对应的text值,请确认value输入是否有误:${e}`);
                }
            }else if(item.type=='selectBtn'){
                //添加辅助选中样式的index
                item.index=0
            }
        })
    }
    init()
    //#endregion 初始化searchOptions数据

    //#region 选择器有关功能-start
    let popupObj=reactive({
        showPicker:false,
        position:'bottom',
        columns:[],
        option:{}
    })
    const onConfirm = (event,item) => {
        let selectedOptions=event.selectedOptions
        popupObj.showPicker = false;
        item.showText = selectedOptions[0].text;
        searchDataD[item.propName]=selectedOptions[0].value
    };
    const showPopup = (option) =>{
        popupObj.showPicker = true
        if(option.hasOwnProperty('position')) popupObj.position   = option.position
        popupObj.columns    = option.columns,
        popupObj.option     = option
    }
    //#endregion 选择器有关功能-end

    //#region 筛选按钮
    const clickSelected = (index,option,item)=>{
        //点击选中
        option.index=index
        searchDataD[option.propName]=item.value
    }
    //#endregion

    //#region 查询按钮
    const select = () =>{

    }
    //#endregio
</script>
<script>
    export default{
        name:'searchCondition',
        
    }
</script>
<style lang="less" scoped>
.selectConditon{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:#ffffff
}
.option{
    border-radius: 3px;
    margin: 10px 20px 20px 20px;
    width:324px;
}
.label{
    font-size: 16px;
    margin-bottom: 20px;
}
:deep(.van-field){
    background-color:#f3f6f9
}

/*#region 筛选按钮 -start */
.selectBtn{
    display: flex;
    flex-flow: row wrap;
}
.selectBtnItem{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    font-size: 16px;
    border-radius: 3px;
    margin-bottom: 12px;
    padding: 3px 7px;
    border:1px solid transparent
}
/* 选中状态 */
.pitch{
    background-color: #f4fdfc;
    color: #75a5c6;
    border:1px solid #75a5c6
}
/* 未选择状态 */
.notPitch{
    background-color: #f5f6f8;
    color: #737476;
}
/* 有右边距 */
.setMarginR{
    margin-right: 12px;
}
/* #endregion 筛选按钮 -end */

/*#region 时间范围 -start*/
.dateRange{
    
}
/*#endregion 时间范围 -end*/
</style>