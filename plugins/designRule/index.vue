<template>
  <div
    class="wrapper"
    :style="wrapperStyle"
  >
    <SketchRule
      :lang="lang"
      :thick="thick"
      :scale="scale"
      :width="parseInt(wrapperStyle.width)"
      :height="parseInt(wrapperStyle.height)"
      :start-x="startX"
      :start-y="startY"
      :shadow="shadow"
      :hor-line-arr="lines.h"
      :ver-line-arr="lines.v"
      :corner-active="true"
      :palette="paletteObjFormatter"
      @handleLine="handleLine"
      @onCornerClick="handleCornerClick"
    />
    <div
      id="screens"
      ref="screensRef"
      @wheel="handleWheel"
      @scroll="handleScroll"
    >
      <div
        ref="containerRef"
        class="screen-container"
      >
        <div
          id="canvas"
          :style="canvasStyle"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import SketchRule from './sketchRuler.vue';

export default Vue.extend({
  components: {
    SketchRule
  },
  props: {
    // 画布父级区域
    wrapperStyle: {
      type: Object,
      default: () => {
        return {
          width: '1000px',
          height: '800px'
        };
      }
    },
    rectWidth: {
      type: Number,
      default: 1000
    },
    rectHeight: {
      type: Number,
      default: 800
    },
    paletteObj: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      scale: 1, // 缩放的倍数
      startX: 0,
      startY: 0,
      lines: {
        // h: [0, 200],
        // v: [100, 200]
      },
      thick: 20,
      lang: 'zh-CN', // 中英文
      isShowRuler: true, // 显示标尺
      isShowReferLine: true // 显示参考线
    };
  },
  computed: {
    shadow() {
      return {
        x: 0,
        y: 0,
        width: this.rectWidth,
        height: this.rectHeight
      };
    },
    canvasStyle() {
      return {
        width: this.rectWidth + 'px',
        height: this.rectHeight + 'px',
        transform: `scale(${this.scale})`
      };
    },
    paletteObjFormatter() {
      return Object.assign({
        bgColor: '#2c2c32',
        longfgColor: '#fff', // 刻度线
        shortfgColor: '#fff', // 刻度-分割线
        fontColor: '#fff',
        shadowColor: '#f1f1f1', // 区块跟随标识-颜色
        lineColor: '#206425', // 参考线
        borderColor: '#645f5f', // 回到原点颜色
        cornerActiveColor: 'blue'
      }, this.paletteObj);
    }
  },
  mounted() {
    // 滚动居中
    this.$refs.screensRef.scrollLeft =
      this.$refs.containerRef.getBoundingClientRect().width / 2 - 300; // 300 = #screens.width / 2
  },
  methods: {
    handleLine(lines) {
      this.lines = lines;
    },
    handleCornerClick() {
      this.$refs.screensRef.scrollLeft =
        this.$refs.containerRef.getBoundingClientRect().width / 2 - 150;
    },
    handleScroll() {
      const screensRect = document
        .querySelector('#screens')
        .getBoundingClientRect();
      const canvasRect = document
        .querySelector('#canvas')
        .getBoundingClientRect();

      // 标尺开始的刻度
      const startX =
        (screensRect.left + this.thick - canvasRect.left) / this.scale;
      const startY =
        (screensRect.top + this.thick - canvasRect.top) / this.scale;

      this.startX = startX;
      this.startY = startY;
    },
    // 控制缩放值
    handleWheel(e) {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const nextScale = parseFloat(
          Math.max(0.2, this.scale - e.deltaY / 500).toFixed(2)
        );
        this.scale = nextScale;
        console.log('handleWheel -> this.scale', this.scale);
      }
      this.$nextTick(() => {
        this.handleScroll();
      });
    }
  }
});
</script>
<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  overflow: hidden;
}

body * {
  box-sizing: border-box;
  user-select: none;
}

.wrapper {
  position: absolute;
  width: 1500px;
  height: 95%;
  border: 1px solid #dadadc;
}

#screens {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #151515;

  /*滚动条的宽度*/
  &::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }
  /*外层轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果*/
  &::-webkit-scrollbar-track {
    width: 6px;
    background-color: #0d1b20;
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius: 2em;
  }

  /*滚动条的设置*/

  &::-webkit-scrollbar-thumb {
    background-color: #606d71;
    background-clip: padding-box;
    min-height: 28px;
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius: 2em;
  }
  /*滚动条移上去的背景*/

  &::-webkit-scrollbar-thumb:hover {
    background-color: #fff;
  }
}

.screen-container {
  position: absolute;
  width: 5000px;
  height: 3000px;
}

.scale-value {
  position: absolute;
  left: 0;
  bottom: 100%;
}
#canvas {
  position: absolute;
  top: 80px;
  left: 50%;
  margin-left: -80px;
  width: 600px;
  height: 800px;
  background: lightblue;
  transform-origin: 50% 0;
}
</style>
