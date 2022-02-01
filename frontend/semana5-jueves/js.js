function sum(a,b) {
    return a + b
}
console.log(sum(1,2))

function convert(minute) {
    return minute * 60
}
console.log(convert(1))

function getFirstValue(arr) {
    return arr[0]
}
let arreglo = [10,1,2,3]

console.log(getFirstValue(arreglo))
function ejecicioDos() {
    let notas = [];
    notas[0] = Number(prompt("ingresar nota 1",));
    notas[1] = Number(prompt("ingresar nota 2",));
    notas[2] = Number(prompt("ingresar nota 3",));
    notas[3] = Number(prompt("ingresar nota 4",));
    let promedio = 0;
    for (i=0; i<=3; i++) {
        promedio = promedio + notas[i];
    };
    console.log(promedio / notas.length)
    return promedio / notas.length
};
ejecicioDos();

function ejercicioTres(largo,ancho) {
return largo * ancho
}
console.log(ejercicioTres(20,10));
function ejercicioCuatro(b,h) {
return b*h/2
};
console.log(ejercicioCuatro(2,3));

function ejercicioCinco(radio) { 
    return Math.PI*(radio**2)
}
console.log(ejercicioCinco(10));

function ejercicioSeis(salario,horas) {
    if (horas > 40) {
    let Semanas = math.round((horas/40));
    return salario*horas/Semanas
    } else {
    return horas*salario
    } 
}
console.log(ejercicioSeis(10,40));

function ejercicioSiete(metros) {

let pulgadasAPedir = metros * 0.0254;

    return pulgadasAPedir
}
console.log(ejercicioSiete(10));
function ejercicioOcho(Soles) {
    return Soles/4
}
console.log(ejercicioOcho(10));
function ejercicioNueve(año) {
    
}