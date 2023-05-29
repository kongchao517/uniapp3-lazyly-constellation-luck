<!--
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-05-22 16:05:35
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-29 10:40:42
-->
<template>
  <div class="loading">
    <img :src="Loading" alt="" />
  </div>
</template>

<script setup>
import Loading from '@static/images/loading.gif';
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 121;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;

  img {
    width: 25px;
    height: 25px;
    margin: auto;
  }
}
</style>
