
let arrValues1: Array<string> = ["Dog", "Cat", "Frog"];
let arrValues2: Array<number> = [20, 30, 40, 50];
let arrValues3: Array<Object> = [{Id: 50, Name: "Diego"}, {Id: 60, Name: "David"}, {Id: 80, Name: "Juliana"}];

console.log("\n ARREGLO DE STRINGS: \n");
arrValues1.forEach(element => {
    console.log(element);
});


console.log("\n ARREGLO DE NUMBERS: \n");
arrValues2.forEach(element => {
    console.log(element);
});


console.log("\n ARREGLO DE OBJECTS: \n");
arrValues3.forEach(element => {
    console.log(element["Id"] + " " + element["Name"]);
});