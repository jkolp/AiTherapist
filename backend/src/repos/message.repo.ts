import { pool } from "../db/db";
import { Message } from "../types/types";

export const getAllMessagesBySessionId = async (sessionId: string) => {
    const query = `
        SELECT * FROM messages
        WHERE sessionId = $1
        ORDER BY dateCreated DESC
    `;
    const values = [sessionId];
    const result = await pool.query(query, values);
    return result.rows;
}

export const postMessages = async (messages: [Message]) => {
    const query = `
        INSERT INTO messages (id, role, content, sessionId)
        VALUES ($1, $2, $3, $4)
        RETURNING *
    `;
    const values = messages.map(message => [message.id, message.role, message.content, message.sessionId]);
    
    const result = await pool.query(query, values);
    return result.rows;
}