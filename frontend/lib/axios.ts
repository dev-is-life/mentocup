import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "https://api-mentocup.onrender.com",
    withCredentials: true
})