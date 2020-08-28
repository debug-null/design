<template>
  <div class="ruler-page">
    <div class="main-content">
      <MiddlePane
        :zoom-val="zoomVal"
        :offset-val="offsetVal"
        :pane-style="paneStyle"
        :rule-attr-style="ruleAttrStyle"
      >
        <slot />
      </MiddlePane>
    </div>
  </div>
</template>
<script>
import MiddlePane from './middlePane';
export default {
  name: 'DesignRuler',
  components: {
    MiddlePane
  },
  provide() {
    return {
      canvasStyle: this.canvasStyle
    };
  },
  props: {
    // 画布的宽高
    canvasStyle: {
      type: Object,
      default: function() {
        return {
          width: '1000px',
          height: '800px'
        };
      }
    },
    // 面板样式
    paneStyle: {
      type: Object,
      default: () => {
        return {
          backgroundColor: '#2c2b32'
        };
      }
    },
    // 边界：也就是画布区域 在整个制图区的位置
    offsetVal: {
      type: Object,
      default: function() {
        return {
          scrollTop: 800, // x轴默认的边界
          scrollLeft: 1000 // 同上
        };
      }
    },
    // 标尺属性样式
    ruleAttrStyle: {
      type: Object,
      default: function() {
        return {
          indicatorLineWidth: '1px',
          indicatorLineColor: '#fb4e43'
        };
      }
    },
    // 缩放的大小
    zoomVal: {
      type: Number,
      default: 0
    }
  }
};
</script>
<style scoped lang="scss">
.ruler-page {
  width: 100%;
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
