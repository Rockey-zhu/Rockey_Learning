import axios from "axios";
let service = axios.create({
    baseURL: "http://localhost:3000/",
    timeout: 5000,
    withCredentials: true // 允许请求携带 cookie
})
export default service