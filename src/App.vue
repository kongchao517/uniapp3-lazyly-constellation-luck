<!--
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-05-25 16:30:49
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-29 10:42:53
-->
<template>
  <div>
    <Loading v-show="loading" />
  </div>
</template>
<script setup>
import { computed } from 'vue';
import useStore from '@store';
import Loading from './components/Loading';

const store = useStore();
const loading = computed(() => store.loading.Loading);
</script>

<style>
/*每个页面公共css */
@import 'wxcomponents/vant/common/index.wxss';
</style>
