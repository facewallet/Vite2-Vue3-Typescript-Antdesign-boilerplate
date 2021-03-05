import axios from "axios";

let $axios = axios.create({
  baseURL: '/api',
  timeout: 10000
})

$axios.interceptors.request.use(config => {
  config.meta_data = {
    start_time: Date.now()
  };
  return config;
})

$axios.interceptors.response.use(response => {
  const cost_time = Date.now() - response.config.meta_data.start_time;
  console.log(`cost: ${cost_time}ms, status: ${response.status}, url: ${response.config.url}`);
  
  return response.data
}, error => {
  console.log('拦截器报错');
    return Promise.reject(error);
})

export default $axios