function repeatString(texto, repeticiones) {
  let result = "";
  for (let index = 0; index < repeticiones; index++) {
    result += texto + "<br/>";
  }
  return result;
}

function reverseString(texto) {
  let reversedString = "";
  for (let index = texto.length - 1; index >= 0; index--) {
    reversedString += texto[index];
  }
  return reversedString;
}

function mostrarRepeticiones() {
  const texto = document.getElementById("texto").value;
  const repeticiones = parseInt(document.getElementById("repeticiones").value);
  const resultado = repeatString(texto, repeticiones);
  document.getElementById("resultado").innerHTML = resultado;
}

function mostrarReverso() {
  const texto = document.getElementById("texto").value;
  const resultado = reverseString(texto);
  document.getElementById("resultado").innerHTML = resultado;
}
