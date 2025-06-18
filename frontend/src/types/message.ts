
export type Role = "ai" | "user"

export type Message = {
    id : string
    role: Role
    content: string
}

export type Session = {
    id : string
    userId : string
    dateCreated : Date
    title : string
}

