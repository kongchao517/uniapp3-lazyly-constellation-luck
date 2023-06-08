import { defineStore } from 'pinia';

export const useNavStore = defineStore('nav', {
  state: () => ({
    navLabel: '水瓶座',
  }),
  actions: {
    setNav(val) {
      this.navLabel = val;
    },
    getNav() {
      return this.navLabel;
    },
  },
});
