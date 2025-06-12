import React, { useEffect, useState } from "react";
import ConversationView from "./components/ConversationView";
import TextFieldBox from "./components/TextFieldBox";
import type { Message } from "../../types/message";

export default function TextChatPage() {
    const [textInput, setTextInput] = useState("")
    const [messages, setMessages] = useState<Message[]>([])
    
   async function handleSubmit(): Promise<void> {
        // Check if empty textInput or not. If empty, do nothing.
        if (!textInput.trim()) {return}

        // Step 1. Create user and initial ai messages
        const userMessage: Message = {
            id: crypto.randomUUID(),
            speaker: "user",
            content: textInput
        }

        const aiMessage: Message = {
            id: "loading",
            speaker: "ai",
            content: "..."
        }

        // Step 2. SetConversation
        setMessages((prev: Message[])=> [...prev, userMessage, aiMessage])
        setTextInput("")

        // Step 3. GET request from openAI for the response
        const response = await mockApiRequest()
        setMessages((prev) => {
            return prev.map((msg) =>
                msg.id === "loading"
                ? { ...msg, id: crypto.randomUUID(), content: response }
                : msg
            );
        });
    }   
    
    function mockApiRequest(): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Response back! `);
            }, 2000); // 3 seconds
        });
    }

    return (
    <>
        <div className="w-full h-full flex flex-col items-center justify-center p-4">
            { messages.length === 0 ? 
                    <h1 className="text-xl mb-3"> 
                    How can I help you?
                    </h1>
                : <ConversationView messages={messages}/>
            }
            <TextFieldBox textInput={textInput} setTextInput={setTextInput} handleSubmit={handleSubmit} />    
        </div>
    </>
    )
}
