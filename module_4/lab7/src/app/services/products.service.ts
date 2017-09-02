import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ProductsService {

  private productsURI = 'http://localhost:3000/api/products';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getProducts(): Promise<Product[]>{
    return this.http.get(this.productsURI)
      .toPromise()
      .then(response => response.json().data as Product[])
      .catch(this.handleError);
  }

  getProduct(id: number): Promise<Product> {
    const url = `${this.productsURI}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Product)
      .catch(this.handleError);
  }

  /*
    update(product: Product): Promise<Product> {
    const url = `${this.productsURI}/${product.id}`;
    return this.http
      .put(url, JSON.stringify(product), {headers: this.headers})
      .toPromise()
      .then(() => product)
      .catch(this.handleError);
  }
    */

    update(product: Product): Observable<Product> {
    const url = `${this.productsURI}/${product.id}`;
    return this.http
      .put(url, JSON.stringify(product), {headers: this.headers})
      .map(() => product)
      .catch(this.handleError);
  }

  create(name: string, type: string = ""): Promise<Product> {

    return this.http
      .post(this.productsURI, JSON.stringify({name: name, type: type}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data, )
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
