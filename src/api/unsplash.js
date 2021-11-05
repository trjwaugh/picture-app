import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID fcNqzCvR5juM8P0b-ceZSj7czlmSdbrHescr_KBIMZ0'
    }
});