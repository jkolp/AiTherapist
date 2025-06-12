import { Router, Request, Response } from "express";

const router = Router();

router.get('/fetchResponse', (req: Request, res: Response) => {
    res.json({message : 'Success! Response received.'})
})

export default router