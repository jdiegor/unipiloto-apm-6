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
    
    this.arrdrivers.push(new Driver(20,2451242124,"Julian David", "Romero", 25, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztSMex6_l8niut2n-2TMvh99iHA7JSHhoHhqxG2lNMRqVMI7Ugw"));
    this.arrdrivers.push(new Driver(30,2451244322,"Marco Daniel", "Clavijo", 55, "data:image/jpeg;base64,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"));
    this.arrdrivers.push(new Driver(40,2451224344,"Sofia", "casas", 28, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcIabS_VhrtNHSgYnVjizFNX-yOHqqzDhvDNjHuZolWzunfN2o"));
   }

  ngOnInit() {
  }

  onSelectDiver(driver) {
    this.selectedDriver = driver;
  }
}
