<template>
  <div class="nav">
    <div v-for="(item, index) in navData" :key="item.label + index">
      <div :class="item.label === navLabel ? 'nav-flex-active' : 'nav-flex'" @click="navLabel = item.label">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
import useStore from '@/store';

const store = useStore();
// 获取12星座所有数据
const navData = computed(() => store.constellation.getAllConstella());
const navLabel = computed({
  get() {
    return store.nav.navLabel;
  },
  set(val) {
    store.nav.setNav(val);
  },
});
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  width: 100%;
  overflow-x: auto;
  .nav-flex {
    width: 120rpx;
    line-height: 80rpx;
    text-align: center;
    color: #868686;
  }
  .nav-flex-active {
    width: 120rpx;
    line-height: 80rpx;
    text-align: center;
    color: #e67d93;
  }
  &::-webkit-scrollbar {
    /*滚动条基本样式，高度*/
    width: 4px;
    height: 4px;
  }
}
</style>
