import axios from 'axios'

const instanse = axios.create({
    baseURL : 'http://localhost:5001/clone-5b89d/us-central1/api' // cloude function URL 
});

export default instanse;