import axios from './../utils/axios';

export default {
    login: async (body) => {
        return (await axios.post('/login', body)).data;
    },
    register: async (body) => {
        return (await axios.post('/register', body)).data;
    },
    getCurrent: async () => {
        return (await axios.get('/me')).data;
    }
}
