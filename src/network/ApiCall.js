import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';

const BASE_URL = 'http://online.lwcgi.org/api/';
export default class Apicall {
  AxiosInstance() {
    const instance = Axios.create({
      baseURL: BASE_URL,
      validateStatus: (status) => {
        return status == 200 || status == 201 || status == 400 || status == 401;
      },
    });

    instance.defaults.timeout = 60000;
    instance.defaults.maxRedirects = 1;
    instance.defaults.headers.post['Content-Type'] = 'application/json';
    instance.defaults.headers.post['Accept'] = 'application/json';

    return instance;
  }

  AxiosInstance1() {
    const instance = Axios.create({
      baseURL: BASE_URL,
      validateStatus: (status) => {
        return status == 200 || status == 201 || status == 400 || status == 401;
      },
    });

    instance.defaults.timeout = 60000;
    instance.defaults.maxRedirects = 1;
    instance.defaults.headers.post['Content-Type'] = 'application/json';
    instance.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded';
    instance.defaults.headers.post['Accept'] = 'application/json';
    instance.interceptors.request.use(async (config) => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    });

    return instance;
  }

  async signin(params) {
    try {
      const res = await this.AxiosInstance().post(
        'login',
        JSON.stringify(params),
      );

      return res;
    } catch (error) {}
  }

  async register(params) {
    try {
      const res = await this.AxiosInstance().post(
        'register',
        JSON.stringify(params),
      );
      console.log('register', res);
      return res;
    } catch (error) {
      console.log('error', error.response);
    }
  }

  async getCourse() {
    try {
      const data = {category_id: '5'};
      const res = await this.AxiosInstance1().post('category/course', data);
      return res;
    } catch (error) {}
  }

  async getTraining() {
    try {
      const res = await this.AxiosInstance1().get('all/trainings');
      return res;
    } catch (error) {}
  }

  async getTools() {
    try {
      const res = await this.AxiosInstance1().get('stcg');
      return res;
    } catch (error) {}
  }

  async loadUser() {
    try {
      const res = await this.AxiosInstance1().get('user/profile');

      return res;
    } catch (error) {}
  }

  async getChurch(zoneid) {
    try {
      const res = await this.AxiosInstance().get(
        `zone/churches/details?zoneID=${zoneid}`,
      );
      return res;
    } catch (error) {}
  }

  async getZone() {
    try {
      const res = await this.AxiosInstance().get('all/zones/details');
      return res;
    } catch (error) {}
  }

  async getVideo(param) {
    try {
      const res = await this.AxiosInstance1().post(
        'category/course/training/video',
        param,
      );
      return res;
    } catch (error) {}
  }

  async getVideoComment(param) {
    try {
      const res = await this.AxiosInstance1().post(
        'training/video/comment',
        param,
      );
      return res;
    } catch (error) {}
  }
  async addVideoComment(param) {
    try {
      const res = await this.AxiosInstance1().post('add/video/comments', param);
      return res;
    } catch (error) {}
  }
}
