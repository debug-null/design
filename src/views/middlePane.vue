<template>
  <div class="middle-pane">
    <div class="worker-container">
      <ul class="rules-left vertical">
        <li>100</li>
      </ul>
      <!-- <div class="worker-gide">
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
      </div> -->

    </div>
  </div>
</template>
<script>

export default {
  name: 'MiddlePane',
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
  .worker-container {
    position: absolute;
    transform-origin: 0px 0px;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    pointer-events: all;
    transition: none 0s ease 0s;
    .worker-gide {
      width: 100%;
      height: 100%;
      background-color: rgb(255, 255, 255);
      background-image: none;
      background-size: 100%;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
