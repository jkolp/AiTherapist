// HTTP Layer
import { Request, Response } from 'express';
import * as sessionService from '../services/session.service';  

export const handleGetUserSessions = async (req: Request, res: Response) => {
    const userID = req.params.userId;
    try {
        const sessions = await sessionService.fetchAllSessions(userID);
        res.status(200).json(sessions);
    }  catch (error) {
        if (error instanceof Error) {
            console.error("Error fetching all sessions:", error.message);
            throw new Error("Failed to fetch sessions");
        }
        throw new Error("Unknown error occurred");
    }
}