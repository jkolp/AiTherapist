import { getAllSessions } from "../repos/session.repo";
import { Session } from "../types/types";


function mapToSession(row: any): Session {
    return {
        id: row.id,
        userId: row.userId,
        dateCreated: new Date(row.dateCreated),
        title: row.title
    };
}

// Description: Returns an array of Session Objects for a given userId
// This function fetches all sessions for a user and maps the raw database rows to Session objects
export const fetchAllSessions = async (userId: string) : Promise< Session[]> => {
    const resultRows = await getAllSessions(userId);
    return resultRows.map(mapToSession);
}

