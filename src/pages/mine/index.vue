<!--
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-05-29 13:52:43
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-30 14:15:15
-->
<template>
  <div class="box">
    <match-media :min-width="375" :max-width="800">
      <view>当页面最小宽度 375px， 页面宽度最大 800px 时显示</view>
    </match-media>

    <match-media :min-height="400" :orientation="landscape">
      <view>当页面高度不小于 400px 且屏幕方向为横向时展示这里</view>
    </match-media>
  </div>
  <TabBar />
</template>

<script setup>
import TabBar from '@components/TabBar';
</script>

<style lang="scss" scoped>
.box {
  width: 1000rpx;
}
</style>
