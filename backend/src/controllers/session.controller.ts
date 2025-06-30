// HTTP Layer
import { Request, Response } from 'express';
import * as sessionService from '../services/session.service';  

export const handleGetUserSessions = async (req: Request, res: Response) => {
    console.log("Reached HandleGetUserSEssions")
    const userID = req.params.userId;
    try {
        const sessions = await sessionService.fetchAllSessions(userID);
        res.status(200).json(sessions);
    }  catch (error) {
        if (error instanceof Error) {
            console.error("Error fetching all sessions:", error.message);
            res.status(500).json({ error: error.message });
        }
        res.status(500).json({ error: 'An unexpected error occurred while fetching sessions.' });
    }
}