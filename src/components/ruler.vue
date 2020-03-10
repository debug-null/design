
<template>
  <div
    ref="rulerWrapper"
    class="ruler-wrapper"
    :style="{width:'2200px',height:'1600px'}"
  >
    <div class="ruler-box">
      <ul class="ruler horizontal">
        <li
          v-for="(item, index) in xScale"
          :key="index"
          :style="{width:'50px',marginLeft: '49px',flexBasis: '50px'}"
        >
          <span>{{ item.id }}</span>
        </li>
      </ul>
      <ul class="ruler vertical">
        <li
          v-for="(item, index) in yScale"
          :key="index"
          :style="{height:'50px',marginTop: '49px',flexBasis: '50px'}"
        >
          <span>{{ item.id }}</span>
        </li>
      </ul>
    </div>
    <div class="content-box">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Ruler',
  data() {
    return {
      setpNum: 100, // 间隔数
      xScale: [],
      yScale: []
    };
  },
  mounted() {
    this.initRuler();
  },
  methods: {
    initRuler() {
      const rulerWrapper = this.$refs.rulerWrapper;
      console.dir(rulerWrapper);
      const wrapperWidth = rulerWrapper.offsetWidth;
      const wrapperHeight = rulerWrapper.offsetHeight;
      this.getCalcRevise(this.xScale, wrapperWidth);
      this.getCalcRevise(this.yScale, wrapperHeight);
    },
    // 构建刻度
    getCalcRevise(array, length) {
      console.log('getCalcRevise -> array, length', array, length);
      for (let i = 0; i <= length; i += 1) {
        if (i % this.setpNum === 0) {
          array.push({
            id: i
          });
        }
      }
    }
  }
};
</script>

<style lang="scss">
.ruler-wrapper {
  position: absolute;
  pointer-events: none;
  left: 0px;
  top: 0px;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .ruler {
    position: absolute;
    overflow: hidden;
    padding: 0;
    margin: 0;
    z-index: 1;
    li {
      margin-top: 2px;
      height: 10px;
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: 51px;
      span {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.5);
      }
    }
    &.vertical {
      top: 0px;
      bottom: 0;
      left: 0;
      background-size: 4px 5px !important;
      cursor: row-resize;
      background: linear-gradient(
          to bottom,
          transparent 4px,
          rgba(255, 255, 255, 0.5) 1px
        )
        repeat-y;
      background-color: rgba(44, 44, 50, 1);
      width: 20px;
      li {
        width: 8px;
        height: 51px;
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 51px;
        margin: 49px 0 0 4px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        position: relative;
        &::before {
          content: "";
          box-sizing: border-box;
          position: absolute;
          background: rgba(255, 255, 255, 0.5);
          width: 4px;
          height: 1px;
          top: 0px;
          left: 0;
        }
        span {
          display: block;
          position: absolute;
          width: 100px;
          height: 55px;
          right: -72px;
          bottom: 18px;
          line-height: 9px;
          text-align: right;
          transform: rotate(-90deg);
        }
      }
    }
    &.horizontal {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      top: 0;
      right: 0;
      left: 20px;
      background-size: 5px 4px !important;
      cursor: col-resize;
      z-index: 1;
      background: linear-gradient(
          to right,
          transparent 4px,
          rgba(255, 255, 255, 0.5) 1px
        )
        repeat-x;
      background-color: rgba(44, 44, 50, 1);
      height: 20px;
      li {
        position: relative;
        border-right: 1px solid transparent;
        border-right-color: rgba(255, 255, 255, 0.5);
        margin: 4px 0 0 49px;
        span {
          position: absolute;
          left: -46px;
          &::before {
            content: "";
            position: absolute;
            width: 1px;
            height: 8px;
            display: block;
            top: 0;
            background: rgba(255, 255, 255, 0.5);
            left: -49px;
          }
        }
      }
    }
  }
}
</style>
