import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://blogapi20201007171304.azurewebsites.net'
});

export default instance;