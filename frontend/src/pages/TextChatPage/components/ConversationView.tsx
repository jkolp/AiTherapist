import React, { useEffect, useRef } from "react";
import type { Message } from "../../../types/message";
import AiTextBubble from "./TextBubbles/AiTextBubble";
import UserTextBubble from "./TextBubbles/UserTextBubble";

type ConversationViewProp = {
    messages : Message[]
}

export default function ConversationView( {messages}: ConversationViewProp ) {
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    },[messages])

    return (
        <>
            <div 
                className="w-full h-full overflow-y-scroll overflow-y-hidden max-w-[750px]"
            >
                {
                    messages.map((message, index) => {
                        if (message.role === "ai") {
                            return <AiTextBubble key={index} message={message}/>
                        } else {
                            return <UserTextBubble key={index} message={message}/>
                        }
                    })
                }
                <div ref={scrollRef}></div>
            </div>
        </>
    )
}

// const mockMessages : Message[] = [
//     { speaker : "user",
//         content : "Hi!"
//     },
//     {
//         speaker : "ai",
//         content : "Ai says Hi Back!"
//     }
// ]