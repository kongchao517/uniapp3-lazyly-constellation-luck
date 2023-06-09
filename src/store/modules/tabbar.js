/*
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-05-29 13:49:19
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-29 13:51:49
 */
import { defineStore } from 'pinia';
import dayjs from 'dayjs';

export const useTabbarStore = defineStore('tabbarIndex', {
  state: () => ({
    tabbarIndex: 1,
    tabbarLabel: 'today',
    tabbarDate: [
      {
        label: '今日日期',
        value: 1,
        date: dayjs(`${new Date()}`).format('YYYY年MM月DD日'),
        data: [
          { label: '综合指数', props: 'all', type: 'score' },
          { label: '幸运色', props: 'color', type: 'across' },
          { label: '健康指数', props: 'health', type: 'score' },
          { label: '爱情指数', props: 'love', type: 'score' },
          { label: '财运指数', props: 'money', type: 'score' },
          { label: '幸运数字', props: 'number', type: 'across' },
          { label: '速配星座', props: 'QFriend', type: 'across' },
          { label: '今日概述', props: 'summary', type: '' },
          { label: '工作指数', props: 'work', type: 'score' },
        ],
      },
      {
        label: '明日日期',
        value: 2,
        date: dayjs(`${new Date()}`).add(1, 'day').format('YYYY年MM月DD日'),
        data: [
          { label: '综合指数', props: 'all', type: 'score' },
          { label: '幸运色', props: 'color', type: 'across' },
          { label: '健康指数', props: 'health', type: 'score' },
          { label: '爱情指数', props: 'love', type: 'score' },
          { label: '财运指数', props: 'money', type: 'score' },
          { label: '幸运数字', props: 'number', type: 'across' },
          { label: '速配星座', props: 'QFriend', type: 'across' },
          { label: '今日概述', props: 'summary', type: '' },
          { label: '工作指数', props: 'work', type: 'score' },
        ],
      },
      {
        label: '本周日期',
        value: 3,
        date: `${dayjs().startOf('week').add(1, 'day').format('YYYY年MM月DD日')} - ${dayjs()
          .endOf('week')
          .add(1, 'day')
          .format('YYYY年MM月DD日')}`,
        data: [
          { label: '健康运势', props: 'health', type: '' },
          { label: '爱情运势', props: 'love', type: '' },
          { label: '财运运势', props: 'money', type: '' },
          { label: '工作运势', props: 'work', type: 'score' },
        ],
      },
      {
        label: '本月日期',
        value: 4,
        date: `${dayjs().startOf('month').format('YYYY年MM月DD日')} - ${dayjs()
          .endOf('month')
          .format('YYYY年MM月DD日')}`,
        data: [
          { label: '综合运势', props: 'all', type: '' },
          { label: '健康运势', props: 'health', type: '' },
          { label: '爱情运势', props: 'love', type: '' },
          { label: '财运运势', props: 'money', type: '' },
          { label: '工作运势', props: 'work', type: '' },
        ],
      },
      {
        label: '本年日期',
        value: 5,
        date: ` ${dayjs().startOf('year').format('YYYY年MM月DD日')} - ${dayjs()
          .endOf('year')
          .format('YYYY年MM月DD日')}`,
        data: [
          { label: '年度密码概述', props: 'info', type: '' },
          { label: '年度密码说明', props: 'text', type: '' },
          { label: '事业运', props: 'career', type: '' },
          { label: '感情运', props: 'love', type: '' },
          { label: '财运', props: 'finance', type: '' },
        ],
      },
    ],
  }),
  actions: {
    setTabbar(val) {
      this.tabbarIndex = val;
    },
    getTabbar() {
      return this.tabbarIndex;
    },
    // 数组过滤 => 扩展运算符解构成对象取第一个
    getFilterTabbar() {
      return { ...this.tabbarDate.filter((el) => el.value === this.tabbarIndex) }[0];
    },
    setTabbarLabel(val) {
      this.tabbarLabel = val;
    },
  },
});
