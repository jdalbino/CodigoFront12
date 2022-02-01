// GET REQUEST
function GetUsers(){
const urlUsers = "https://61ef3d44d593d20017dbb3a9.mockapi.io/users";
fetch(urlUsers)
.then((user)=>user.json())
.then((user)=>{
    user.forEach((useritem)=>{
        addDom(useritem)
    })
})
.catch(err=>console.log(err));

// ADD CARD ELEMENT
function addDom(user){
    const div = document.getElementById('app');
    const usercard = document.createElement('div');
    usercard.innerHTML = `
        <div class="card-body bg-light">
        <h5 class="card-title">${user.name} ${user.lastname}</h5>
        <p><strong>Country:</strong> ${user.country}</p>
        <p><strong>Description:</strong> ${user.description}</p>
        </div>
      `;
    usercard.classList = "card col-4 m-3"; //"col", "col-4", "mb-4"
    usercard.style.width = "18rem";
    div.appendChild(usercard);
}
}

// POST REQUEST
function PostUsers(userpost){
const urlpostUsers = "https://61ef3d44d593d20017dbb3a9.mockapi.io/users";
fetch(urlpostUsers,{
    method: 'POST',
    body: JSON.stringify(userpost),
    headers: {
        "content-type":"application/json",
    }
})
.then((user)=>user.json())
.then((user)=>{
    GetUsers();
    console.log(user,"Success")
})
.catch((err)=>{console.log(err)})
}


// COLLECT DATA FOR POST OR GET
function formResult(){
    return {
        name: document.querySelector('.js_name').value,
        lastname: document.querySelector('.js_lastname').value,
        country: document.querySelector('.js_country').value,
        description: document.querySelector('.js_cargo').value,
    }
}

// FORM BUTTONS FOR POSTING RESTULTS
let form = document.querySelector('form');
form.onsubmit = function (event) {
    event.preventDefault();
    Clear();
    PostUsers(formResult());
    form.reset();
}
// FORM BUTTONS FOR CLEARING RESTULTS
let buttonclear = document.querySelector('.js_clear');
buttonclear.onclick = function() {
    Clear();
};
function Clear() {
    const div = document.getElementById('app');
    div.textContent='';
}
// FORM BUTTONS FOR GETTING RESTULTS
let buttonget = document.querySelector('.js_get');
buttonget.onclick = function() {
    Clear();
    GetUsers();
}

