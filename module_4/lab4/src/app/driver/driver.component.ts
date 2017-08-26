import { Component, OnInit } from '@angular/core';
import { Driver } from '../models/driver';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  arrdrivers: Array<Driver>; 
  selectedDriver: Driver;

  constructor() {
    this.arrdrivers = new Array<Driver>();
    
    this.arrdrivers.push(new Driver(20,2451242124,"Julian David", "Romero", 25));
    this.arrdrivers.push(new Driver(30,2451244322,"Marco Daniel", "Clavijo", 55));
    this.arrdrivers.push(new Driver(40,2451224344,"Sofia", "casas", 28));
   }

  ngOnInit() {
  }

  onSelectDiver(driver) {
    this.selectedDriver = driver;
  }
}
