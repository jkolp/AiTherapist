
export type Speaker = "ai" | "user"

export type Message = {
    id : string
    speaker: Speaker
    content: string
}