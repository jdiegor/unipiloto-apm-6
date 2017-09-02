import { Injectable } from '@angular/core';
import { DRIVERS } from '../mocks/driver-mock';

@Injectable()
export class DriversService {

  getProducts(){
    return Promise.resolve(DRIVERS);
  }

}
