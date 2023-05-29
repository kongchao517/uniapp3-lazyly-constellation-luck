/*
 * @ description:控制全局loading
 * @ author: kongchao
 * @ created_at: 2023-05-16 19:00:29
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-23 13:54:31
 */
import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('Loading', {
  state: () => ({
    Loading: false,
  }),
  actions: {
    isShowLoading() {
      this.Loading = true;
    },
    isHideLoading() {
      this.Loading = false;
    },
  },
});
