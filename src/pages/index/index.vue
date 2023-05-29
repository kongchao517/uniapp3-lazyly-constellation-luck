<!--
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-05-25 16:30:49
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-29 16:25:23
-->
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <van-button class="btn" type="primary" @click="handleBtn">主要按钮{{ data }}</van-button>
      <i class="iconfont icon-fenlei"> </i>
      <TabBar />
    </view>
  </view>
</template>

<script setup>
import TabBar from '@components/TabBar';
import { getStreetApi } from '../../api';
import useStore from '../../store';

const store = useStore();
const data = computed(() => store.count.getCount());
const handleBtn = async () => {
  store.count.setCount();
  console.log('getStreetApi', await getStreetApi({ aa: 1 }));
};
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;

    .btn button {
      background-color: red;
    }
  }
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
