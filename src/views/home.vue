<template>
  <div class="design-page">
    <div id="toolbar">
      <div class="left-operation">
        <svgIcon icon-class="fanhui1" />
        <label>素材分析</label>
      </div>
      <div class="middle-operation">
        <div class="btns">操作</div>
      </div>
      <div class="right-operation">右侧</div>
    </div>
    <div class="main-content">
      <leftPane />
      <MiddlePane />
      <RightPane />
    </div>
  </div>
</template>
<script>

import LeftPane from './leftPane';
import MiddlePane from './middlePane';
import RightPane from './rightPane';

export default {
  name: 'Home',
  components: {
    LeftPane,
    MiddlePane,
    RightPane
  }
};
</script>
<style scoped lang="scss">
.design-page {
  height: 100%;
  font-size: 14px;
  #toolbar {
    display: flex;
    height: 40px;
    background-color: #343e51;
    color: #fff;
    line-height: 40px;
    .left-operation {
      flex: 0 0 100px;
      label{
        margin-left: 6px;
      }
    }
    .middle-operation {
      flex: 1;
      .btns {
        text-align: center;
      }
    }
    .right-operation {
      flex: 0 0 300px;
    }
  }
  .main-content {
    display: flex;
    height: 100%;
    color: #fff;
    .left-pane {
      background-color: #212734;
      flex: 0 0 100px;
    }
    .middle-pane {
      flex: 1;
      // background-color: #191f28;
    }
    .right-pane {
      background-color: #212734;
      flex: 0 0 300px;
    }
  }
}
</style>
