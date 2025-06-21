import React, {useRef} from "react";

type TextFieldBoxProps = {
    textInput : string;
    setTextInput : (text : string) => void
    handleSubmit : () => void
}

export default function TextFieldBox({ textInput, setTextInput, handleSubmit } : TextFieldBoxProps) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
        // Cmd + Enter (Mac) or Ctrl + Enter (Windows/Linux)
        if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
            e.preventDefault(); // stop newline
            handleSubmit();
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setTextInput(e.target.value)
        
        // Update the height of the textarea upto 10 lines of text
        const textAreaElement = textAreaRef.current
        
        if (textAreaElement) {
            textAreaElement.style.height = 'auto'
            textAreaElement.style.height = Math.min(textAreaElement.scrollHeight, 10 * 24) + 'px'
        }
    }

    return (
        <>
            <div className="px-[20px] pb-[20px]">
                <form 
                    onSubmit={(e: React.FormEvent) => {
                            e.preventDefault()
                            handleSubmit()
                        }
                    }
                    className="flex flex-col bg-[#d4ffdf] rounded-[20px] w-full max-w-[750px] m-auto"
                >
                    <textarea 
                        className="w-full px-4 py-3 focus:outline-none resize-none"
                        placeholder="Ask anything"
                        ref={textAreaRef}
                        onChange={handleChange}
                        value={textInput}
                        onKeyDown={onKeyDown}
                    />
                    <button
                        type="submit"
                        className="h-6 w-13 self-end rounded-lg m-3 text-white bg-gray-500"
                    >
                        Send
                    </button>
                </form>
            </div>
        </>
    )
}