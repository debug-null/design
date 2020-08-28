<template>
  <div class="design-page">
    <div id="toolbar">
      <div class="left-operation">
        <svgIcon icon-class="fanhui1" />
        <label>素材分析</label>
      </div>
      <div class="middle-operation">
        <div class="btns" />
      </div>
      <div class="right-operation">右侧</div>
    </div>
    <div class="main-content">
      <leftPane />
      <div
        ref="middlePane"
        class="middle-pane"
      >
        <designRuler
          v-if="middleStyle.width"
          :wrapper-style="middleStyle"
          :rect-width="800"
          :rect-height="300"
        >
          dfdfd
          <div
            style="width:100px;height:100px;background-color:#ddd;position:absolute"
          />
        </designRuler>
      </div>
      <RightPane />
    </div>
  </div>
</template>
<script>

import LeftPane from './leftPane';
import RightPane from './rightPane';
import designRuler from '../../plugins';

export default {
  name: 'Home',
  components: {
    LeftPane,
    RightPane,
    designRuler
  },
  data() {
    return {
      middleStyle: {}
    };
  },
  mounted() {
    const middlePane = this.$refs.middlePane;
    this.middleStyle = {
      width: middlePane.clientWidth + 'px',
      height: middlePane.clientHeight + 'px'
    };
    console.log('mounted -> this.middleStyle', this.middleStyle);
  },
  methods: {

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
