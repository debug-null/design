<template>
  <div id="app">
    <DesignRuler
      :offset-val="offset"
      :worker-attr="workerAttr"
    />
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
