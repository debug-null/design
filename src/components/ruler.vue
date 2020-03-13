
<template>
  <div
    ref="rulerWrapper"
    class="ruler-wrapper"
    :style="layoutAttr"
  >
    <div class="ruler-box">
      <div class="horizontal-box">
        <ul
          ref="horizontal"
          class="ruler horizontal"
          :style="xStyleFormatter"
          @mousemove="horizontalMouseMove"
          @mouseleave="horizontalMouseleave"
          @click="indicatorClick('x')"
        >
          <li
            v-for="(item, index) in xScale"
            :key="index"
            :style="{width:'50px',marginLeft: '49px',flexBasis: '50px'}"
          >
            <span>{{ item.id }}</span>
          </li>
        </ul>
        <div
          v-show="xIndicator"
          class="indicator"
          :style="{left: xIndicator + 20 + 'px'}"
        >
          <span>{{ xIndicator+moveX }}</span>
        </div>
        <div
          ref="xLines"
          class="lines"
        />
      </div>

      <div class="vertical-box">
        <ul
          ref="vertical"
          class="ruler vertical"
          :style="yStyleFormatter"
          @mousemove="verticalMouseMove"
          @mouseleave="verticalMouseleave"
          @click="indicatorClick('y')"
        >
          <li
            v-for="(item, index) in yScale"
            :key="index"
            :style="{height:'50px',marginTop: '49px',flexBasis: '50px'}"
          >
            <span>{{ item.id }}</span>
          </li>
        </ul>
        <div
          v-show="yIndicator"
          class="indicator"
          :style="{top: yIndicator + 20 + 'px'}"
        >
          <span>{{ yIndicator+moveY }}</span>
        </div>
        <div
          ref="yLines"
          class="lines"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Ruler',
  props: {
    // 标尺的尺寸
    layoutAttr: {
      type: Object,
      default: function() {
        return {
          width: '1000px',
          height: '800px'
        };
      }
    },
    // x 轴需要移动的距离
    moveX: {
      type: Number,
      default: 0
    },
    // y 轴需要移动的距离
    moveY: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      setpNum: 100, // 间隔数
      xScale: [],
      yScale: [],
      offsetX: 0, // 偏移距离
      offsetY: 0,
      xIndicator: 0, // x 指示
      yIndicator: 0
    };
  },
  computed: {
    xStyleFormatter() {
      const translateX = this.moveX;
      return {
        width: this.layoutAttr.width,
        transform: `translate(-${translateX}px, 0)`
      };
    },
    yStyleFormatter() {
      const translateY = this.moveY;
      return {
        height: this.layoutAttr.height,
        transform: `translate(0px, -${translateY}px)`
      };
    }
  },
  mounted() {
    this.initRuler();
  },
  methods: {
    initRuler() {
      this.$nextTick(() => {
        const rulerWrapper = this.$refs.rulerWrapper;
        console.dir(rulerWrapper);
        const wrapperWidth = rulerWrapper.offsetWidth;
        const wrapperHeight = rulerWrapper.offsetHeight;
        this.getCalcRevise(this.xScale, wrapperWidth);
        this.getCalcRevise(this.yScale, wrapperHeight);
        this.getOffsetDistance();
        // 绑定删除辅助线事件
        this.delIndicatorLine('xLines');
        this.delIndicatorLine('yLines');
      });
    },
    // 获取偏移距离
    getOffsetDistance() {
      this.offsetX = this.$refs.horizontal.getBoundingClientRect().x;
      this.offsetY = this.$refs.vertical.getBoundingClientRect().y;
    },
    // 构建刻度
    getCalcRevise(array, length) {
      for (let i = 0; i <= length; i += 1) {
        if (i % this.setpNum === 0) {
          array.push({
            id: i
          });
        }
      }
    },
    horizontalMouseMove(e) {
      this.xIndicator = e.pageX - this.offsetX;
    },
    horizontalMouseleave() {
      this.xIndicator = 0;
    },
    verticalMouseMove(e) {
      this.yIndicator = e.pageY - this.offsetY;
    },
    verticalMouseleave() {
      this.yIndicator = 0;
    },
    // 点击生成辅助线
    indicatorClick(direction) {
      const linesClassName = direction + 'Lines';
      const indicator = direction + 'Indicator';
      const lines = this.$refs[linesClassName];
      const Line = document.createElement('div');
      Line.className = 'line';
      if (direction === 'x') {
        Line.style.left = `${this[indicator] + 20}px`;
      } else {
        Line.style.top = `${this[indicator] + 20}px`;
      }
      lines.appendChild(Line);
    },
    // 点击删除辅助线
    delIndicatorLine(lines) {
      const linesDom = this.$refs[lines];
      linesDom.addEventListener('click', function(e) {
        if (e.target.className === 'line') {
          e.target.remove();
        }
      });
    }
  }
};
</script>

<style lang="scss">
.ruler-wrapper {
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
      top: 20px;
      bottom: 0;
      left: 0;
      background-size: 4px 5px !important;
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

  .horizontal-box,
  .vertical-box {
    position: relative;
    .indicator {
      position: absolute;
      top: 22px;
      left: 24px;
      z-index: 1;
      span {
        color: #fff;
        background-color: #2c2b32;
        padding: 2px 10px;
        font-size: 12px;
        border-radius: 2px;
        display: inline-block;
      }
    }
    .lines{
      .line{
        position: absolute;
        top: 0;
        left: 0px;

        background-color: #363e50;
        opacity: 0.5;
        z-index: 1
      }

    }
  }
  .horizontal-box {
    .indicator {
      height: 100vh;
      width: 1px;
      background-color: #363e50;
      opacity: 0.5;
    }
    .lines{
      .line{
        height: 100vh;
        width: 1px;
        cursor: col-resize;
      }
    }
  }
  .vertical-box {
    .indicator {
      height: 1px;
      width: 100%;
      background-color: #363e50;
      opacity: 0.5;
    }
     .lines{
      .line{
        height: 1px;
        width: 100%;
        cursor: row-resize;

      }
    }
  }
}
</style>
