import axios from "axios";

export default axios.create({
    baseURL: 'https://amazon-api.sellead.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})