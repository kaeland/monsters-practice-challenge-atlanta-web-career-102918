// console.log('Hi')
const SERVER_URL = 'http://localhost:3000/monsters';
const monster = {
  "name": "Chronos",
  "age": 4005.302453418598,
  "description": "Effulgence eldritch shunned foetid. Ululate gibbering tenebrous foetid iridescence daemoniac. Stench nameless gambrel. Amorphous furtive iridescence noisome. Foetid mortal nameless.",
  "id": 1
}
document.addEventListener("DOMContentLoaded", initPage)

function initPage (){
fetchMonsters()
addFormHandler()

}
function fetchMonsters(){
  fetch('http://localhost:3000/monsters/?_limit=50')
    .then(function(resp) {
      return resp.json();
    })
    .then(function(monsters) {
      monsters.map(showMonster);
    });
}


function showMonster(monster) {
  // Find HTML to put the monster inspect
  // console.log('inside a monster', monster)
  let monsterDiv = document.querySelector('#monster-container');

  // use innerHTML = monster string
  monsterDiv.innerHTML += `
    <h1>${monster.name}</h1>
    <h3>${monster.age}</h3>
    <p>${monster.description}</p>
  `
};

// Create Monster Form

function addFormHandler() {
    var formContainer = document.querySelector('#new-monster-form')
    formContainer.addEventListener('submit', processNewMonster)
console.log('inside addFormHandler')
};

function processNewMonster() {
  var name = document.querySelector('#name-input').value;
  var age = document.querySelector('#age-input').value;
  var description = document.querySelector('#description-input').value;

  var request = new Request(SERVER_URL);
  var body = JSON.stringify({
    name: name,
    age: age,
    description: description
  })
  debugger
  var options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body
  };

  fetch(request, options)
    .then(function(resp) {
      return resp.json()
    }).then(showMonster)
    console.log('inside processNewMonster')
};
