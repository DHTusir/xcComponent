<script>
import { ref ,watch} from "vue";
import { showToast ,showFailToast} from 'vant';
import 'vant/es/toast/style';
export default {
  props: {
    maxCount: {
      // 图片张数
      type: Number,
      default: 6,
    },
  },
  
  setup() {
    const onOversize = (file) => {
        console.log('文件大小不能超过 500kb')
        showFailToast("文件大小不能超过 500kb");
    };
    // 上传前置处理
    const beforeRead = (file) => {
      if (Array.isArray(file)) {
        file.forEach((item) => {
          if (item.type !== "image/jpeg") {
            showToast("请上传 image 格式图片");
            return false;
          }
        });
        if (file.type !== "image/jpeg") {
            showToast("请上传 image 格式图片");
          return false;
        }
      }
      return true;
    };

    return {


      onOversize,
      beforeRead,
    };
  },
};
</script>
<template>
  <div class="xc-upload">
    <van-uploader
      :before-read="beforeRead"
      accept="image/*"
      multiple
      :max-count="maxCount"
      :max-size="500 * 1024"
      @oversize="onOversize"
      v-bind="$attrs"
    >
    </van-uploader>
  </div>
</template>

