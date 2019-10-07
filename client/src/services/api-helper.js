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
    const resp = await api.post('/teachers', { teacher: registerData });
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.teacher;
};

export const loginTeacher = async (logindata) => {
    const resp = await api.post('/auth/login/teachers', { teacher: logindata });
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.teacher;
}

export const verifyTeacher = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const resp = await api.get('/auth/verify');
        return resp.data;
    }
    return false;
}

export const updateTeacher = async (updateData) => {
    const resp = await api.put('/teachers', updateData);
    return resp.data;
}

export const getTimes = async (data, id) => {
    const resp = await api.get(`/teachers/${data}/availabilities`, data)
    return resp.data
}

export const postTime = async (postData, id) => {
    const resp = await api.post(`/teachers/${id}/availabilities`, postData)
    return resp.data
}