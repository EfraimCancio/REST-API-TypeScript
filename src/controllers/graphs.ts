import {Request, Response} from 'express';
import { Graphs, graphsModel } from '../models/graphs';
import { badRequest, internalServerError } from '../services/util';

const insertGraph = (req: Request, res: Response) => {
    {
        const graphs = req.body;
        if(!graphs)
            return badRequest(res, "Invalid graph!");

        if(!graphs.graph)
            return badRequest(res, 'Inform the graph!'); 
    }

    const graph = req.body as Graphs;
    graphsModel.insertGraph(graph)
        .then( id => {
            res.json({
                id
            })
        })
        .catch(err => internalServerError(res, err));
}

const listGraphs = (req: Request, res: Response) => {
    graphsModel.listGraphs()
        .then( graphs => {
            res.json(graphs)
        })
        .catch(err => internalServerError(res, err));
}

export const graphsController = {
    insertGraph, listGraphs
}