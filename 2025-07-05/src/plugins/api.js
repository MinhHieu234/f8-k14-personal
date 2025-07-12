import axios from "axios";
const api = axios.create({
    baseURL:'http://fakestoreapi.com'
})
export default api;