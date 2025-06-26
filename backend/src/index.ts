import express, { Application } from "express";
import apiRoutes from "./routes/apiRoutes"
import cors from 'cors'

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '3000', 10)


// Middleware to parse JSON requests
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5174"
}))

// Route setup
app.use('/api', apiRoutes)

app.get('/', (req, res) => {
    res.send("You have reached Ai Therapist's server")
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server running at localhost Port# : ${PORT}`)
})
