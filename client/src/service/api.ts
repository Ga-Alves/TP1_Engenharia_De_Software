import axios from 'axios'

const api = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}`,
    withCredentials: true,
});

export {api};
