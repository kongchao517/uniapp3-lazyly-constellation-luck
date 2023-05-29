/*
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-05-26 09:35:52
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-29 13:50:45
 */
import { useCountStore } from './modules/count';
import { useTokenStore } from './modules/token';
import { useTabbarStore } from './modules/tabbar';

export default function useStore() {
  return {
    count: useCountStore(),
    token: useTokenStore(),
    tabbarIndex: useTabbarStore(),
  };
}
