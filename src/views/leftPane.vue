<template>
  <div class="left-pane">
    <div class="library-group">
      <div
        class="library-category-title"
        @click="contentHide"
      >
        <svgIcon icon-class="xiala" />
        <span>基本</span>
      </div>
      <div class="library-category-content">
        <div class="item">
          <div>
            <div class="library-icon">
              <svgIcon icon-class="video" />
            </div>
            <label>视频</label>
          </div>
        </div>
        <div class="item">
          <div>
            <div class="library-icon">
              <svgIcon icon-class="video" />
            </div>
            <label>音频</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LeftPane',
  methods: {
    contentHide(e) {
      console.log('contentHide -> e', e);
      const content = e.target.parentNode.nextElementSibling;
      console.dir(content);
      if (content.offsetHeight) {
        content.style.height = '0px';
      } else {
        content.style.height = '220px';
      }
    }
  }
};
</script>
<style scoped lang="scss">
.left-pane {
  .library-group {
    .library-category-title {
      font-size: 14px;
      padding: 10px;
      background-color: #282e3e;
      cursor: pointer;
      span {
        margin-left: 4px;
      }
    }
    .library-category-content {
      height: 220px;
      overflow: hidden;
      transition: all 1s;
      .item {
        display: flex;
        width: 100%;
        height: 86px;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        box-sizing: border-box;
        .library-icon {
          .svg-icon {
            width: 30px;
            height: 30px;
          }
         font-size: 12px;
        }
      }
      .item:hover {
        border: 1px solid #fff;
      }
    }
  }
}
</style>
