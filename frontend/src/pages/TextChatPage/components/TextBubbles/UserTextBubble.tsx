import type { Message } from "../../../../types/message"

type UserTextBubbleProp = {
    message : Message
}

export default function UserTextBubble({message}: UserTextBubbleProp) {

    return (
        <div className="flex w-full my-[10px] justify-end" > 
            <div className="my-[10px] px-5 py-5 justify-end rounded-full bg-[#f5fff8]" >
                <p className={message.id == "loading" ? "animate-bounce" : ""} >
                    {message.content}
                </p>
            </div>
        </div>
    )
}