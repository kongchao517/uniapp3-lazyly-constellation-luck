<!--
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-05-25 16:30:49
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-31 16:21:46
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

<style></style>
