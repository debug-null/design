<template>
  <div id="app">
    <div
      class="box"
      style="display:flex"
    >
      <div
        class="left"
        style="width:100px;flex:0 0 100px;background-color:#ddd"
      >左侧</div>
      <div
        class="middle"
        style="flex: auto;height:500px;min-width:400px"
      >
        <!-- <div style="background-color:#fdd">dfd</div> -->
        <DesignRuler
          :offset-val="offset"
          :worker-attr="workerAttr"
        >
          dfd发的发生
        </DesignRuler>
      </div>
      <div
        class="left"
        style="width:300px;flex:0 0 100px;background-color:#ddd"
      >➡右侧</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      workerAttr: {
        width: '800px',
        height: '600px'
      },
      offset: {
        scrollTop: 400, // x轴默认的边界 和 滚动条移动的值
        scrollLeft: 400 // 同上
      }
    };
  }
};
</script>
<style lang="scss">
#app {
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  transition: all 0.2s ease-in-out 0s;
}
</style>
