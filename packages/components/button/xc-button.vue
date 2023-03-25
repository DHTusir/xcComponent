
<template>
  <!-- <div> -->
    <van-button 
      :type = props.type 
      :size = props.size
      :style="{width: props.width,height:props.height,'border-radius':props.radius}"
      @click="handleClick"
      :class="[
        type ? 'xc-Button-'+type:'',
        size ? 'xc-Button-'+size:'',
        {
          'is-loading':loading,
          'is-disabled':disabled
        },
      ]"
      :disabled="props.disabled || props.loading"
      >  
      <!-- load状态内容显示 -->
      <span style="display: flex" v-if="props.loading">
        <!-- <i :class="`xc-icon-${props.type}`"/> -->
        <span>加载中...</span>
      </span>
      <!-- other插槽内容显示--预留 -->
      <span>
        <slot name="other"></slot>
      </span> 
      <!-- default插槽内容显示--文本 -->
      <span  style="display: flex; justify-content: center; align-items: center;font-size: 1.5rem;">
        <!-- text-->
        <slot></slot>   
        <span style="font-size: 1.5rem;"> {{ props.text }} </span>
      </span>    
    </van-button>
  <!-- </div> -->
</template>
<script setup name="xc-button">
  import { onMounted, defineProps, defineEmits} from 'vue'
  const props = defineProps({
    width: {//宽度：1rem  ||  100%
       type:String
    },
    height: {//高度：10rem  ||  100%
       type:String
    },
    radius:{//圆角 ：0rem
      type:String,
      default: "0.4rem",
    },
    type: {
      type: String,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "small",
    },
    text: {
      type: String,
      default: "",
    },
  })
  const emit = defineEmits(['click'])
  
  function handleClick() {
      emit('click','xc-button-handleClick')
  }
  onMounted(() => { })
</script>
<style scoped lang="less">

//暂时本文件的变量  设计确定之后赋值为全局变量即可
@button-default-bgcolor: #459ed8;
@button-default-fontsize: 1.5rem;
@button-default-color:#459ed8;


@button-radius:0.2rem;

/**button-loading-ico*/
.xc-icon-default{
  display: inline-block;
  height: 1.8rem;
  width: 1.8rem;
  background-size: cover;
  background-image: url(../../images/alone1.gif);
  margin-top:0.1rem;
  margin-right: 0.5rem;
}

.xc-icon-primary{
  display: inline-block;
  height: 1.8rem;
  width: 1.8rem;
  background-size: cover;
  background-image: url(../../images/Vector1.png);
  margin-top:0.1rem;
  margin-right: 0.5rem;
}

.xc-icon-info{
  display: inline-block;
  height: 1.8rem;
  width: 1.8rem;
  background-size: cover;
  background-image: url(../../images/Vector.png);
  margin-top:0.1rem;
  margin-right: 0.5rem;
}

.xc-icon-success{
  display: inline-block;
  height: 1.8rem;
  width: 1.8rem;
  background-size: cover;
  background-image: url(../../images/Vector.png);
  margin-top:0.1rem;
  margin-right: 0.5rem;
}
/** default */
.xc-Button-default{
  display: inline-block;
}

/**default--mini */
.xc-Button-default.xc-Button-mini{
  // display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 1rem;

  width: 8rem;
  height: 4rem;
  color: #FFFFFF;
  background: linear-gradient(92.42deg, #489CD8 -9.39%, #62A8F1 102.09%);
  box-shadow: 0rem 0.4rem 0.8rem rgba(25, 137, 255, 0.3);
  border-radius: @button-radius;
}

.xc-Button-default.xc-Button-mini:hover{
  color: #FFFFFF;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), linear-gradient(92.42deg, #489CD8 -9.39%, #62A8F1 102.09%);
  box-shadow: 0rem 0.4rem 0.8rem rgba(25, 137, 255, 0.3);
  border-radius: @button-radius;
  
}

.xc-Button-default.xc-Button-mini:active{
  color: #FFFFFF;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(92.42deg, #489CD8 -9.39%, #62A8F1 102.09%);
  box-shadow: 0rem 0.4rem 0.8rem rgba(25, 137, 255, 0.3);
  border-radius: @button-radius;
}

.xc-Button-default.xc-Button-mini.is-disabled{
  color: #FFFFFF;
  background: linear-gradient(92.42deg, #A3D0FF -9.39%, #C0DCF9 102.09%);
  box-shadow: 0rem 0.4rem 0.8rem rgba(25, 137, 255, 0.1);
  border-radius: @button-radius;
}

/**default--small */
.xc-Button-default.xc-Button-small{
  // display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 1rem;
  width: 12rem;
  height: 4rem;
  color: #FFFFFF;
  background: linear-gradient(92.42deg, #489CD8 -9.39%, #62A8F1 102.09%);
  box-shadow: 0rem 0.4rem 0.8rem rgba(25, 137, 255, 0.3);
  border-radius: @button-radius;
}

.xc-Button-default.xc-Button-small:hover{
  color: #FFFFFF;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), linear-gradient(92.42deg, #489CD8 -9.39%, #62A8F1 102.09%);
  box-shadow: 0rem 0.4rem 0.8rem rgba(25, 137, 255, 0.3);
  border-radius: @button-radius;  
}

.xc-Button-default.xc-Button-small:active{
  color: #FFFFFF;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(92.42deg, #489CD8 -9.39%, #62A8F1 102.09%);
  box-shadow: 0rem 0.4rem 0.8rem rgba(25, 137, 255, 0.3);
  border-radius: @button-radius;
}

.xc-Button-default.xc-Button-small.is-disabled{
  color: #FFFFFF;
  background: linear-gradient(92.42deg, #A3D0FF -9.39%, #C0DCF9 102.09%);
  box-shadow: 0rem 0.4rem 0.8rem rgba(25, 137, 255, 0.1);
  border-radius: @button-radius;
}

.xc-Button-primary.xc-Button-small.is-loading{
  color: #FFFFFF;
  background: linear-gradient(92.42deg, #A3D0FF -9.39%, #C0DCF9 102.09%);
  box-shadow: 0rem 0.4rem 0.8rem rgba(25, 137, 255, 0.1);
  border-radius: @button-radius;
}
/**default--middle */
.xc-Button-default.xc-Button-middle{
  // display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 1rem;
  width: 18.4rem;
  height: 4rem;
  color: #FFFFFF;
  background: linear-gradient(92.42deg, #489CD8 -9.39%, #62A8F1 102.09%);
  box-shadow: 0rem 0.4rem 0.8rem rgba(25, 137, 255, 0.3);
  border-radius: @button-radius;
}

.xc-Button-default.xc-Button-middle:hover{
  color: #FFFFFF;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), linear-gradient(92.42deg, #489CD8 -9.39%, #62A8F1 102.09%);
  box-shadow: 0rem 0.4rem 0.8rem rgba(25, 137, 255, 0.3);
  border-radius: @button-radius;
  
}

.xc-Button-default.xc-Button-middle:active{
  color: #FFFFFF;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(92.42deg, #489CD8 -9.39%, #62A8F1 102.09%);
  box-shadow: 0rem 0.4rem 0.8rem rgba(25, 137, 255, 0.3);
  border-radius: @button-radius;
}

.xc-Button-default.xc-Button-middle.is-disabled{
  color: #FFFFFF;
  background: linear-gradient(92.42deg, #A3D0FF -9.39%, #C0DCF9 102.09%);
  box-shadow: 0rem 0.4rem 0.8rem rgba(25, 137, 255, 0.1);
  border-radius: @button-radius;
}

.xc-Button-default.xc-Button-middle.is-loading{
  color: #FFFFFF;
  background: linear-gradient(92.42deg, #A3D0FF -9.39%, #C0DCF9 102.09%);
  box-shadow: 0rem 0.4rem 0.8rem rgba(25, 137, 255, 0.1);
  border-radius: @button-radius;
}
/**default--large */

.xc-Button-default.xc-Button-large{
  // display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 1rem;
  width: 100%;
  height: 4rem;
  color: #FFFFFF;
  background: linear-gradient(92.42deg, #489CD8 -9.39%, #62A8F1 102.09%);
  box-shadow: 0rem 0.4rem 0.8rem rgba(25, 137, 255, 0.3);
  border-radius: @button-radius;
}

.xc-Button-default.xc-Button-large:hover{
  color: #FFFFFF;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), linear-gradient(92.42deg, #489CD8 -9.39%, #62A8F1 102.09%);
  box-shadow: 0rem 0.4rem 0.8rem rgba(25, 137, 255, 0.3);
  border-radius: @button-radius;  
}

.xc-Button-default.xc-Button-large:active{
  color: #FFFFFF;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(92.42deg, #489CD8 -9.39%, #62A8F1 102.09%);
  box-shadow: 0rem 0.4rem 0.8rem rgba(25, 137, 255, 0.3);
  border-radius: @button-radius;
}

.xc-Button-default.xc-Button-large.is-disabled{
  color: #FFFFFF;
  background: linear-gradient(92.42deg, #A3D0FF -9.39%, #C0DCF9 102.09%);
  box-shadow: 0rem 0.4rem 0.8rem rgba(25, 137, 255, 0.1);
  border-radius: @button-radius;
}

.xc-Button-default.xc-Button-large.is-loading{
  color: #FFFFFF;
  background: linear-gradient(92.42deg, #A3D0FF -9.39%, #C0DCF9 102.09%);
  box-shadow: 0rem 0.4rem 0.8rem rgba(25, 137, 255, 0.1);
  border-radius: @button-radius;
}


/** primary */
.xc-Button-primary{
  display: inline-block;
}
/**primary--mini */
.xc-Button-primary.xc-Button-mini{
  // display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 1rem;
  width: 8rem;
  height: 4rem;
  color: #FFFFFF;
  background: #194596;
  border-radius: @button-radius;
}

.xc-Button-primary.xc-Button-mini:hover{
  color: #FFFFFF;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), #194596;
  border-radius: @button-radius;  
}

.xc-Button-primary.xc-Button-mini:active{
  color: #FFFFFF;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), #194596;
  border-radius: @button-radius;  
}

.xc-Button-primary.xc-Button-mini.is-disabled{
  color: #FFFFFF;
  background: #A3B5D5;
  border-radius: @button-radius;  
}
/**primary--small */
.xc-Button-primary.xc-Button-small{
  // display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 1rem;
  width: 12rem;
  height: 4rem;
  color: #FFFFFF;
  background: #194596;
  border-radius: @button-radius;
}

.xc-Button-primary.xc-Button-small:hover{
  color: #FFFFFF;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), #194596;
  border-radius: @button-radius;  
}

.xc-Button-primary.xc-Button-small:active{
  color: #FFFFFF;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), #194596;
  border-radius: @button-radius; 
}

.xc-Button-primary.xc-Button-small.is-disabled{
  color: #FFFFFF;
  background: #A3B5D5;
  border-radius: @button-radius; 
}

.xc-Button-primary.xc-Button-small.is-loading{
  color: #FFFFFF;
  background: #A3B5D5;
  border-radius: @button-radius; 
}
/**primary--middle */
.xc-Button-primary.xc-Button-middle{
  // display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 1rem;
  width: 18.4rem;
  height: 4rem;
  color: #FFFFFF;
  background: #194596;
  border-radius: @button-radius; 
}

.xc-Button-primary.xc-Button-middle:hover{
  color: #FFFFFF;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), #194596;
  border-radius: @button-radius;
  
}

.xc-Button-primary.xc-Button-middle:active{
  color: #FFFFFF;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), #194596;
  border-radius: @button-radius;
}

.xc-Button-primary.xc-Button-middle.is-disabled{
  color: #FFFFFF;
  background: #A3B5D5;
  border-radius: @button-radius;
}

.xc-Button-primary.xc-Button-middle.is-loading{
  color: #FFFFFF;
  background: #A3B5D5;
  border-radius: @button-radius;
}
/**primary--large */
.xc-Button-primary.xc-Button-large{
  // display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 1rem;  
  width: 100%;
  height: 4rem;
  color: #FFFFFF;
  background: #194596;
  border-radius: @button-radius;
}

.xc-Button-primary.xc-Button-large:hover{
  color: #FFFFFF;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), #194596;
  border-radius: @button-radius;  
}

.xc-Button-primary.xc-Button-large:active{
  color: #FFFFFF;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), #194596;
  border-radius: @button-radius;  
}

.xc-Button-primary.xc-Button-large.is-disabled{
  color: #FFFFFF;
  background: #A3B5D5;
  border-radius: @button-radius;  
}

.xc-Button-primary.xc-Button-large.is-loading{
  color: #FFFFFF;
  background: #A3B5D5;
  border-radius: @button-radius;  
}

/** info */
.xc-Button-info{
  display: inline-block;
}
/**info--min */
.xc-Button-info.xc-Button-mini{
  // display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.4rem;
  gap: 0.4rem;
  width: 8rem;
  height: 4rem;
  color: #333333;
  background: #FFFFFF;
  border: 0.1rem solid #D9D9D9;
  box-shadow: 0rem 0.4rem 0.8rem rgba(0, 0, 0, 0.06);
  border-radius: @button-radius;
}

.ivu-table.xc-Button-info.xc-Button-mini{
  max-width: 12rem;
  overflow-wrap: break-word;
  white-space: normal;
  height: auto;
  overflow: hidden;
}


.xc-Button-info.xc-Button-mini:hover{
  background: #E8F3FF;
  border: 0.05rem solid #489CD8;
  box-shadow: 0rem 0.4rem 0.8rem rgba(41, 144, 253, 0.1);
  border-radius: @button-radius;
  
}

.xc-Button-info.xc-Button-mini:active{
  background: #D0DEED;
  border: 0.05rem solid #489CD8;
  box-shadow: 0rem 0.4rem 0.8rem rgba(41, 144, 253, 0.1);
  border-radius: @button-radius;
}

.xc-Button-info.xc-Button-mini.is-disabled{
  background: #EEEEEE;
  border: 0.05rem solid #D9D9D9;
  border-radius: @button-radius;
}

/**info--small */
.xc-Button-info.xc-Button-small{
  // display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 1rem;
  width: 12rem;
  height: 4rem;
  color: #333333;
  background: #FFFFFF;
  border: 0.1rem solid #D9D9D9;
  box-shadow: 0rem 0.4rem 0.8rem rgba(0, 0, 0, 0.06);
  border-radius: @button-radius;
}

.xc-Button-info.xc-Button-small:hover{
  background: #E8F3FF;
  border: 0.05rem solid #489CD8;
  box-shadow: 0rem 0.4rem 0.8rem rgba(41, 144, 253, 0.1);
  border-radius: @button-radius;
  
}

.xc-Button-info.xc-Button-small:active{
  background: #D0DEED;
  border: 0.05rem solid #489CD8;
  box-shadow: 0rem 0.4rem 0.8rem rgba(41, 144, 253, 0.1);
  border-radius: @button-radius;
}

.xc-Button-info.xc-Button-small.is-disabled{
  background: #EEEEEE;
  border: 0.05rem solid #D9D9D9;
  border-radius: @button-radius;
}

.xc-Button-info.xc-Button-small.is-loading{
  background: #EEEEEE;
  border: 0.1rem solid #D9D9D9;
  border-radius: @button-radius;
}
/**info--middle */
.xc-Button-info.xc-Button-middle{
  // display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 1rem;
  width: 18.4rem;
  height: 4rem;
  color: #333333;
  background: #FFFFFF;
  border: 0.1rem solid #D9D9D9;
  box-shadow: 0rem 0.4rem 0.8rem rgba(0, 0, 0, 0.06);
  border-radius: @button-radius;
}

.xc-Button-info.xc-Button-middle:hover{
  background: #E8F3FF;
  border: 0.05rem solid #489CD8;
  box-shadow: 0rem 0.4rem 0.8rem rgba(41, 144, 253, 0.1);
  border-radius: @button-radius;
  
}

.xc-Button-info.xc-Button-middle:active{
  background: #D0DEED;
  border: 0.05rem solid #489CD8;
  box-shadow: 0rem 0.4rem 0.8rem rgba(41, 144, 253, 0.1);
  border-radius: @button-radius;
}

.xc-Button-info.xc-Button-middle.is-disabled{
  background: #EEEEEE;
  border: 0.05rem solid #D9D9D9;
  border-radius: @button-radius;
}

.xc-Button-info.xc-Button-middle.is-loading{
  background: #EEEEEE;
  border: 0.1rem solid #D9D9D9;
  border-radius: @button-radius;
}
/**info--large */
.xc-Button-info.xc-Button-large{
  // display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 1rem;
  width: 100%;
  height: 4rem;
  color: #333333;
  background: #FFFFFF;
  border: 0.1rem solid #D9D9D9;
  box-shadow: 0rem 0.4rem 0.8rem rgba(0, 0, 0, 0.06);
  border-radius: @button-radius;
}

.xc-Button-info.xc-Button-large:hover{
  background: #E8F3FF;
  border: 0.05rem solid #489CD8;
  box-shadow: 0rem 0.4rem 0.8rem rgba(41, 144, 253, 0.1);
  border-radius: @button-radius;
  
}

.xc-Button-info.xc-Button-large:active{
  background: #D0DEED;
  border: 0.05rem solid #489CD8;
  box-shadow: 0rem 0.4rem 0.8rem rgba(41, 144, 253, 0.1);
  border-radius: @button-radius;
}

.xc-Button-info.xc-Button-large.is-disabled{
  background: #EEEEEE;
  border: 0.05rem solid #D9D9D9;
  border-radius: @button-radius;
}

.xc-Button-info.xc-Button-large.is-loading{
  background: #EEEEEE;
  border: 0.05rem solid #D9D9D9;
  border-radius: @button-radius;
}


/** success */
.xc-Button-success{
  display: inline-block;
}

:deep(.xc-Button-success .ivu-btn span img){
    margin: 0rem 0.6rem 0rem 0rem;
    width: 1.4rem;
    height: 1.4rem;
}
/**success--mini */
.xc-Button-success.xc-Button-mini{
  // display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.4rem;
  gap: 0.4rem;
  width: 8rem;
  height: 4rem;
  color: #333333;
  background: #DDEBF3;
  border: 0.1rem solid #D9D9D9;
  box-shadow: 0rem 0.4rem 0.8rem rgba(0, 0, 0, 0.06);
  border-radius: @button-radius;
}
.ivu-table .xc-Button-info.xc-Button-mini{
  max-width: 12rem;
  overflow-wrap: break-word;
  white-space: normal;
  height: auto;
  overflow: hidden;
}
.xc-Button-success.xc-Button-mini:hover{
  background: #E8F3FF;
  border: 0.05rem solid #489CD8;
  box-shadow: 0rem 0.4rem 0.8rem rgba(41, 144, 253, 0.1);
  border-radius: @button-radius;
  
}

.xc-Button-success.xc-Button-mini:active{
  background: #D0DEED;
  border: 0.05rem solid #489CD8;
  box-shadow: 0rem 0.4rem 0.8rem rgba(41, 144, 253, 0.1);
  border-radius: @button-radius;
}

.xc-Button-success.xc-Button-mini.is-disabled{
  background: #EEEEEE;
  border: 0.05rem solid #D9D9D9;
  border-radius: @button-radius;
}
/**success--small */
.xc-Button-success.xc-Button-small{
  // display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 1rem;
  width: 12rem;
  height: 4rem;
  color: #333333;
  background: #DDEBF3;
  border: 0.1rem solid #D9D9D9;
  box-shadow: 0rem 0.4rem 0.8rem rgba(131, 78, 78, 0.06);
  border-radius: @button-radius;
}

.ivu-table.xc-Button-success.xc-Button-small{  
  max-width: 12rem;  
  overflow-wrap: break-word;
  white-space: normal;
  height: auto;
  overflow: hidden;
}

.xc-Button-success.xc-Button-small:hover{
  background: #E8F3FF;
  border: 0.05rem solid #489CD8;
  box-shadow: 0rem 0.4rem 0.8rem rgba(41, 144, 253, 0.1);
  border-radius: @button-radius;
  
}

.xc-Button-success.xc-Button-small:active{
  background: #D0DEED;
  border: 0.05rem solid #489CD8;
  box-shadow: 0rem 0.4rem 0.8rem rgba(41, 144, 253, 0.1);
  border-radius: @button-radius;
}

.xc-Button-success.xc-Button-small.is-disabled{
  background: #EEEEEE;
  border: 0.05rem solid #D9D9D9;
  border-radius: @button-radius;
}
/**success--middle */
.xc-Button-success.xc-Button-middle{
  // display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 1rem;
  width: 18.4rem;
  height: 4rem;
  color: #333333;
  background: #DDEBF3;
  border: 0.1rem solid #D9D9D9;
  border-radius: @button-radius;
}

.xc-Button-success.xc-Button-middle:hover{

  background: #E8F3FF;
  border: 0.05rem solid #489CD8;
  box-shadow: 0rem 0.4rem 0.8rem rgba(41, 144, 253, 0.1);
  border-radius: @button-radius;
  
}

.xc-Button-success.xc-Button-middle:active{
  color: #FFFFFF;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), #194596;
  border-radius: @button-radius;
}

.xc-Button-success.xc-Button-middle.is-disabled{
  color: #FFFFFF;
  background: #A3B5D5;
  border-radius: @button-radius;
}

.xc-Button-success.xc-Button-middle.is-loading{
  color: #FFFFFF;
  background: #A3B5D5;
  border-radius: @button-radius;
}

/**success--large */
.xc-Button-success.xc-Button-large{
  // display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 1rem;
  width: 100%;
  height: 4rem;  
  color: #333333;
  background: #DDEBF3;
  border: 0.1rem solid #D9D9D9;
  border-radius: @button-radius;
}

.xc-Button-success.xc-Button-large:hover{
  background: #E8F3FF;
  border: 0.05rem solid #489CD8;
  box-shadow: 0rem 0.4rem 0.8rem rgba(41, 144, 253, 0.1);
  border-radius: @button-radius;
}

.xc-Button-success.xc-Button-large:active{
  color: #FFFFFF;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), #194596;
  border-radius: @button-radius;
}

.xc-Button-success.xc-Button-large.is-disabled{
  color: #FFFFFF;
  background: #A3B5D5;
  border-radius: @button-radius;
}

.xc-Button-success.xc-Button-large.is-loading{
  color: #FFFFFF;
  background: #A3B5D5;
  border-radius: @button-radius;
}
</style>