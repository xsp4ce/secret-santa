let names = [];

function addName() {
  let capturedName = document.getElementById('amigo').value;

  if (!capturedName.trim()) {
    alert('Por favor, inserte un nombre.');
  }

  if (capturedName) {
    names.push(capturedName);
    document.getElementById('amigo').value = '';
    displayNames();
  }
}

function displayNames() {
  let list = document.getElementById('listaAmigos');
  list.innerHTML = '';
  names.forEach(function (name) {
    let listItem = document.createElement('li');
    listItem.textContent = name;
    list.appendChild(listItem);
  });
}

displayNames();