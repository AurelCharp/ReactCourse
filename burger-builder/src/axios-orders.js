import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-db6b9.firebaseio.com/'
});

export default instance;
