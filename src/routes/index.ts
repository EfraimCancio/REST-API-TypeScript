import { Application} from "express";
import  Router  from "express";
import { graphsRouter } from "./graphs";




export const useRoutes = (app: Application) => {
    const apiRouter = Router();
    apiRouter.use('/graphs', graphsRouter);

    app.use('/api/v1', apiRouter);

}




/**
 *    Document purposes
 *  1 - App route mapping
 * 
 */