import { Component, OnInit } from '@angular/core';

export class Vehicle {
  

  constructor(
    public mark: string,
    public model: string,
    public color: string,
    public plate: string,
    public capacity: string,
    public build_year: number
  ) {}
}


@Component({
  selector: 'app-car-shop',
  templateUrl: './car-shop.component.html',
  styleUrls: ['./car-shop.component.css']
})
export class CarShopComponent implements OnInit {

  arrautos: Array<Vehicle>;
  carEdit: Vehicle;

  constructor() {
    this.carEdit = new Vehicle("","","","","",2017);

    this.arrautos = new Array<Vehicle>();

    this.arrautos.push(new Vehicle("Mazda", "1999", "Rojo", "SDF456", "4 Personas", 1990)),
    this.arrautos.push(new Vehicle("Fiat", "2012", "Negro", "Sdx206", "6 Personas", 2010)),
    this.arrautos.push(new Vehicle("Renault", "2012", "Verde", "SZF453", "4 Personas", 2000))
   }

  ngOnInit() {
  }

  onSelectTeacher(objCar: Vehicle) {
    this.carEdit = objCar;
  }
}
