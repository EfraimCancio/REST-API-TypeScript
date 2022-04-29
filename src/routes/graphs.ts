import { Router } from "express";
import { graphsController } from "../controllers/graphs";

const graphsRouter = Router();
graphsRouter.post('/', graphsController.insertGraph);
graphsRouter.get('/', graphsController.listGraphs);

export { 
    graphsRouter
}