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

export const fetchAllSessions = async (userId: string) : Promise< Session[]> => {
    try {
        const resultRows = await getAllSessions(userId);
        return resultRows.map(mapToSession);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error fetching all sessions:", error.message);
            throw new Error("Failed to fetch sessions");
        }
        throw new Error("Unknown error occurred");
    }
}

