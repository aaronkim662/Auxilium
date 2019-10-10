
const axios = require('axios');

const BASE_URL = 'http://localhost:3001';

const api = axios.create({
    baseURL: BASE_URL
});

// export const handleVerify = async () => {
//     const role = localStorage.getItem('role');
//     if (role === 'student') {
//         await handleVerifyStudent()
//     } else if (role === 'teacher') {
//         await handleVerifyTeacher();
//     } else {
//         return null;
//     }
// }

// Teachers

export const getOneTeacher = async (id) => {
    const resp = await api.get(`/teachers/${id}`);
    return resp.data;
}

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
    localStorage.setItem('role', 'teacher');
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.teacher;
};

export const loginTeacher = async (logindata) => {
    const resp = await api.post('/auth/login/teachers', { teacher: logindata });
    localStorage.setItem('authToken', resp.data.token);
    localStorage.setItem('role', 'teacher');
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.teacher;
}

export const updateTeacher = async (updateData, id) => {
    const resp = await api.put(`/teachers/${id}`, updateData);
    return resp.data;
}

export const verifyTeacher = async () => {
    const token = localStorage.getItem('authToken');
        localStorage.setItem('role', 'teacher');

    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const resp = await api.get('/auth/verify/teachers');
        return resp.data;
    }
    return false;
}

// Students
export const deleteStudent = async (id) => {
    const resp = await api.delete(`/student/${id}`)
    return resp.data
}

export const loginStudent = async (logindata) => {
    const resp = await api.post('/auth/login/students', { student: logindata });
    localStorage.setItem('authToken', resp.data.token);
    localStorage.setItem('role', 'student');
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.student;
}

export const registerStudent = async (registerData) => {
    const resp = await api.post('/students', { student: registerData });
    localStorage.setItem('role', 'student');
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.teacher;
};

export const updateStudent = async (updateData, id) => {
    const resp = await api.put(`/students/${id}`, updateData);
    return resp.data;
};

export const verifyStudent = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const resp = await api.get('/auth/verify/students');
        return resp.data;
    }
    return false;
};


// Availabilities

export const getTimes = async (id) => {
    const resp = await api.get(`/teachers/${id}/availabilities/`);    
    return resp.data;
};

// Controllers: nested object key value pairs for strong params
// was passing key of 2pm when the key should be time
export const postTime = async (postData, id) => {
    const resp = await api.post(`/teachers/${id}/availabilities`, {availability: {time: postData}});
    return resp.data;
};

// Appointments

export const getAppointments = async(student_id) => {
    const resp = await api.get(`/students/${student_id}/appointments`);
    return resp.data;
}

export const postAppointments = async(student_id, teacher_id, time) => {
    const resp = await api.post(`/students/${student_id}/teachers/${teacher_id}/appointments/`, time);
    return resp.data;
}
