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
                className="w-full flex-1 overflow-y-scroll 
                                scrollbar-thin scrollbar-track-scrollbarColor 
                                scrollbar-track-rounded-full scrollbar-w-2"
            >
                <div 
                    className="px-[10px]"
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
                    <div className="scroll-point" ref={scrollRef}></div>
                </div>
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