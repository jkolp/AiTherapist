import type { Message } from "../../../types/message";


type TextBubbleProp = {
    message : Message
}

export default function TextBubble({message}: TextBubbleProp) {

    return (
        <div className={`flex w-full my-[10px]
            ${message.speaker === 'user' ? 'justify-end' : 'justify-start'}`
        }> 
            <div 
                className={`my-[10px] px-5 py-5 
                    ${message.speaker === 'user' ? 'justify-end rounded-full bg-[#f5fff8]' : 'justify-start'}` }
            >
                <p
                    className={message.id == "loading" ? "animate-bounce" : ""}
                >
                    {message.content}
                </p>
            </div>
        </div>
    )
}