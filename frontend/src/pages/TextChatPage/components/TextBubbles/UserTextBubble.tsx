import type { Message } from "../../../../types/message"

type UserTextBubbleProp = {
    message : Message
}

export default function UserTextBubble({message}: UserTextBubbleProp) {

    return (
        <div className="max-w-[750px] flex w-full justify-center mx-auto">
            <div className="flex w-full my-[5px] justify-end" > 
                <div className="my-[10px] px-5 py-4 justify-end rounded-full 
                                border border-[#B7D2C0] bg-darkerGreenTea" >
                    <p className={message.id == "loading" ? "animate-bounce" : ""} >
                        {message.content}
                    </p>
                </div>
            </div>
        </div>
    )
}