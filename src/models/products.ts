import { dbQuery } from "../services/db";

export type Product = {
    id: number;
    name: string;
    price: number;
}

const insertProduct = async (product : Product) => {
    await dbQuery(`INSERT INTO product (name, price) values(?,?)`, [product.name, product.price])
    let retorno  = await dbQuery(`SELECT seq FROM sqlite_sequence WHERE name = 'product'`)
    return retorno[0].Id as number | undefined;
}

const listProducts = async () => {
    const retorno = await dbQuery(`SELECT * FROM product`);
    return retorno as Product[];
}

export const productModel = {
    insertProduct,
    listProducts
}