import { Component } from '@angular/core';
import {Product} from '../models/product';

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Samsung galaxy 8",
    description: "telefono que explota",
    type: "smartphone",
    price: 1500000,
    quantity: 20
  },
  {
    id: 2,
    name: "Samsung galaxy 10",
    description: "telefono que explota",
    type: "smartphone",
    price: 1500000,
    quantity: 20
  },
  {
    id: 3,
    name: "Samsung galaxy 20",
    description: "telefono que explota",
    type: "smartphone",
    price: 1500000,
    quantity: 20
  }
];



export class Driver {
  

  constructor(
    public id: number,
    public license: number,
    public first_name: string,
    public last_name: string,
    public age: number
  ) {}

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "los productos del Año";
  selected: Product;
  products: Product[] = PRODUCTS;

  arrdrivers: Array<Driver>;

  

  constructor() {
    
    this.arrdrivers = new Array<Driver>();
    
    this.arrdrivers.push(new Driver(20,2451242124,"Julian David", "Romero", 25));
    this.arrdrivers.push(new Driver(30,2451244322,"Marco Daniel", "Clavijo", 55));
    this.arrdrivers.push(new Driver(40,2451224344,"Sofia", "casas", 28));

  }

  onSelect(product: Product){
    this.selected = product;
  }
 

}
