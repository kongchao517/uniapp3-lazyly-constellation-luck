/*
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-05-26 09:35:57
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-29 10:40:54
 */
import { defineStore } from 'pinia';

export const useCountStore = defineStore('count', {
  state: () => ({
    count: 1,
  }),
  actions: {
    setCount() {
      this.count += 1;
    },
    getCount() {
      return this.count;
    },
  },
});
