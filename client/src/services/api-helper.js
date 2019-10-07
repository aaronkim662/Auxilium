const axios = require('axios');

const BASE_URL = 'http://localhost:3001';

const api = axios.create({
    baseURL: BASE_URL
});

export const getTeachers = async () => {
    const resp = await api.get('/teachers')
    return resp.data;
} 

export const registerTeacher = async (registerData) => {
    console.log('reg', registerData)
    const resp = await api.post('/teachers', { user: registerData });
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
};