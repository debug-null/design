<template>
  <div
    class="middle-pane"
  >
    <!-- //给ruler的宽度多一点，这样防止滑动溢出 -->
    <Ruler
      :layout-attr="{width:parseInt(workerAttr.width)*2+'px',height:parseInt(workerAttr.height)*2+'px'}"
      :move-x="scrollLeft"
      :move-y="scrollTop"
      :zoom-val="zoomVal"
    />

    <div
      class="worker-container"
    >
      <happy-scroll
        color="rgba(69, 70, 71,.8)"
        size="6"
        :scroll-top.sync="scrollTop"
        :scroll-left.sync="scrollLeft"
        resize
      >
        <div
          class="worker-gide-box"
          :style="{width:parseInt(workerAttr.width)*2+'px',height:parseInt(workerAttr.height)*2+'px'}"
        >
          <div
            class="worker-gide-wrap"
            :style="workerWrapStyle"
          >
            <div
              class="worker-gide-content"
              :style="workerAttr"
            >
              <div class="worker-gide-bg">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="smallGrid"
                      width="5"
                      height="5"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 5 0 L 0 0 0 5"
                        fill="none"
                        stroke="rgba(207, 207, 207, 0.3)"
                        stroke-width="1"
                      />
                    </pattern>
                    <pattern
                      id="grid"
                      width="25"
                      height="25"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        width="25"
                        height="25"
                        fill="url(#smallGrid)"
                      />
                      <path
                        d="M 25 0 L 0 0 0 25"
                        fill="none"
                        stroke="rgba(186, 186, 186, 0.5)"
                        stroke-width="1"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    fill="url(#grid)"
                  />
                </svg>
              </div>
              <div
                class="worker-gide-control"
              >
                <div style="text-align:Center;width:100px;height:100px;border:1px solid #000">
                  控件
                </div>
                {{ scrollTop }}
                <div style="text-align:center">
                  {{ scrollLeft }}
                </div>
              </div>
            </div>

          </div>
        </div>
      </happy-scroll>

    </div>
  </div>
</template>
<script>
import Ruler from '@/components/ruler';
import { HappyScroll } from 'vue-happy-scroll';
// 引入css，推荐将css放入main入口中引入一次即可。
import 'vue-happy-scroll/docs/happy-scroll.css';
export default {
  name: 'MiddlePane',
  components: { Ruler, HappyScroll },
  props: {
    zoomVal: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      scrollTop: 300, // x轴默认的边界 和 滚动条移动的值
      scrollLeft: 800, // 同上
      workerAttr: {
        width: '2400px',
        height: '1100px'
      },
      workerWrapStyle: {
        transform: 'scale(1)'
      }
    };
  },
  watch: {
    zoomVal: function(val) {
      this.workerWrapStyle.transform = `scale(${val / 100})`;
    }
  },
  created() {
    this.workerAttr.transform = `translate(${this.scrollLeft}px,${this.scrollTop}px)`;
  },
  mounted() {},
  methods: {
  }
};
</script>
<style scoped lang="scss">
.middle-pane {
  position: relative;
  overflow: hidden;
  background: #2c2b32;
  .worker-container {
    position: absolute;
    transform-origin: 0px 0px;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    pointer-events: all;
    transition: none 0s ease 0s;
    overflow: auto;
    .worker-gide-content {
      width: 100%;
      height: 100%;
      background-color: rgb(255, 255, 255);
      background-image: none;
      background-size: 100%;
      margin: 21px 0 0 21px;
      border-radius: 2px;
      .worker-gide-bg {
        transform-origin: center center;
        width: 100%;
        height: 100%;
        position: absolute;
        pointer-events: none;
      }
      .worker-gide-control {
        color: #000;
      }
    }
  }
}
</style>
<style lang="scss">
.middle-pane {
  .happy-scroll {
    .happy-scroll-content {
      position: relative;
    }
  }
}
</style>
