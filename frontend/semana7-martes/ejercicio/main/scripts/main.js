// GET
function obteneruser() {
fetch("https://61ef3d44d593d20017dbb3a9.mockapi.io/users")
  .then(function (user) {
    return user.json();
  })
  .then(function (user) {
    // console.log("computers", computers);
    user.forEach(function (user) {
        makeCard(user);
        // console.log("computer", computer);
  });
  });

function makeCard(user){
    const seccion = document.getElementById('app');
    const card = document.createElement('article');
    card.innerHTML = `
    <div class="card">
    <div class="card-body">
        <h5 class="card-title">${user.name}</h5>
        <h5 class="card-title">${user.lastname}</h5>
    </div>
    <button>X</button>
    </div>
    `;
    card.classList.add("col", "col-4", "mb-4");
    seccion.appendChild(card);
}
};

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

/*
GET
Usando el metodo get 
realizar una peticion al endpoint creado con mockapi y pintar los datos en el navegador
*/
// obteneruser();
// POST

// function crearUser(){
// fetch("https://61ef3d44d593d20017dbb3a9.mockapi.io/users",{
//   method: 'POST',
//   body: JSON.stringify({
//     "name": "juan diego",
//     "lastname": "elreal",
//     "country": "peru",
//     "description": "de la descrip",
//     "photo": "photaso",
//     "cellphone": "94020",
//   }),
//   headers: {"Content-Type": "application/json",}
// })
// .then((user)=>{user.json()})
// .then((user)=>{console.log(user);obteneruser()})
// .catch((error)=>{error})
// };
// crearUser();
// delete : con la x