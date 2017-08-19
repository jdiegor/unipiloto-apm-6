var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(id, age, name, lastname) {
        this.id = id;
        this.age = age;
        this.name = name;
        this.lastname = lastname;
    }
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(id, age, name, lastname, classes, grade, group) {
        _super.call(this, id, age, name, lastname);
        this.classes = classes;
        this.grade = grade;
        this.group = group;
    }
    return Student;
}(Person));
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(id, age, name, lastname, profile, grades, groups, students) {
        _super.call(this, id, age, name, lastname);
        this.id = id;
        this.age = age;
        this.name = name;
        this.profile = profile;
        this.grades = grades;
        this.groups = groups;
        this.students = students;
    }
    return Teacher;
}(Person));
var objStudent1 = new Student(20, 29, "DIEGO", "ROMERO", ["Math", "Comunication", "Anatomy"], 11, "A");
var objStudent2 = new Student(20, 29, "MARIA", "RAMIREZ", ["Comunication", "Anatomy"], 11, "B");
var objStudent3 = new Student(20, 29, "JULIAN", "VELASQUEZ", ["Math", "Comunication"], 10, "A");
var objStudent4 = new Student(20, 29, "MARIO", "CARRILLO", ["Math", "Comunication"], 10, "A");
var arrStudents = [objStudent1, objStudent2, objStudent3, objStudent4];
var objTeacher1 = new Teacher(20, 29, "ALEJANDRO", "ROMERO", "Engineer", [8, 9, 10], ["A"], arrStudents);
var objTeacher2 = new Teacher(20, 29, "HECTOR", "VALENCIA", "Doctor", [10, 11], ["A", "B"], arrStudents);
var objTeacher3 = new Teacher(20, 29, "JUAN", "MONCAYO DIAZ", "Master", [9, 10], ["A", "B"], arrStudents);
var arrTeachers = [objTeacher1, objTeacher2, objTeacher3];
arrTeachers.forEach(function (elementTeacher) {
    console.log("\n PROFESOR: " + elementTeacher.name + " " + elementTeacher.lastname + "\n\n ALUMNOS: \n");
    elementTeacher.grades.forEach(function (gradeTeacher) {
        arrStudents.forEach(function (elementstudent) {
            if (gradeTeacher == elementstudent.grade) {
                console.log("   " + elementstudent.name + " " + elementstudent.lastname);
            }
        });
    });
});
