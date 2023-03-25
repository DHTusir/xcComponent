<template>
    <div class="detailCard">
        <div class="detailContent" v-for="item in length" :key="item">
            <slot v-if="Object.keys(obj)[item-1] == 'slot'" :name="Object.values(obj)[item-1]"></slot>
            <div class="label">
                <span v-if="Object.keys(obj)[item-1] !== 'slot'" class="detKey">{{Object.keys(obj)[item-1]}}</span>
            </div>
            <div class="content">
                <span v-if="Object.keys(obj)[item-1] !== 'slot'">{{Object.values(obj)[item-1]}}</span>
            </div>
            <div v-if="props.downLine && item != length" class="mask"></div>
        </div>
    </div>
</template>

<script setup>

import { onMounted, ref, defineProps } from 'vue';

const props = defineProps({
    detailInfo: { // 明细信息
        type: Object,
        required: true
    },
     downLine: {
        type: Boolean,
        default: false
    }
})
const obj = ref({})
const length = ref(0)
onMounted(() => {
    obj.value = props.detailInfo;
    length.value = Object.keys(obj.value).length;
})

</script>

<style scoped>

</style>