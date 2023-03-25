<template>
    <div class="stepCol">
        <div class="row" v-for="(item, index) in props.stepList" :key="index">
            <div class="text">
                {{item.label}}
            </div>
            <div class="cir">
                <div :class="index < props.stepIndex-1 ? 'circle' : (index == props.stepIndex-1 ? 'end' : 'other')"></div>
            </div>
            <div class="slot">
                <slot :name="item.slot"></slot>
            </div>
            <div v-if="index != props.stepList.length-1" :class="index+1 < props.stepIndex ? 'mask noActive' : 'mask active'"></div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    stepIndex: {
        type: Number,
        required: true
    },
    stepList: {
        type: Array,
        required: true
    }
});

</script>

<style scoped>

</style>