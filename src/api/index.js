/*
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-05-26 10:24:28
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-29 10:40:33
 */
import { post } from '@/utils/request';
// 获取街道
export const getStreetApi = (params) => post('/dim-street-enum/getList', params);
