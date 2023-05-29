/*
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-05-29 09:57:00
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-29 09:58:45
 */
import { defineStore } from 'pinia';

export const useTokenStore = defineStore('Token', {
  state: () => ({
    TokenKey: 'token',
  }),
  actions: {
    setToken(val) {
      return uni.setStorageSync(TokenKey, val);
    },
    getToken() {
      return uni.getStorageSync(TokenKey);
    },
    removetoken() {
      return uni.removeStorageSync(TokenKey);
    },
  },
});
