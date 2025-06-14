import axios from 'axios'
import type { Message } from '../types/message';

const API_URL : string = 'http://localhost:3000'

/*
description : Take user input and send it to the backend API to retrieve response from openAI
parameter : User input
return : message from openAI
*/
// export const fetchMessage = async (messages: Message[]) => { 
//     try {
//         const response = await axios.post(`${API_URL}/api/fetchResponse`, 
//             { 
//                 messages : messages[messages.length - 2]
//             })
//         return response.data.aiResponse;
//     } catch (error) {
//         console.error(`Error fetchMessage : ${error}`)
//         throw error;
//     }
// };

const fetchMessage = async (textInput: string) => { 
    try {
        const response = await axios.post(`${API_URL}/api/fetchResponse`, 
            { 
                messages : textInput
            })
        return response.data.aiResponse;
    } catch (error) {
        console.error(`Error fetchMessage : ${error}`)
        throw error;
    }
};

export const getResponse = async (text: string) => {
    try {
        const aiResponse = await fetchMessage(text)
        console.log(`aiResponse/Frontend : ${aiResponse}`)
        return aiResponse
        
    } catch (error) {
        console.log("Error/Frontend : On getMessage()")
    } 
}