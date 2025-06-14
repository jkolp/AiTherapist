import { Router, Request, Response, response } from "express";
import apiProvider from "../providers/openaiApiProvider";
import { getResponse } from "../api/openaiApiService";

const router = Router();

router.post('/fetchResponse', async (req: Request, res: Response) => {
    console.log("Reached /fetchResponse API")
    const messages = req.body.messages

    const aiResponse = await getResponse(messages)
    console.log(`aiResponse : ${aiResponse}`)
    res.json({aiResponse : aiResponse})
})


export default router

