import { defineStore } from 'pinia';
import dayjs from 'dayjs';

import Aries from '@static/images/aries.png';
import Taurus from '@static/images/taurus.png';
import Gemini from '@static/images/gemini.png';
import Cancer from '@static/images/cancer.png';
import Lion from '@static/images/lion.png';
import Virgo from '@static/images/virgo.png';
import libra from '@static/images/libra.png';
import Scorpio from '@static/images/scorpio.png';
import Sagittarius from '@static/images/sagittarius.png';
import Capricornus from '@static/images/capricornus.png';
import Aquarius from '@static/images/aquarius.png';
import Pisces from '@static/images/pisces.png';

export const useConstellationStore = defineStore('constellation', {
  state: () => ({
    constellation: [
      { label: '水瓶座', images: Aquarius, start: '1月20日', end: '2月18日' },
      { label: '双鱼座', images: Pisces, start: '2月19日', end: '3月20日' },
      { label: '白羊座', images: Aries, start: '3月21日', end: '4月19日' },
      { label: '金牛座', images: Taurus, start: '4月20日', end: '5月20日' },
      { label: '双子座', images: Gemini, start: '5月21日', end: '6月21日' },
      { label: '巨蟹座', images: Cancer, start: '6月22日', end: '7月22日' },
      { label: '狮子座', images: Lion, start: '7月23日', end: '8月22日' },
      { label: '处女座', images: Virgo, start: '8月23日', end: '9月22日' },
      { label: '天秤座', images: libra, start: '9月23日', end: '10月23日' },
      { label: '天蝎座', images: Scorpio, start: '10月24日', end: '11月22日' },
      { label: '射手座', images: Sagittarius, start: '11月23日', end: '12月21日' },
      { label: '摩羯座', images: Capricornus, start: '12月22日', end: '1月19日' },
    ],
  }),
  actions: {
    // 添加当前年 ‘摩羯座结束年+1’
    addYear() {
      this.constellation = this.constellation.map((el) => {
        el.start = `${dayjs().year()}年${el.start}`;
        el.end = el.label === '摩羯座' ? `${dayjs().year() + 1}年${el.end}` : `${dayjs().year()}年${el.end} `;
        return el;
      });
    },
    // 数组过滤 => 扩展运算符解构成对象取第一个
    getConstellation(val) {
      return { ...this.constellation.filter((el) => el.label === val) }[0];
    },
    getAllConstella() {
      return this.constellation;
    },
  },
});
