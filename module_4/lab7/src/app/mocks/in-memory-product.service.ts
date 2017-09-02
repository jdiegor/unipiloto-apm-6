import {InMemoryDbService} from "angular2-in-memory-web-api";
import {Product} from "../models/product";

export class InMemoryProductService implements InMemoryDbService {
  createDb() {
    let products: Array<Product> = [
      {
        id: 1,
        name: "Samsung galaxy 8",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20,
        photo: "https://static.wixstatic.com/media/5c142b_79886625a57746209b806a3757ecf20f~mv2.jpg/v1/fill/w_256,h_256,q_85,usm_0.66_1.00_0.01/5c142b_79886625a57746209b806a3757ecf20f~mv2.jpg"
      },
      {
        id: 2,
        name: "Samsung galaxy 10",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20,
        photo: "https://static.wixstatic.com/media/5c142b_646d322405cd4823b69d652cc25d5e27~mv2.jpg/v1/fill/w_256,h_256,q_85,usm_0.66_1.00_0.01/5c142b_646d322405cd4823b69d652cc25d5e27~mv2.jpg"
      },
      
      {
        id: 3,
        name: "Samsung galaxy 20",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20,
        photo: "https://static.wixstatic.com/media/5c142b_c2dc2cfc546b4661990b55612b266f3b~mv2_d_2815_2815_s_4_2.jpg/v1/fill/w_256,h_256,q_85,usm_0.66_1.00_0.01/5c142b_c2dc2cfc546b4661990b55612b266f3b~mv2_d_2815_2815_s_4_2.jpg"
      },
      {
        id: 4,
        name: "IPhone 4G",
        description: "telefono que a veces explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20,
        photo: "http://static.wixstatic.com/media/75f69e_049ecfbcd1ed4018aef888c033fa8d16.png_256"
      }
    ];

    return {products};
  }

}
