import {Request, Response} from 'express';
import { Product, productModel } from '../models/products';
import { badRequest, internalServerError } from '../services/util';

const insertProduct = (req: Request, res: Response) => {
    {
        const product = req.body;
        if(!product)
            return badRequest(res, "Produto invalido");

        if(!product.name)
            return badRequest(res, 'Informe o nome do produto');
            
        if( !(parseFloat(product.price) > 0) )
            return badRequest(res, 'Informe o preço');    
    }

    const product = req.body as Product;
    productModel.insertProduct(product)
        .then( id => {
            res.json({
                id
            })
        })
        .catch(err => internalServerError(res, err));
}

const listProducts = (req: Request, res: Response) => {
    productModel.listProducts()
        .then( products => {
            res.json(products)
        })
        .catch(err => internalServerError(res, err));
}

export const productController = {
    insertProduct, listProducts
}