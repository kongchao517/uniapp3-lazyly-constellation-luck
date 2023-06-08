<!--
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-05-29 11:41:08
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-29 14:39:36
-->
<template>
  <div class="tab-bar">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="tab-bar-item"
      @click="switchTab(item.pagePath, index, item.param)"
    >
      <div :style="{ color: index + 1 === tabbarIndex ? selectedColor : color }">
        <i :class="`iconfont ${item.icon}`"></i>
        <div class="tab_text">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useStore from '../../store';

const stroe = useStore();
const color = '#e1e1e1';
const selectedColor = '#e07d93';
const tabbarIndex = computed({
  get() {
    return stroe.tabbar.getTabbar();
  },
  set(val) {
    stroe.tabbar.setTabbar(val);
  },
});
const list = [
  {
    pagePath: '/pages/Today/index',
    text: '今天',
    param: 'toDay',
    icon: 'icon-jintian',
  },
  {
    pagePath: '/pages/Tomorrow/index',
    text: '明天',
    param: 'tomorrow',
    icon: 'icon-biaozhundaxiaotubiao-',
  },
  {
    pagePath: '/pages/Week/index',
    text: '本周',
    param: 'week',
    icon: 'icon-benzhou',
  },
  {
    pagePath: '/pages/Month/index',
    text: '本月',
    param: 'month',
    icon: 'icon-benyue',
  },
  {
    pagePath: '/pages/Year/index',
    text: '本年',
    param: 'year',
    icon: 'icon-bennian',
  },
];

const switchTab = (pagePath, index, tabbarLabel) => {
  tabbarIndex.value = index + 1;
  stroe.tabbar.setTabbarLabel(tabbarLabel);
  uni.reLaunch({
    url: pagePath,
  });
};
</script>

<style lang="scss" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100rpx;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: env(safe-area-inset-bottom); // 适配iphoneX的底部

  .tab-bar-item {
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 12px;

    .iconfont {
      font-size: 24px;
    }
  }
}
</style>
