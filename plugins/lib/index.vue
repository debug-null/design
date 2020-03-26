<template>
  <div class="ruler-page">
    <div class="main-content">
      <MiddlePane
        :zoom-val="zoomVal"
        :worker-attr="workerAttr"
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
  props: {
    // 画布的宽高
    workerAttr: {
      type: Object,
      default: function() {
        return {
          width: '1200px',
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
    // 边界
    offsetVal: {
      type: Object,
      default: function() {
        return {
          scrollTop: 300, // x轴默认的边界 和 滚动条移动的值
          scrollLeft: 300 // 同上
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
    }
  },
  data() {
    return {
      zoomVal: 100
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
