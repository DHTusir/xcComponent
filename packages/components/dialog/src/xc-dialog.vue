<template>
    <van-dialog v-model:show="show"></van-dialog>
</template> 
<script>
import { ref } from "vue";
export default{
  props:{

  },
  setup(){
  const show=ref(true)
  return{
    show
  }
}
}


</script>