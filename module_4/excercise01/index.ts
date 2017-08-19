class Person {
 
    constructor(public id: number,  public age: number,  public name: string, public lastname: string ) {
    }
}

class Student extends Person {
    
    classes: Array<string>;
    grade: number;
    group: string;

    constructor(id: number,  age: number, name: string, lastname: string, classes: Array<string>,  grade: number, group: string) {
        super(id, age, name, lastname);
        this.classes = classes;
        this.grade = grade;
        this.group = group;
    }
    
}

class Teacher extends Person{
    profile: string;
    grades: Array<number>;
    groups: Array<string>;
    students: Array<Student>;

    constructor(public id: number,  public age: number,  public name: string, lastname: string, profile: string,  grades: Array<number>,  groups: Array<string>, students: Array<Student>) {
        super(id, age, name, lastname);
        this.profile = profile;
        this.grades = grades;
        this.groups = groups;
        this.students = students;
    }
}


let objStudent1 = new Student(20, 29, "DIEGO", "ROMERO", ["Math", "Comunication", "Anatomy"], 11, "A");
let objStudent2 = new Student(20, 29, "MARIA", "RAMIREZ", ["Comunication", "Anatomy"], 11, "B");
let objStudent3 = new Student(20, 29, "JULIAN", "VELASQUEZ", ["Math", "Comunication"], 10, "A");
let objStudent4 = new Student(20, 29, "MARIO", "CARRILLO", ["Math", "Comunication"], 10, "A");

let arrStudents: Array<Student> = [objStudent1, objStudent2, objStudent3, objStudent4];

let objTeacher1 = new Teacher(20, 29, "ALEJANDRO", "ROMERO", "Engineer", [8, 9, 10], ["A"], arrStudents);
let objTeacher2 = new Teacher(20, 29, "HECTOR", "VALENCIA", "Doctor", [10, 11], ["A", "B"], arrStudents);
let objTeacher3 = new Teacher(20, 29, "JUAN", "MONCAYO DIAZ", "Master", [9,10], ["A", "B"], arrStudents);

let arrTeachers: Array<Teacher> = [objTeacher1, objTeacher2, objTeacher3];


arrTeachers.forEach(elementTeacher => { 

    console.log("\n PROFESOR: " + elementTeacher.name + " " + elementTeacher.lastname + "\n\n ALUMNOS: \n");
    elementTeacher.grades.forEach(gradeTeacher => { 
        arrStudents.forEach(elementstudent => {
            if(gradeTeacher == elementstudent.grade) {
                console.log("   " + elementstudent.name + " " + elementstudent.lastname);
            }
        });
});
});   



