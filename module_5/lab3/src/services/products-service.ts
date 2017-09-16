import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductsService {

  getProducts():Promise<Array<Product>> {
    let arrProducts: Array<Product> = new Array<Product>();

    let objProduct: Product;

    objProduct = new Product();
    objProduct.id = 1;
    objProduct.name = "Fosforos el rey";
    objProduct.price = 500;
    objProduct.description = "Fosforos para la cocina";

    arrProducts.push(objProduct);

    objProduct = new Product();
    objProduct.id = 3 
    objProduct.name = "Papel de Carta";
    objProduct.description = "Leller paper for printer";
    arrProducts.push(objProduct);

    return Promise.resolve(arrProducts);
  }

}
