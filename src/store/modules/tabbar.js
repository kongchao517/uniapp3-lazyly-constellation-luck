/*
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-05-29 13:49:19
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-29 13:51:49
 */
import { defineStore } from 'pinia';

export const useTabbarStore = defineStore('tabbarIndex', {
  state: () => ({
    tabbarIndex: 1,
  }),
  actions: {
    setTabbar(val) {
      this.tabbarIndex = val;
    },
    getTabbar() {
      return this.tabbarIndex;
    },
  },
});
