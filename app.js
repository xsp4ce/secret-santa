let names = [];

function addName() {
  let capturedName = document.getElementById('amigo').value;

  if (!capturedName.trim()) {
    alert('Por favor, inserte un nombre.');
  }

  if (capturedName) {
    names.push(capturedName);
    document.getElementById('amigo').value = '';
  }
}

document.getElementById('addButton').addEventListener('click', addName);