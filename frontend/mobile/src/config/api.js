import axios from 'axios';

export const apiBackend = axios.create({
    baseURL:"http://192.168.5.108:3333",
})