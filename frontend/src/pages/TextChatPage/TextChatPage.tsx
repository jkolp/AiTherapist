import { useState } from "react";
import ConversationView from "./components/ConversationView";
import TextFieldBox from "./components/TextFieldBox";
import type { Message } from "../../types/message";
import { getResponse } from "../../api/openaiApi";

export default function TextChatPage() {
    const [textInput, setTextInput] = useState("")
    const [messages, setMessages] = useState<Message[]>([])
    
   async function handleSubmit() {
        // Check if empty textInput or not. If empty, do nothing.
        if (!textInput.trim()) {return}

        // Step 1. Create user and initial ai messages
        const userMessage: Message = {
            id: crypto.randomUUID(),
            role: "user",
            content: textInput
        }

        const aiMessage: Message = {
            id: "loading",
            role: "ai",
            content: "..."
        }

        // Step 2. SetConversation
        setMessages((prev: Message[])=> [...prev, userMessage, aiMessage])
        setTextInput("")
        
        // Step 3. GET request from openAI for the response
        let response = await getResponse(textInput)

        // Step 4. Set messages array
        setMessages( (prev) => {
            return prev.map((msg) =>
                msg.id === "loading"
                ? { ...msg, id: crypto.randomUUID(), content: response }
                : msg
            )
        })
    }   

    return (
    <>
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-[30px] text-center border-b-1 relative">
                Untangle
            </div>
            <div className="flex-1 flex flex-col justify-center overflow-hidden">
                { messages.length === 0 ? 
                        <h1 className="text-xl mb-3 text-center"> 
                        How can I help you?
                        </h1>
                    : <ConversationView messages={messages}/>
                }
                <TextFieldBox 
                    textInput={textInput} 
                    setTextInput={setTextInput} 
                    handleSubmit={handleSubmit} 
                />    
            </div>
        </div>
    </>
    )
}
