/*
 * @ description:接口二次封装
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-30 11:32:09
 */
// import {getToken,removeToken} from '../utils/auth';
function service(options = {}) {
  const env = import.meta.env.VITE_APP_API_BASE_URL;
  options.url = `${env}${options.url}`;
  // 判断本地是否存在token，如果存在则带上请求头
  // if (getToken()) {
  //     options.header = {
  //         'content-type': 'application/json',
  //         'Authorization': `${getToken()}`	// 这里是token(可自行修改)
  //     };
  // }
  return new Promise((resolved, rejected) => {
    options.success = (res) => {
      // 如果请求回来的状态码不是200则执行以下操作
      if (res.data.resultcode !== '200') {
        // 非成功状态码弹窗
        uni.showToast({
          icon: 'none',
          duration: 3000,
          title: `${res.data.resultcode === '112' ? '今天试用已过！(50次)' : res.data.reason}`,
        });
        // 返回错误信息
        resolved(res.data);
      } else {
        // 请求回来的状态码为200则返回内容
        resolved(res.data);
      }
    };
    options.fail = (err) => {
      // 请求失败弹窗
      uni.showToast({
        icon: 'none',
        duration: 3000,
        title: '服务器错误,请稍后再试',
      });
      rejected(err);
    };
    uni.request(options);
  });
}

// export default service;

// 导出常用函数

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export const post = (url, data = {}, params = {}) => {
  return service({
    method: 'post',
    url,
    data,
    params,
  });
};

/**
 * @param {string} url
 * @param {object} params
 */
export const get = (url, data = {}) => {
  return service({
    method: 'get',
    url,
    data,
  });
};

export default service;
