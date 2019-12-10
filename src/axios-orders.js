import axios from 'axios';

const instance = axios.create({
  baseURL: "https://my-burger-builder-ff4dd.firebaseio.com/"
});

export default instance;
