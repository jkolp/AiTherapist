import type { Message } from "../../../../types/message"

type AiTextBubbleProp = {
    message : Message
}

export default function AiTextBubble({message}: AiTextBubbleProp) {

    return (
        <div className="flex w-full my-[10px] justify-start" > 
            <div className="my-[10px] px-5 py-5 justify-start" >
                <p className={message.id == "loading" ? "animate-bounce" : ""} >
                    {message.content}
                </p>
            </div>
        </div>
    )
}