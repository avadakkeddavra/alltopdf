import axios from './../utils/axios';

export default {
    getAll: async (params) => {
        return (await axios.get('/files', {params})).data;
    },
    upload: async (files) => {
        const data = new FormData();
        for( let i = 0; i < files.length; i++ ){
            let file = files[i];
        
            data.append('files[' + i + ']', file);
        }
        const config = {
            onUploadProgress: function(progressEvent) {
                console.log(progressEvent);
                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                console.log(percentCompleted);
            }
        };
        return (await axios.post('/files', data, config)).data;
    }
}
