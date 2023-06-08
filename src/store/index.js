/*
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-05-26 09:35:52
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-29 13:50:45
 */
import { useTabbarStore } from './modules/tabbar';
import { useConstellationStore } from './modules/constella';
import { useNavStore } from './modules/nav';

export default function useStore() {
  return {
    tabbar: useTabbarStore(),
    constellation: useConstellationStore(),
    nav: useNavStore(),
  };
}
