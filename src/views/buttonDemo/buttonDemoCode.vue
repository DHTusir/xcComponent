<template>
    <div class="demoWrap">
        <div class="describeBox">btn {{ num }}描述区域外面盒子名字describeBox不可以变</div>
        <div class="demoBox">
            <div class="phoneHeader">
                <van-nav-bar
                    title="button"
                    left-arrow
                    />
            </div>
            <div class="phoneContent">
                手机区域外面盒子名字demoBox不可以变
            </div>
        </div>
    </div>
</template>
<script setup name="buttonDemo">
    import { ref } from 'vue'
    const num = ref('12345')
</script>
<style scoped>


</style>
