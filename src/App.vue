<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './views/home';
export default {
  name: 'App',
  components: {
    Home
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
