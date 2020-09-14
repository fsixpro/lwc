import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const BASE_URL = 'http://online.lwcgi.org/api/';
export default class Apicall {
  AxiosInstance() {
    const instance = Axios.create({
      baseURL: BASE_URL,
      validateStatus: (status) => {
        return status == 200 || status == 400 || status == 401;
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
        return status == 200 || status == 400 || status == 401;
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
    } catch (error) {
      console.log('signin error', error);
    }
  }

  async register(params) {
    try {
      const res = await this.AxiosInstance().post(
        'register',
        JSON.stringify(params),
      );

      return res;
    } catch (error) {
      console.log('register api error', error.response);
    }
  }

  async getCourse() {
    try {
      const data = {category_id: '5'};
      const res = await this.AxiosInstance1().post('category/course', data);
      return res;
    } catch (error) {
      console.log('getCourse api error', error.response);
    }
  }

  async getTraining() {
    try {
      const res = await this.AxiosInstance1().get('all/trainings');
      return res;
    } catch (error) {
      console.log('getTraining api error', error);
    }
  }

  async getTools() {
    try {
      const res = await this.AxiosInstance1().get('stcg');
      return res;
    } catch (error) {
      console.log('getTools api error', error);
    }
  }

  async loadUser() {
    try {
      const res = await this.AxiosInstance1().post('user/profile');
      return res;
    } catch (error) {
      console.log('loadUser API error', error);
    }
  }

  async getChurch(zoneid) {
    try {
      const res = await this.AxiosInstance().get(
        `zone/churches/details?zoneID=${'BLWZN200818CM9'}`,
      );
      return res;
    } catch (error) {
      console.log('getTraining api error', error);
    }
  }

  async getZone() {
    try {
      const res = await this.AxiosInstance().get('all/zones/details');
      return res;
    } catch (error) {
      console.log('getZone api error', error.response);
    }
  }
}
