import { Component } from '@angular/core';
import {Product} from "./models/product";
import {Post} from "./models/post";
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "los productos del Año";

  selected: Product;

  posts: Post[];
  products: Product[];

  constructor(private productsService: ProductsService) {

  }

  getProducts() {
    this.productsService.getProducts()
      .subscribe(
        products => {
          this.products = products;
        },

        error => {
          console.log(error);
        }
      );
  }

  getPosts() {
    this.productsService.getPosts()
      .subscribe(
        posts => {
          this.posts = posts;
        },

        error => {
          console.log("se genero error REVISE");
        }
      );
  }

  ngOnInit(): void {
    this.getProducts();
    this.getPosts();
  }

  onSelect(product: Product){
    this.selected = product;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.productsService.create(name)
      .subscribe(product => {
        this.products.push(product);
        this.selected = null;
      });
  }
}
