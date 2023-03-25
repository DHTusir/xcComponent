<template>
    <div class="dynamicForm">
        <van-form @submit="onSubmit" @failed="onFailed" ref="dynimicRef" :show-error-message="false">
            <!-- 根据传进来的表单项进行循环渲染 -->
            <template v-for="(item, index) in tempFormItem" :key="index">
                <div class="space" v-if="item.space"></div>
                <div class="upLable" v-if="item.upLable">{{item.upLable}}</div>
                <!-- <van-field v-bind:value="tempFormData[item.name]" v-if="item.slot" :name="item.name" :label="item.label" :rules="item.rules"> -->
                    <!-- <template #input>
                    </template>
                </van-field> -->

                <!-- 自定义组件，以插槽的形式扩展 -->
                <slot :name="item.slotName"></slot>

                <!-- 普通输入框 -->
                <van-cell-group>
                    <xc-basicInput 
                        v-if="item.type == 'basicInput'"
                        :label="item.props?.label" 
                        :rules="item.rules" 
                        :name="item.name" 
                        v-model="tempFormData[item.name]" 
                        :readonly="item.props?.readonly"
                        :input-align="item.props?.inputAlign" 
                        :sigleLine="item.props?.sigleLine"
                        :disabled="item.props?.disabled"
                        @blur="item.onBlur && item.onBlur()"
                    >
                        <template v-for="ite in item.vNode" :key="ite" #[ite.slotName]>
                            <Render :vNode="ite.render"></Render>
                        </template>
                    </xc-basicInput>
                </van-cell-group>

                <!-- 金额输入框 -->
                <van-cell-group>
                    <xc-inputmoney
                        v-if="item.type == 'inputMoney'"
                        :rules="item.rules" 
                        :name="item.name"
                        v-model="tempFormData[item.name]"
                        :money="tempFormData[item.name]"
                        @money-format="
                            (val) => {
                                item.moneyFormat && item.moneyFormat(val)
                            }
                        "
                    >
                        <template #button>
                            <Render :vNode="item.vNode"></Render>
                        </template>
                    </xc-inputmoney>
                </van-cell-group>

                <!-- 账号下拉选择 -->
                <van-cell-group>
                    <xc-down-account
                        v-if="item.type == 'downAccount'"
                        v-model="tempFormData[item.name].value"
                        :label="item.props?.label"
                        :columns="item.props?.columns"
                        :current="tempFormData[item.name].current"
                        :balance="tempFormData[item.name].balance"
                        @setCurBal="item.setCurBal && item.setCurBal()"
                    ></xc-down-account>
                </van-cell-group>

                <!-- 银行卡下拉 -->
                <van-cell-group>
                    <xc-down-accountT
                        v-if="item.type == 'downAccountT'"
                        v-model="tempFormData[item.name].value"
                        :label="item.props?.label"
                        :columns="item.props?.columns"
                        :current="tempFormData[item.name].current"
                        :balance="tempFormData[item.name].balance"
                        @setCurBal="item.setCurBal && item.setCurBal()"
                    >
                    </xc-down-accountT>
                </van-cell-group>

                <!-- cell单元格 -->
                <van-cell-group>
                    <van-cell
                        v-if="item.type == 'vanCell'"
                        :value="tempFormData[item.name]"
                        :title="item.props?.title"
                        :label="item.props?.label"
                        :size="item.props?.size"
                        :icon="item.props?.icon"
                        :url="item.props?.url"
                        :to="item.props?.to"
                        :is-link="item.props?.isLink"
                        :arrow-direction="item.props?.arrowDirection"
                    >
                    </van-cell>
                </van-cell-group>

                <!-- Picker选择器 -->
                <van-field
                v-if="item.type == 'vanPicker'"
                v-model="tempFormData[item.name]"
                input-align="right"
                :name="item.name"
                is-link
                readonly
                :label="item.props?.label"
                :placeholder="item.props?.placeholder"
                :rules="item.rules"
                @click="item.props.showPicker = true"
                />
                <van-popup v-if="item.type == 'vanPicker'" v-model:show="item.props.showPicker" round position="bottom">
                    <van-picker
                        :columns="item.props?.columns"
                        @cancel="item.props.showPicker = false"
                        @confirm="
                            (val) => {
                                item.props.showPicker = false,
                                item.onConfirmm && item.onConfirmm(val)
                            }
                        "
                    />
                </van-popup>
            </template>
            <div style="margin: 16px;">
                <slot name="botoomBut"></slot>
            </div>
        </van-form>   
    </div>
</template>

<script setup>
import { ref, getCurrentInstance, defineProps, defineExpose, defineEmits } from 'vue';
import Render from './render.js';

const props = defineProps({
    formItem: { // 表单项
        type: Array,
        default: () => []
    },

    formData: {
        type: Object,
        default: () => {}
    }
});

const emit = defineEmits(['onSubmit', 'onFailed'])

const tempFormItem = ref(props.formItem); // 表单项
const tempFormData = ref(props.formData); // 表单数据

const com = getCurrentInstance(); // 当前实例

const dynimicRef = ref(null)
defineExpose({dynimicRef}) // 定义表单Ref并暴露出去

const onSubmit = (values) => {
    emit('onSubmit', tempFormData.value)
};

const onFailed = (errorInfo) => {
    emit('onFailed', errorInfo)
};

const onConfirm = (val) => {
    console.log(val);
}
</script>

<style>

</style>