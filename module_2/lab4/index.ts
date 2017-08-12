let a:string;
a = "El valor de A";

let b:number = 500;

let blnAllow: true; 

let arrValues: Array<string>;

arrValues = ["Dog", "Cat", "Frog"];

let dteBirth: Date;


let objText: any = new Object();
objText.Id = 12;
objText.Nombre = "Pompilio Cardenas";

console.log("\n LISTA DE ANIMALES \n");
arrValues.forEach(element => {
    console.log("El animal es: " + element);
});
console.log("\n DESCIPCION DEL OBJETO \n");
console.log("Id: " + objText.Id);
console.log("Nombre: " + objText.Nombre);

console.log("\n OTRAS VARIABLES \n");
console.log("Allow: " + (blnAllow == true ? "Permitido" : "Denegado"));