import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  arrstudents: Array<Student>;
  selectedStudent: Student;
   
  constructor() {

    this.arrstudents = new Array<Student>();
    
    this.arrstudents.push(new Student(20,24,"Julian David", "Romero", ["Matematicas"],10,"B"));
    this.arrstudents.push(new Student(30,22,"Marco Daniel", "Clavijo", ["Matematicas"],11,"B"));
    this.arrstudents.push(new Student(40,44,"Sofia", "casas", ["Matematicas"],9,"B"));

   }
//studentEdit
  ngOnInit() {
  }

  onSelectStudent(student) {
    this.selectedStudent = student;
  }

}
