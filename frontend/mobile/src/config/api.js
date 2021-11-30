import axios from 'axios';

export const apiBackend = axios.create({
    baseURL:"http://192.168.0.103:3333",
})