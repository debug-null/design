<template>
  <div
    id="mb-ruler"
    class="style-ruler mb-ruler"
  >
    <!-- 水平方向 -->
    <RulerWrapper
      :vertical="false"
      :width="width"
      :height="thick"
      :is-show-refer-line="isShowReferLine"
      :thick="thick"
      :start="startX"
      :lines="horLineArr"
      :select-start="shadow.x"
      :select-length="shadow.width"
      :scale="scale"
      :palette="palette"
      :canvas-configs="canvasConfigs"
      @onLineChange="handleLineChange"
    />
    <!-- 竖直方向 -->
    <RulerWrapper
      :vertical="true"
      :width="thick"
      :height="height"
      :is-show-refer-line="isShowReferLine"
      :thick="thick"
      :start="startY"
      :lines="verLineArr"
      :select-start="shadow.y"
      :select-length="shadow.height"
      :scale="scale"
      :palette="palette"
      :canvas-configs="canvasConfigs"
      @onLineChange="handleLineChange"
    />
    <a
      class="corner"
      :class="cornerActiveClass"
      :style="cornerStyle"
      @click="onCornerClick"
    />
  </div>
</template>

<script>
import RulerWrapper from './rulerWrapper.vue';
export default {
  name: 'SketchRuler',
  components: {
    RulerWrapper
  },
  props: {
    scale: {
      type: Number,
      default: 1
    },
    ratio: {
      type: Number,
      default: window.devicePixelRatio || 1
    },
    thick: {
      type: Number,
      default: 16
    },
    width: Number,
    height: Number,
    startX: {
      type: Number,
      default: 0
    },
    startY: {
      type: Number,
      default: 0
    },
    shadow: {
      type: Object,
      default: () => {
        return {
          x: 200,
          y: 100,
          width: 200,
          height: 400
        };
      }
    },
    horLineArr: {
      type: Array,
      default: () => {
        return [];
      }
    },
    verLineArr: {
      type: Array,
      default: () => {
        return [];
      }
    },
    cornerActive: Boolean,
    lang: String,
    isOpenMenuFeature: false,
    handleShowRuler: {
      type: Function,
      default: () => {
        return () => {};
      }
    },
    isShowReferLine: {
      type: Boolean,
      default: true
    },
    handleShowReferLine: {
      type: Function,
      default: () => {
        return () => {};
      }
    },
    palette: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      vertical: true
    };
  },
  computed: {
    cornerActiveClass() {
      return this.cornerActive ? ' active' : '';
    },
    cornerStyle() {
      return {
        backgroundColor: this.palette.bgColor,
        width: this.thick + 'px',
        height: this.thick + 'px',
        borderRight: `1px solid ${this.palette.borderColor}`,
        borderBottom: `1px solid ${this.palette.borderColor}`
      };
    },
    canvasConfigs() {
      const {
        bgColor,
        longfgColor,
        shortfgColor,
        fontColor,
        shadowColor,
        lineColor,
        borderColor,
        cornerActiveColor
      } = this.palette;
      return {
        ratio: this.ratio,
        bgColor,
        longfgColor,
        shortfgColor,
        fontColor,
        shadowColor,
        lineColor,
        borderColor,
        cornerActiveColor
      };
    }
  },
  methods: {
    onCornerClick(e) {
      this.$emit('onCornerClick', e);
    },
    handleLineChange(arr, vertical) {
      const newLines = vertical
        ? { h: this.horLineArr, v: [...arr] }
        : { h: [...arr], v: this.verLineArr };
      this.$emit('handleLine', newLines);
    }
  }
};
</script>

<style lang="scss" scoped>
.style-ruler {
  position: absolute;
  width: 100%; /* scrollbar width */
  height: 100%;
  z-index: 3; /* 需要比resizer高 */
  pointer-events: none;
  font-size: 12px;
  overflow: hidden;
  span {
    line-height: 1;
  }
}
.corner {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: auto;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-sizing: content-box;
  // &.active {
  //     background-color: ${props => props.cornerActiveColor} !important;
  // }
  pointer-events: auto;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-sizing: content-box;
}

</style>
