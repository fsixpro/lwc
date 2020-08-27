import Axios from 'axios';
const BASE_URL = 'http://online.lwcgi.org/api/';
export default class Apicall {
  AxiosInstance() {
    const instance = Axios.create({
      baseURL: BASE_URL,
    });

    instance.defaults.timeout = 60000;
    instance.defaults.maxRedirects = 1;
    instance.defaults.headers.post['Content-Type'] = 'application/json';
    instance.defaults.headers.post['Accept'] = 'application/json';

    return instance;
  }

  async register(params) {
    try {
      const res = await this.AxiosInstance().post(
        'register',
        JSON.stringify(params),
      );
      return res;
    } catch (error) {
      console.log('error', error.response);
    }
  }
}
