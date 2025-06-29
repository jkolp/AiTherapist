export type Role = "ai" | "user"

export interface Message {
    id : string
    role: Role
    content: string
    sessionId: string
}

export interface Session {
    id: string
    userId: string
    dateCreated: Date
    title: string
}