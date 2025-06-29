// Description: This repository layer is responsible for data access only. Isolating all SQL or db queries

import { pool } from "../db/db";
import { Session } from "../types/types";

export const getAllSessions = async (userId: string) => {
    const query = `
        SELECT * FROM sessions
        WHERE userId = $1
        ORDER BY dateCreated DESC
    `;
    const values = [userId];
    const result = await pool.query(query, values);
    return result.rows;
}

// export const getSessionById = async (sessionID: string) => {
//  const query = `
//         SELECT * FROM sessions
//         WHERE id = $1
//     `;
//     const values = [sessionID];
//     const result = await pool.query(query, values);
//     return result.rows[0];
// }