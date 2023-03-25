
<template>
    <van-checkbox  class="xc-checkProtocol"  v-model="checked"   shape="square"  icon-size="1.6rem">
        <div v-html="checkHtml">
        </div>
    </van-checkbox>
</template>
<script setup name="xc-checkboxProtocol">
    import { ref } from 'vue'
    const props = defineProps({
        checkHtml: {//  显示的协议内容的 Html 标签文本
            type:String,
            default: "",        
        }   
    })
    const checked =ref(false)
</script>
<style scoped lang="less">
.xc-checkProtocol{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    .van-checkbox{
        width: 8rem;
    }
}
</style>