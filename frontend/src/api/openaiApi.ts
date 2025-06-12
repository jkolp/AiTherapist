import axios from 'axios'

const API_URL : string = 'http://localhost:3000'

export const fetchMessage = async () => { 
    try {
        const response = await axios.get(`${API_URL}/api/fetchResponse`)
        console.log("API call received")
        return response.data;
    } catch (error) {
        console.error(`Error fetchMessage : ${error}`)
        throw error;
    }
};