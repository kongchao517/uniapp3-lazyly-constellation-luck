<template>
  <div class="hh">
    <NavBars />
    <TabBar />
    <div class="box">
      <div class="img-box">
        <img :src="publicNavDate.images" class="img" />
        <div class="img-box-font">{{ publicNavDate.label }}</div>
        <div class="img-box-right">{{ publicNavDate.start }} ~ {{ publicNavDate.end }}</div>
      </div>
      <div class="box-date">
        <div class="box-date-font">
          {{ PublicConstellation.label }}
        </div>
        <div class="box-date-data">
          {{ PublicConstellation.date }}
        </div>
      </div>
      <div v-if="PublicConstellation.data" class="fortune">
        <template v-for="(item, index) in PublicConstellation.data" :key="item.label + index">
          <div v-if="item.type === 'score'" class="fortune-type-score">
            <div class="fortune-type-score-rate">{{ item.label }}:</div>
            <div class="xx">
              <uni-rate :max="10" readonly :value="item.props / 10" allow-half active-color="#e47e91" />
            </div>
          </div>
          <div v-if="item.type === 'across'" class="fortune-type-score">
            <div class="fortune-type-score-rate">{{ item.label }}:</div>
            <div class="xx">
              {{ item.props }}
            </div>
          </div>
          <div v-if="item.type === ''" class="fortune-type-p">
            <div class="fortune-type-p-btn">{{ item.label }}</div>
            <div class="fortune-type-p-font">
              {{ item.props }}
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBars from '../NavBars';
import TabBar from '../TabBar';
import useStore from '../../store';
import { getAll } from '../../api';

const PublicConstellation = ref({});
const store = useStore();
const publicNavDate = computed(() => store.constellation.getConstellation(store.nav.navLabel));
const getApiconstella = async (navLabel, tabbarLabel) => {
  // const params = { consName: navLabel, type: tabbarLabel };
  const params = { consName: navLabel, type: tabbarLabel, key: '8b85315d276ee70ed029ad8ecd542283' };
  const res = await getAll(params);
  if (res.resultcode !== '200') PublicConstellation.value.data = [];
  PublicConstellation.value.data = PublicConstellation.value.data.map((el) => {
    if (res.hasOwnProperty('mima')) {
      res.info = res.mima.info;
      res.text = res.mima.text;
    }
    for (const i in res) {
      el.props === i ? (el.props = res[i].toString()) : '';
    }
    return el;
  });
};
watch(
  () => store.nav.navLabel,
  () => {
    PublicConstellation.value = store.tabbar.getFilterTabbar();
    getApiconstella(store.nav.navLabel, store.tabbar.tabbarLabel);
  },
);
onMounted(() => {
  PublicConstellation.value = store.tabbar.getFilterTabbar();
  getApiconstella(store.nav.navLabel, store.tabbar.tabbarLabel);
});
</script>

<style lang="scss" scoped>
.hh {
  height: calc(100vh - 180rpx);
  overflow: scroll;
  .box {
    width: 95%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    .img-box {
      position: relative;
      .img {
        width: 100%;
        border-radius: 50rpx;
      }
      .img-box-font {
        position: absolute;
        top: 35%;
        left: 35%;
        font-size: 66rpx;
        color: #f1d6ed;
      }
      .img-box-right {
        position: absolute;
        right: 30rpx;
        top: 20rpx;
        color: #f1d6ed;
        font-size: 16rpx;
      }
    }
    .box-date {
      width: 100%;
      border: 1px solid #f1f3f4;
      border-radius: 10rpx;
      display: flex;
      justify-content: center;
      line-height: 66rpx;
      margin-top: 30rpx;
      .box-date-font {
        color: #e47e93;
        font-size: 34rpx;
      }

      .box-date-data {
        color: #949494;
        font-size: 32rpx;
        margin-left: 15rpx;
      }
    }
    .fortune {
      margin-top: 20rpx;
      .fortune-type-score {
        display: flex;
        .fortune-type-score-rate {
          width: 150rpx;
          text-align: right;
          color: #949494;
          line-height: 66rpx;
        }
        .xx {
          margin-top: 10rpx;
          margin-left: 10rpx;
        }
      }
      .fortune-type-p {
        margin-top: 20rpx;

        .fortune-type-p-btn {
          width: 100%;

          line-height: 66rpx;
          background-color: #d42f85;
          text-align: center;
          color: #ffffff;
          border-radius: 10rpx;
        }
        .fortune-type-p-font {
          text-indent: 50rpx;

          margin-top: 10rpx;
        }
      }
    }
  }
}
</style>
