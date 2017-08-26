export  class Student  {
    
    classes: Array<string>;
    grade: number;
    group: string;
    arrstudents: Array<any>;

    constructor(public id: number,  public age: number,  public name: string, public lastname: string, classes: Array<string>,  grade: number, group: string) {
        
        this.classes = classes;
        this.grade = grade;
        this.group = group;
    }
    
}