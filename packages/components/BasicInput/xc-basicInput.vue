<template>
    <van-field 
        class="xc-basicInput"
        :class="
            props.sigleLine?'xc-input-sigleLine':'',
            props.xcBorder?'xc-input-xcBorder':''
        ">
            <template  v-for="(item, key, index) in $slots" :key="index" v-slot:[key]>            
                <slot :name="key"></slot>     
            </template>        
        </van-field>
</template>
<script setup name="xc-basicInput">
    import { defineProps } from 'vue';
    const props = defineProps({
        sigleLine: {    //单行输入线
            type: Boolean,
            default: false
        },
        xcBorder: {    //边框型
            type: Boolean,
            default: false
        },
    })
</script>

<style scoped lang="less">
.xc-input-xcBorder.xc-basicInput{
    padding: 0rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    border: 0.05rem solid #999999;
    border-radius: 0.4rem;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    //输入部分设置
    :deep(.van-field__body){
        margin-left: 0.8rem;
        height: 4.4rem;
        font-family: 'PingFang SC';
        font-style: normal;
        font-weight: 400;
        font-size: 1.7rem;
        line-height: 2.4rem;
        letter-spacing: -0.03rem;
        color: #999999;
        flex: none;
        order: 0;
        flex-grow: 0;
        
        .van-field__control{
            margin-right: 0.2rem;
            padding-right: 1rem;
        }
    }
    // 左侧图标大小设置
    :deep(.van-field__left-icon){
        margin-left: 0.8rem;
        .van-icon{
            font-size: 2.1rem; 
        }       
    }
    //label文本设置
    :deep(.van-field__label){
        margin-left: 0.8rem;
        width: auto;
        // min-width: 3rem;
        label{
            font-family: 'PingFang SC';
            font-style: normal;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 2rem;
            text-align: center;
            letter-spacing: -0.03rem;
            color: #333333;
            flex: none;
            order: 0;
            flex-grow: 0;
        }
    }
    // 右侧图标大小设置
    :deep(.van-field__right-icon){
        margin-right:0rem;
        padding: 0rem 0.8rem 0rem 0rem;
        .van-icon{
            font-size: 1.6rem; 
        }       
    }
    // 按钮插槽设置
    :deep(.van-field__button){
        padding: 0rem 0.8rem;
        .van-icon{
            font-size: 1.6rem; 
        }       
    }
}
.xc-input-sigleLine{
    display: flex;
    flex-direction: row;
    align-items: center;
    border: none !important;
    border-bottom: 0.05rem solid #EEEEEE !important;
    border-radius: 0rem !important;
    box-shadow: inset 0rem -0.05rem 0rem #EEEEEE;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
}
.xc-basicInput{
    padding: 0rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    //输入部分设置
    :deep(.van-field__body){
        margin-left: 0.8rem;
        min-height: 4.4rem;
        font-family: 'PingFang SC';
        font-style: normal;
        font-weight: 400;
        font-size: 1.7rem;
        line-height: 2.4rem;
        letter-spacing: -0.03rem;
        color: #999999;
        flex: none;
        order: 0;
        flex-grow: 0;
        .van-field__control{
            padding-right: 1rem;
            margin-right: 0.2rem;
        }
        .van-icon-clear{
            padding: 0rem 0rem 0rem 0rem;
            margin-right: 0.8rem;
        }
    }
    // 左侧图标大小设置
    :deep(.van-field__left-icon){
        margin-left: 0.8rem;
        .van-icon{
            font-size: 2.1rem; 
        }       
    }
    //label文本设置
    :deep(.van-field__label){
        margin-left: 1.6rem;
        width: auto;
        display: flex;
        align-items: center;
        // min-width: 3rem;
        label{
            font-family: 'PingFang SC';
            font-style: normal;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 2rem;
            text-align: center;
            letter-spacing: -0.03rem;
            color: #333333;
            flex: none;
            order: 0;
            flex-grow: 0;
        }
    }
    // 右侧图标大小设置
    :deep(.van-field__right-icon){
        margin-right:0rem;
        padding: 0rem 0.8rem 0rem 0rem;
        .van-icon{
            font-size: 1.6rem; 
        }       
    }
    // 按钮插槽设置
    :deep(.van-field__button){
        padding: 0rem 0.8rem;
        .van-icon{
            font-size: 1.6rem; 
        }       
    }
}
</style>