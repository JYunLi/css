<template>
  <div class="home">
    <hoverToPopup class="mt"></hoverToPopup>
    <hoverToPopup class="mt" :btnName="'手风琴'" :routeView="'accordingImg'"></hoverToPopup>
    <hoverToPopup class="mt" :btnName="'悬停背景动画'" :routeView="'stopBg'"></hoverToPopup>
    <hoverToPopup class="mt" :btnName="'悬停边框动画'" :routeView="'stopBorder'"></hoverToPopup>
    <hoverToPopup class="mt" :btnName="'图片闪光'" :routeView="'imgFlashLight'"></hoverToPopup>
    <hoverToPopup class="mt" :btnName="'加载loading'" :routeView="'loading'"></hoverToPopup>
  </div>
</template>

<script>

import hoverToPopup from '@/move/hoverToPopup.vue'

export default {
  name: 'home',
  components: {
    hoverToPopup
  }
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  .mt {
    margin-top: 10px;
  }
}
</style>