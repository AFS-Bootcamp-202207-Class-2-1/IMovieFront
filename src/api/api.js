import axios from "axios";

const api = axios.create({
    baseURL: "http://10.222.232.184:8084"
})
  
export default api;
