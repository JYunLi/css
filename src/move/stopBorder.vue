<template>
  <div class="button_container">
    <div class="button">
      <div class="button-content">
        hover me to change
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'stopBorder'
}
</script>

<style lang="less" scoped>
.button_container {
  padding: 10px;
  .button {
    width: 200px;
    height: 60px;
    margin: 30px auto;
    line-height: 60px;
    text-align: center;
    position: relative;
    background: #fff;
    box-sizing: border-box;
    cursor: pointer;
    &::before {
      content: '';
      width: 0;
      height: 0;
      background: #00adb5;
      position: absolute;
      top: -1px;
      right: -1px;
      z-index: 1;
      transition: width .5s, height .5s;
    }
    &::after {
      content: '';
      width: 0;
      height: 0;
      background: #00adb5;
      position: absolute;
      left: -1px;
      bottom: -1px;
      z-index: 1;
      transition: width .5s, height .5s;
    }
    &:hover::before {
      width: calc(100% + 2px);
      height: calc(100% + 2px);
    }
    &:hover::after {
      width: calc(100% + 2px);
      height: calc(100% + 2px);
    }
    .button-content {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      background: #fff;  
    }
  }
}
</style>