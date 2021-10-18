<template>
  <div class="poptip btn" aria-controls="弹出气泡" @click="handleRouter">{{btnName}}</div>
</template>

<script>
export default {
  props: {
    btnName: {
      type: String,
      default: 'popttp'
    },
    routeView: {
      type: String,
      default: ''
    },
  },
  methods: {
    handleRouter() {
      console.log('要跳转的路由', this.routeView)
      if(!this.routeView) return
      this.$router.push({
        name: this.routeView
      })
    }
  }
}
</script>

<style lang="less" scoped>
@poptipBg: #30363d;
@color: #fff;
@triangle: 8px;
@distance: -21px;
.poptip {
  position: relative;
  z-index: 101;
  &::before,
  &::after {
    visibility: hidden;
    opacity: 0;
    transform: translate3d(0, 0, 0);
    transition: all 0.3s ease 0.2s;
    box-sizing: border-box;
  }
  &::before {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: @triangle @triangle 0 @triangle;
    border-color: @poptipBg transparent transparent transparent;
    top: -10px;
    left: calc(50% - (@triangle));
    // transform: translateX(0%) translateY(@distance);
  }
  &::after {
    font-size: 14px;
    color: @color;
    content: attr(aria-controls);
    position: absolute;
    padding: 6px 12px;
    white-space: nowrap;
    z-index: -1;
    left: 50%;
    bottom: 60%;
    transform: translateX(-50%) translateY(@distance);
    background: @poptipBg;
    line-height: 1;
    border-radius: 2px;
  }
  &:hover::before,
  &:hover::after {
    visibility: visible;
    opacity: 1;
  }
}
.btn {
  max-width: 100px;
  line-height: 1.5;
  padding: 5px 10px;
  color: #fff;
  background: #00adb5;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
}

</style>