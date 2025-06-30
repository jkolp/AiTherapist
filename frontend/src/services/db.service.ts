import axios from 'axios'


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchSessionsByUserID = async (userId: number) => {
    const response = await axios.get(`${API_BASE_URL}/api/getSessions/${userId}`)
    return response
}
