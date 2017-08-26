import { Component, OnInit } from '@angular/core';
import { Master  } from '../../models/master';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  public arrmasters: Array<Master>;

  constructor() { 
    this.arrmasters = new Array<Master>();
    this.arrmasters.push(new Master(20, "David", "Lopez", "Match", 11));
    this.arrmasters.push(new Master(40, "Juan", "Camilo", "Spanish", 9));
    this.arrmasters.push(new Master(60, "Juliana", "Matinez", "Astronomy", 11));
  }

  ngOnInit() {
  }

  onSelectMaster(objmaster: Master) {
    
  }

}
