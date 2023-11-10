import axios from "axios";

const baseURL =import.meta.env.VITE_AXIOS_API;


export const axiosController = axios.create({
    headers:{
        token: `${localStorage.getItem("token")}`
    },
    baseURL
})