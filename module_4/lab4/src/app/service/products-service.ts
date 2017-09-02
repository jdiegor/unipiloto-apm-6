import { Injectable } from '@angular/core';
import { PRODUCTS } from '../mocks/product-mock';

@Injectable()
export class ProductsService {

  getProducts(){
    return Promise.resolve(PRODUCTS);
  }

}
