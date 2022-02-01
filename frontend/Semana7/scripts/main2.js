function createUser(){
    // RETORNA OBJETO CON VALORES DEL USUARIO
    function getValuesUser(){
        return {
            name: document.querySelector('js_name').value,
            lastname: document.querySelector('js_lastname').value,
            cellphone: document.querySelector('js_cellphone').value,
            photo: document.querySelector('js_photo').value,
            description: document.querySelector('js_description').value,
        };
    }

    // FUNCION POST PARA GUARDAR USUARIOS EN EL ENDPOINT
    function saveUser(user,callback) {
        fetch("https://61ef3d44d593d20017dbb3a9.mockapi.io/users", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "content-Type": "application/json, charset=UTF-8",
            },
        })
        .then((response)=>{
            return response.json();
        })
        .then(()=> {
            callback();
        })
        .catch((error)=> {
            console.log("error",error);
        });
    }
    //Funcion get para obtener usuarios
    function getUsers(callback) {
        fetch("https://61ef3d44d593d20017dbb3a9.mockapi.io/users")
        .then((response)=>{
            return response.json();
        })
        .then((usuarios)=>{
            callback(usuarios);
        })
        .catch((error)=>{});
    }

    //Funcion para crear usuarios
    function makeCardUser(user) {
        const cardUser = document.createElement("article");
        cardUser.innerHTML = `
        <div class="card">
              <img src=${user.photo} class="card-img-top" >
              <div class="card-body">
                  <h5 class="card-title">${user.name} ${user.lastname}</h5>
                  <h5 class="card-title">${user.cellphone}</h5>
                  <p class="card-text">${user.description}</p>
              </div>
              <button>X</button>
          </div>
        
        `;
        cardUser.classList.add("col","col-4","mb-4");
        cardUser.querySelector("button").onclick = function(){
            if(confirm("Estas seguro que deseas eliminar esta carta?")) {
                cardUser.remove();
            }
        };
        return cardUser;
    }
    function addDom(node, container) {
        const app = document.getElementById(container);
        app.appendChild(node);
      };

      function eventForm() {
        const form = document.querySelector("form"); // tomo el formulario
        form.onsubmit = function (event) {
          // se registra evento de formulario
          event.preventDefault(); // se quita comportamiento por defecto del formulario
    
          saveUser(getValuesUser(), function (response) {
            // se ejecuta saveUser
            console.log("aca en esto momento se creo un usuario!!!");
            getUsers(function (users) {
              users.forEach((user) => {
                addDom(makeCardUser(user), "app");
              });
            });
          });
        };
      }
      
      getUsers(function (users) {
        users.forEach((user) => {
          addDom(makeCardUser(user), "app");
        });
      });
    
      eventForm();
}

createUser();