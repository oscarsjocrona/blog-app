import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://blogg-app-oscarsjo.firebaseio.com/'
});

export default instance;