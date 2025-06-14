export type Role = "ai" | "user"

export type Message = {
    id : string
    role: Role
    content: string
}