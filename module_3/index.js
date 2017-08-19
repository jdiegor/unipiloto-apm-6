var arrValues1 = ["Dog", "Cat", "Frog"];
var arrValues2 = [20, 30, 40, 50];
var arrValues3 = [{ Id: 50, Name: "Diego" }, { Id: 60, Name: "David" }, { Id: 80, Name: "Juliana" }];
console.log("\n ARREGLO DE STRINGS: \n");
arrValues1.forEach(function (element) {
    console.log(element);
});
console.log("\n ARREGLO DE NUMBERS: \n");
arrValues2.forEach(function (element) {
    console.log(element);
});
console.log("\n ARREGLO DE OBJECTS: \n");
arrValues3.forEach(function (element) {
    console.log(element["Id"] + " " + element["Name"]);
});
