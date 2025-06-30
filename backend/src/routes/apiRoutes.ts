import { Router, Request, Response, response } from "express";
import apiProvider from "../providers/openaiApiProvider";
import { getResponse } from "../api/openaiApiService";
import { handleGetUserSessions } from "../controllers/session.controller";
import dotenv from 'dotenv'

const router = Router();

router.get('/fetchResponse', async (req: Request, res: Response) => {
    console.log("Reached /fetchResponse API")
    const messages = req.body.messages

    const aiResponse = await getResponse(messages)

    res.json({aiResponse : aiResponse})
})

router.get('/getSessions/:userId', handleGetUserSessions)

export default router

