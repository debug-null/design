<template>
  <div class="middle-pane">

    <happy-scroll
      color="rgba(69, 70, 71,.8)"
      size="6"
    >
      <Ruler>
        <div class="worker-container">
          <div
            class="worker-gide"
            :style="{width:'1200px',height:'800px'}"
          >
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
        </div>
      </Ruler>

    </happy-scroll>

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
  data() {
    return {

    };
  },
  mounted() {

  },
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
    .worker-gide {
      width: 100%;
      height: 100%;
      background-color: rgb(255, 255, 255);
      background-image: none;
      background-size: 100%;
      margin: 21px 0 0 21px;
    }
  }
}
</style>
<style lang="scss">
.middle-pane{
  .happy-scroll{
    .happy-scroll-content{
      position: relative;
    }
    }
}

</style>
