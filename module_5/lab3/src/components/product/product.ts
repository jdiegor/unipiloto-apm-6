import { Component } from '@angular/core';
import { ProductsService  } from '../../services/products-service';
import { Product } from '../../models/product';

/**
 * Generated class for the ProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product',
  templateUrl: 'product.html'
})
export class ProductComponent {

  text: string;
  arrProducts: Array<Product>;

  constructor(public productsService: ProductsService) {
    this.productsService.getProducts().then((data) => {
      this.arrProducts = data;
    })
  }

}
