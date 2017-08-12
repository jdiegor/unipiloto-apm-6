var a;
a = "El valor de A";
var b = 500;
var blnAllow;
var arrValues;
arrValues = ["Dog", "Cat", "Frog"];
var dteBirth;
var objText = new Object();
objText.Id = 12;
objText.Nombre = "Pompilio Cardenas";
console.log("\n LISTA DE ANIMALES \n");
arrValues.forEach(function (element) {
    console.log("El animal es: " + element);
});
console.log("\n DESCIPCION DEL OBJETO \n");
console.log("Id: " + objText.Id);
console.log("Nombre: " + objText.Nombre);
console.log("\n OTRAS VARIABLES \n");
console.log("Allow: " + (blnAllow == true ? "Permitido" : "Denegado"));
