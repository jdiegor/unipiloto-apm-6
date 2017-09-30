import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import * as Rx from 'rxjs';
import * as firebase from 'firebase/app';


@Injectable()
export class StudentService {


  arrStudents: Array<any>;

  constructor() {
   const task = () => alert('it works!');

    /*CON UN SCHEDULER SE LANZA UNA ACTIVIDAD DESPUES DE QUE AN PASADO 4 SEGUNDOS */
    Rx.Scheduler.async.schedule(task, 4000);
  }

  
  
}
