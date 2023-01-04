import  express  from "express";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import root from "./utils/root";
import pool from "./utils/config"

const envConfig = config()
expand(envConfig)

const app = express()

const PORT = process.env.PORT || 3000

root(app)

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))