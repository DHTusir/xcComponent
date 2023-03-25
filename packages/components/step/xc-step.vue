<template>
    <div class="step">
        <div class="content" :class="index+1 == props.stepIndex ? 'currDiv' : ''" v-for="(item, index) in props.stepList" :key="index">
            <div class="index" :class="index+1 == props.stepIndex ? 'currentIndex' : 'numIndex'">
                {{index + 1}}
            </div>
            <div :class="index+1 == props.stepIndex ? 'currentText' : 'text'">
                {{item}}
            </div>
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