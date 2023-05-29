<!--
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-05-29 13:52:30
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-29 15:11:13
-->
<template>
  分类
  <map class="map" :latitude="latitude" :longitude="longitude" :markers="covers" @markertap="markertap"> </map>

  <TabBar />
</template>

<script setup>
import TabBar from '@components/TabBar';

const latitude = 39.909;
const longitude = 116.39742;
const covers = [
  {
    id: 1,
    latitude: 39.909,
    longitude: 116.39742,
    // iconPath: '../../static/logo.png',
    width: 20, // 宽
    height: 20, // 高
    title: '你在哪了', // 标注点名
  },
  {
    id: 2,
    latitude: 39.9,
    longitude: 116.39,
    // iconPath: '../../static/logo.png',
    width: 20, // 宽
    height: 20, // 高
    title: '你在哪了', // 标注点名
  },
];
const markertap = (markerId) => {
  console.log('111', markerId);
};
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 800rpx;
}
</style>
