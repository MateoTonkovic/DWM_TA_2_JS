function addPerson() {
  const peopleInputs = document.getElementById("peopleInputs");
  const personCount = peopleInputs.getElementsByClassName("person").length + 1;

  const newPerson = document.createElement("div");
  newPerson.className = "person";
  newPerson.innerHTML = `
        <label for="name${personCount}">Nombre:</label>
        <input type="text" id="name${personCount}" name="name${personCount}" required>
        <label for="age${personCount}">Edad:</label>
        <input type="number" id="age${personCount}" name="age${personCount}" required>
    `;
  peopleInputs.appendChild(newPerson);
}

function findTheOldest(people) {
  if (people.length === 0) {
    return null;
  }

  let oldestPerson = people[0];

  for (let i = 1; i < people.length; i++) {
    if (people[i].age > oldestPerson.age) {
      oldestPerson = people[i];
    }
  }

  return oldestPerson;
}

document
  .getElementById("peopleForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const people = [];
    const personElements = document.getElementsByClassName("person");

    for (let i = 0; i < personElements.length; i++) {
      const name = personElements[i].querySelector(
        `input[name=name${i + 1}]`
      ).value;
      const age = parseInt(
        personElements[i].querySelector(`input[name=age${i + 1}]`).value
      );

      people.push({ name: name, age: age });
    }

    console.log(people);

    const oldestPerson = findTheOldest(people);

    const resultElement = document.getElementById("result2");
    if (oldestPerson) {
      resultElement.innerText = `La persona más vieja es ${oldestPerson.name} con ${oldestPerson.age} años.`;
    } else {
      resultElement.innerText = "No se ingresaron suficientes datos.";
    }
  });
