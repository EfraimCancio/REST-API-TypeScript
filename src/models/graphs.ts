import { dbQuery } from "../services/db";

export type Graphs = {
    id: number;
    graph: string;
}

export const insertGraph = async (graphs : Graphs) => {
    await dbQuery(`INSERT INTO graphs (graph) values(?)`, [graphs.graph])
    let retur  = await dbQuery(`SELECT seq AS Id FROM sqlite_sequence WHERE name = 'graph'`)
    return retur[0].Id as number | undefined;
}

const listGraphs = async () => {
    const retorno = await dbQuery(`SELECT * FROM graphs`);
    return retorno as Graphs[];
}

export const graphsModel = {
    insertGraph,
    listGraphs
}


/**
 * 
 *    Document purposes
 *  1 - Definition of models for the database
 *  
 */


/**
 * links
 *    https://stackoverflow.com/questions/58224445/how-to-save-an-json-object-to-multiple-json-object-typescript   
 *    https://www.sqlite.org/json1.html#jmini
 */