/*
 * @ description:接口二次封装
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-29 19:03:40
 */
// import {getToken,removeToken} from '../utils/auth';

function service(options = {}) {
  const env = import.meta.env.MODE === 'development' ? 'http://192.168.10.85:10300' : 'http://192.168.10.85:10301';
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
      if (res.data.code !== 200) {
        // 非成功状态码弹窗
        uni.showToast({
          icon: 'none',
          duration: 3000,
          title: `${res.data.msg}`,
        });
        // 登陆失效
        if (res.data.code === 403) {
          // 清除本地token
          // removeToken();
          // 关闭所有页面返回到登录页
          uni.reLaunch({
            url: '/pages/index',
          });
        }
        // 返回错误信息
        rejected(res);
      } else {
        // 请求回来的状态码为200则返回内容
        resolved(res.data.dataInfo);
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
export const get = (url, params = {}) => {
  return service({
    method: 'get',
    url,
    params,
  });
};

export default service;
