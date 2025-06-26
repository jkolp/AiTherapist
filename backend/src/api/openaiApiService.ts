import { Agent, run, setDefaultOpenAIKey } from '@openai/agents'
import { Message } from '../types/types';
import dotenv from 'dotenv';

// Link variables inside .env file
dotenv.config()

// Set openAI API KEY
setDefaultOpenAIKey(process.env.API_KEY!); 

const agent = new Agent({
    model: 'gpt-4.1-nano',
    name: "Psychology Therapist",
    instructions:
        "You are a wise and a professional therapist who help people understand their emotions and guide them to overcoming traumas. You are friendly and empathic with people's emotions."
})

export const getResponse = async (textInput: string) : Promise<string | undefined>  => {
    const result = await run(agent, textInput)
    const response = result.finalOutput
    console.log(response)
    return response
}