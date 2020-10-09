require ('./config')
window.axios = require('axios');

let accessToken = localStorage.getItem('accessToken');
if (accessToken) {
    window.axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
} 