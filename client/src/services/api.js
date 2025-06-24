import axios from "axios";

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	withCredentials: true, // Needed to send cookies (JWT)
});

export default api;
