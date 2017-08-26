import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input() studentEdit: Student;

  constructor() { 

  }

  ngOnInit() {
  }

}
