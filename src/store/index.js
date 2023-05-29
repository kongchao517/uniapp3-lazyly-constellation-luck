/*
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-05-26 09:35:52
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-29 10:42:36
 */
import { useCountStore } from './modules/count';
import { useLoadingStore } from './modules/loading';
import { useTokenStore } from './modules/token';

export default function useStore() {
  return {
    count: useCountStore(),
    loading: useLoadingStore(),
    token: useTokenStore(),
  };
}
