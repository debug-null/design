<template>
  <div class="ruler-page">
    <div class="main-content">
      <MiddlePane
        :zoom-val="zoomVal"
        :worker-attr="workerAttr"
        :offset-val="offsetVal"
      />
    </div>
  </div>
</template>
<script>
import MiddlePane from './middlePane';
export default {
  name: 'Home',
  components: {
    MiddlePane
  },
  data() {
    return {
      zoomVal: 100,
      // 画布的宽高
      workerAttr: {
        width: '1200px',
        height: '800px'
      },
      // 边界
      offsetVal: {
        type: Object,
        default: function() {
          return {
            scrollTop: 300, // x轴默认的边界 和 滚动条移动的值
            scrollLeft: 300 // 同上
          };
        }
      }
    };
  },
  methods: {
    reduce() {
      if (this.zoomVal) {
        this.zoomVal -= 10;
      }
    },
    plus() {
      if (this.zoomVal < 200) {
        this.zoomVal += 10;
      }
    }
  }
};
</script>
<style scoped lang="scss">
.ruler-page {
  height: 100%;
  font-size: 14px;
  .main-content {
    display: flex;
    height: 100%;
    color: #fff;
    .middle-pane {
      flex: 1;
    }

  }
}
</style>
