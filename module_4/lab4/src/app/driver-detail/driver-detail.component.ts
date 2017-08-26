import { Component, OnInit, Input } from '@angular/core';
import { Driver } from '../models/driver';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.css']
})
export class DriverDetailComponent implements OnInit {

  @Input() driverEdit: Driver;

  urrVariable="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcIabS_VhrtNHSgYnVjizFNX-yOHqqzDhvDNjHuZolWzunfN2o";

  constructor() { }

  ngOnInit() {
  }

}
