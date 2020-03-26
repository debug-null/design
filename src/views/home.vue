<template>
  <div class="design-page">
    <div id="toolbar">
      <div class="left-operation">
        <svgIcon icon-class="fanhui1" />
        <label>素材分析</label>
      </div>
      <div class="middle-operation">
        <div class="btns">
          <div class="zoom-box">
            <span @click="reduce">-</span>
            <span>{{ zoomVal }}</span>
            <span @click="plus">+</span>
          </div>
        </div>
      </div>
      <div class="right-operation">右侧</div>
    </div>
    <div class="main-content">
      <leftPane />
      <div class="middle-pane">
        <designRuler :zoom-val="zoomVal" />
      </div>
      <RightPane />
    </div>
  </div>
</template>
<script>

import LeftPane from './leftPane';
import RightPane from './rightPane';

export default {
  name: 'Home',
  components: {
    LeftPane,
    RightPane
  },
  data() {
    return {
      zoomVal: 100
    };
  },
  methods: {
    reduce() {
      if (this.zoomVal) {
        this.zoomVal -= 10;
      }
    },
    plus() {
      if (this.zoomVal < 200) {
        this.zoomVal += 10;
      }
    }
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
        .zoom-box{
          span{
          display: inline-block;
          height: 100%;
          margin: 0 4px;
          padding: 0 4px;
          }
        }
      }
    }
    .right-operation {
      flex: 0 0 300px;
    }
  }
  .main-content {
    display: flex;
    height: calc(100% - 50px);
    color: #fff;
    .left-pane {
      background-color: #212734;
      flex: 0 0 100px;
    }
    .middle-pane {
      flex: 1;
      min-width: 0;
    }
    .right-pane {
      background-color: #212734;
      flex: 0 0 300px;
    }
  }
}
</style>
