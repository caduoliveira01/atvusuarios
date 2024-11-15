import express from "express" 
import userRoutes from "./routes/users.js" 
import cors from "cors" 

const app = express() //cria a instancia aplicação 

app.use(express.json()) //processe as requisições 

app.use(cors())   //evita conflito de porta 

app.use("/", userRoutes) 

app.listen(8801)