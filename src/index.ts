import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from "express";
import { useRoutes } from './routes';
import bodyParser from 'body-parser';


const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());

useRoutes(app);

app.get('/', (req: Request, res: Response) => {
    res.json({
        msg: "Hello Efrass"
    })
}) 



app.listen(PORT, () => console.log("Connect into the port " + PORT))


/**
 *    Document purposes
 *  1 - Connect the server to the browser
 * 
 */





/**
 * DEPENDENCIES:
 * -> express (npm i express @types/express)
 * -> sqlite (npm i sqlite3 @tipes/sqlite3)
 * -> dotenv (npm i dotenv @types/dotenv)
 */