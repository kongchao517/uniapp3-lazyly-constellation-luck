/*
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-05-29 09:57:00
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-29 11:05:37
 */
import { defineStore } from 'pinia';

export const useTokenStore = defineStore('Token', {
  state: () => ({
    TokenKey: 'token',
  }),
  actions: {
    setToken(val) {
      return uni.setStorageSync(this.TokenKey, val);
    },
    getToken() {
      return uni.getStorageSync(this.TokenKey);
    },
    removetoken() {
      return uni.removeStorageSync(this.TokenKey);
    },
  },
});
