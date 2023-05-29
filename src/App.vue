<!--
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-05-25 16:30:49
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-29 14:36:55
-->
<template>
  <div></div>
</template>
<script>
// 只能在App.vue里监听应用的生命周期
export default {
  // 使用自定义tabbar 关闭自带tabbar
  onLaunch() {
    uni.hideTabBar();
    console.log('App Launch');
  },
};
</script>

<style>
/*每个页面公共css */
@import 'wxcomponents/vant/common/index.wxss';

#app {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
