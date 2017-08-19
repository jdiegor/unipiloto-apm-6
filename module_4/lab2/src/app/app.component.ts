import { Component } from '@angular/core';

interface Person {
  id: number;  
  age: number;  
  name: string; 
  lastname: string; 
}

export  class Student implements Person {
    
    classes: Array<string>;
    grade: number;
    group: string;

    constructor(public id: number,  public age: number,  public name: string, public lastname: string, classes: Array<string>,  grade: number, group: string) {
        
        this.classes = classes;
        this.grade = grade;
        this.group = group;
    }
    
}

export class Teacher implements Person{
    profile: string;
    grades: Array<number>;
    groups: Array<string>;
    students: Array<Student>;

    constructor(public id: number,  public age: number,  public name: string, public lastname: string, profile: string,  grades: Array<number>,  groups: Array<string>, students: Array<Student>) {
    
        this.profile = profile;
        this.grades = grades;
        this.groups = groups;
        this.students = students;
    }
}

export class Product {
  id: number;
  name: string;
  description: string;
  type: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title: string = "El producto del Año";

  product: Product = {
    id: 2,
    name: "Samsung galaxy 7",
    description: "telefono que explota",
    type: "smartphone",
    price: 1500000,
    quantity: 20,
  };

  selected: Product;

  onSelect(product: Product){
    this.selected = product;
  }

  objStudent: Student = new Student(20, 32, "JUANCHO", "SALAZAR", ["Filosofia"], 11, "A");

    products: Product[] = [
    {
      id: 1,
      name: "Samsung galaxy 8",
      description: "telefono que explota",
      type: "smartphone",
      price: 1500000,
      quantity: 20
    },
    {
      id: 2,
      name: "Samsung galaxy 10",
      description: "telefono que explota",
      type: "smartphone",
      price: 1500000,
      quantity: 20
    },
    {
      id: 3,
      name: "Samsung galaxy 20",
      description: "telefono que explota",
      type: "smartphone",
      price: 1500000,
      quantity: 20
    }
  ];


  selectedTeacher: Teacher; 
  arrTeachers: Array<Teacher> = [new Teacher(20, 29, "ALEJANDRO", "ROMERO", "Engineer", [8, 9, 10], ["A"], []), 
                                 new Teacher(20, 40, "HECTOR", "VALENCIA", "Doctor", [10, 11], ["A", "B"], []), 
                                 new Teacher(20, 52, "JUAN", "MONCAYO DIAZ", "Master", [9,10], ["A", "B"], [])];


  onSelectTeacher(objTeacher: Teacher) {
    this.selectedTeacher = objTeacher;
  }
}

