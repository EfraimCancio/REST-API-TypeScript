
import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from "express";
import { useRoutes } from './routes';
import bodyParser from 'body-parser';


const PORT = process.env.PORT || 8691;

const app = express();

app.use(bodyParser.json());

useRoutes(app);

app.get('/', (req: Request, res: Response) => {
    res.json({
        msg: "Efrass"
    })
})

app.listen(PORT, () => console.log("deu bom" + PORT))