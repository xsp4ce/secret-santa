let names = [];

function getInputValue(id) {
  return document.getElementById(id).value.trim();
}

function clearInput(id) {
  document.getElementById(id).value = '';
}

function displayList(elementId, items) {
  const list = document.getElementById(elementId);
  list.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

function addName() {
  const capturedName = getInputValue('amigo');

  if (!capturedName) {
    alert('Por favor, inserte un nombre.');
    return;
  }

  names.push(capturedName);
  clearInput('amigo');
  displayList('listaAmigos', names);
}

function sortNames() {
  if (names.length < 3) {
    alert('Debe agregar al menos 3 participantes!');
    return;
  }

  const shuffled = [...names].sort(() => Math.random() - 0.5);
  const results = {};

  shuffled.forEach((name, i) => {
    results[name] = shuffled[(i + 1) % shuffled.length];
  });

  const resultItems = Object.entries(results).map(
    ([giver, receiver]) => `${giver} → ${receiver}`
  );

  displayList('resultado', ['🎁 Resultados del Amigo Secreto:', ...resultItems]);
}
