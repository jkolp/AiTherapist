import { Router, Request, Response, response } from "express";
import apiProvider from "../providers/openaiApiProvider";
import { getResponse } from "../api/openaiApiService";
import { handleGetUserSessions } from "../controllers/session.controller";
import dotenv from 'dotenv'

const router = Router();

router.post('/fetchResponse', async (req: Request, res: Response) => {
    console.log("Reached /fetchResponse API")
    const messages = req.body.messages

    try {
        const aiResponse = await getResponse(messages)
        res.json({aiResponse : aiResponse})
    } catch (error) {
        console.error("Error fetching AI response:", error);
        res.status(500).json({ error: 'Failed to fetch AI response.' });
    }
})

// Endpoint to fetch all sessions for a user
// This will call the controller which in turn calls the service and repo layers
router.get('/getSessions/:userId', handleGetUserSessions)

export default router

