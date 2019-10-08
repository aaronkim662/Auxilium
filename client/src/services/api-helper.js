const axios = require('axios');

const BASE_URL = 'http://localhost:3001';

const api = axios.create({
    baseURL: BASE_URL
});


export const getTeachers = async () => {
    const resp = await api.get('/teachers')
    return resp.data;
} 

export const deleteTeacher = async (id) => {
    const resp = await api.delete(`/teachers/${id}`)
    return resp.data
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
    console.log(resp.data.token)
    return resp.data.teacher;
}

export const updateTeacher = async (updateData, id) => {
    const resp = await api.put(`/teachers/${id}`, updateData);
    return resp.data;
}

export const verifyTeacher = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const resp = await api.get('/auth/verify/teachers');
        return resp.data;
    }
    return false;
}

export const getTimes = async (data, id) => {
    const resp = await api.get(`/teachers/${data}/availabilities`, data)
    return resp.data
}

export const postTime = async (postData, id) => {
    const resp = await api.post(`/teachers/${id}/availabilities`, postData)
    return resp.data
}

export const deleteStudent = async (id) => {
    const resp = await api.delete(`/student/${id}`)
    return resp.data
}

export const loginStudent = async (logindata) => {
    const resp = await api.post('/auth/login/students', { student: logindata });
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.student;
}

export const registerStudent = async (registerData) => {
    const resp = await api.post('/students', { student: registerData });
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.teacher;
};

export const updateStudent = async (updateData, id) => {
    const resp = await api.put(`/students/${id}`, updateData);
    return resp.data;
}

export const verifyStudent = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const resp = await api.get('/auth/verify');
        return resp.data;
    }
    return false;
}