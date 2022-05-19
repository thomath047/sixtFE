import axios from 'axios';

export const DEVICE_HOST = 'warm-garden-20855.herokuapp.com';
export const apiClient = axios.create({
    baseURL: `https://${DEVICE_HOST}`,
});
