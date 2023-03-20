import axios from "axios";

export default axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
    withCredentials: true,
});

// const instance = axios.create({
//     baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
// });

// instance.interceptors.response.use(
//     response => {
//         return response;
//     },
//     function(error) {
//         if (error.response.status === 401) {
//             window.location.replace("/");
//         }
//         return Promise.reject(error.response);
//     }
// );