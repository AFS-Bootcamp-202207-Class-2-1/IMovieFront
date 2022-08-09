import axios from "axios";

const api = axios.create({
    baseURL: "https://imovie-front-dev.herokuapp.com/"
})
  
export default api;
  