/*
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-05-26 09:35:52
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-29 11:03:33
 */
import { useCountStore } from './modules/count';
import { useTokenStore } from './modules/token';

export default function useStore() {
  return {
    count: useCountStore(),
    token: useTokenStore(),
  };
}
