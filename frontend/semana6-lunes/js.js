function makeFullName(ArgOne,ArgTwo) {
let ArgOneString = ArgOne.toString();
let ArgTwoString = ArgTwo.toString();

const ArgOneEnd = ArgOneString.charAt(0).toUpperCase() + ArgOneString.slice(1).toLowerCase();
const ArgTwoEnd = ArgTwoString.charAt(0).toUpperCase() + ArgTwoString.slice(1).toLowerCase();

let fullname = ArgOneEnd + " " + ArgTwoEnd;

return fullname
}
console.log(makeFullName("JuAN","ALBINO"));

function countRepeatLetter(ArgOne,ArgTwo) {
    let contador = 0;
    for (i=0; i< ArgOne.length;i++) {
        if (ArgOne.charAt(i) == ArgTwo) {
            contador = contador + 1;
        } else {};
    }
    return contador;
}
console.log(countRepeatLetter("HABLA","A"));

let numeros = [0,1,2,3,4,5,6,7,8,9,10];

function multiploN(col,num) {

const newArray = numeros.map(x=> x*num);
    return newArray
}
console.log(multiploN(numeros,10));

let mascotas = [
    {
      name: "aronis",
      edad: 12,
      sexo: "m",
    },
    {
      name: "terry",
      edad: 4,
      sexo: "m",
    },
    {
      name: "juda",
      edad: 3,
      sexo: "h",
    },
    {
      name: "aronis",
      edad: 8,
      sexo: "h",
    },
  ];

let newArrayFiltermayores = mascotas.filter(x => x.edad > 4)
console.table(newArrayFiltermayores);

let newArrayFilterMenores = mascotas.filter(x => x.edad < 4)
console.table(newArrayFilterMenores);

let newArrayMacho = mascotas.filter(x => x.sexo == "m");
console.table(newArrayMacho);
let newArrayHembra = mascotas.filter(x => x.sexo == "h");
console.table(newArrayHembra);

let mascotasModificado = mascotas.map(x=> x);
console.log(mascotasModificado);

let mascotasModificado2 = Object.assign({}, mascotasModificado);
console.log(mascotasModificado2);