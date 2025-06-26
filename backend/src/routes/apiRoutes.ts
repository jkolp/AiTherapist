import { Router, Request, Response, response } from "express";
import apiProvider from "../providers/openaiApiProvider";
import { getResponse } from "../api/openaiApiService";
import dotenv from 'dotenv'

const router = Router();
// Link variables inside .env file
dotenv.config()

router.post('/fetchResponse', async (req: Request, res: Response) => {
    console.log("Reached /fetchResponse API")
    const messages = req.body.messages

    const aiResponse = await getResponse(messages)

    res.json({aiResponse : aiResponse})
})


export default router

