const axios = require('axios');

const BASE_URL = 'http://localhost/3000';

const api = axios.create({
    baseUrl: BASE_URL
});

