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
    <div v-for="(item, index) in list" :key="index" class="tab-bar-item" @click="switchTab(item.pagePath, index)">
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
const color = '#888888';
const selectedColor = '#538bfa';
const tabbarIndex = computed({
  get() {
    return stroe.tabbarIndex.getTabbar();
  },
  set(val) {
    stroe.tabbarIndex.setTabbar(val);
  },
});
const list = [
  {
    pagePath: '/pages/index/index',
    text: '首页',
    icon: 'icon-shouye',
  },
  {
    pagePath: '/pages/classify/index',
    text: '分类',
    icon: 'icon-fenlei',
  },
  {
    pagePath: '/pages/mine/index',
    text: '我的',
    icon: 'icon-wode',
  },
];

const switchTab = (pagePath, index) => {
  tabbarIndex.value = index + 1;
  uni.switchTab({
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
  }
}
</style>
