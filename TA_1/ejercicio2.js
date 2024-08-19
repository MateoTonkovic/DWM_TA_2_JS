function removeFromArray(arreglo, item) {
  const items = arreglo.filter((itemArreglo) => itemArreglo !== item);
  return items;
}

function getTheTitles(books) {
  const booksNames = books.map((book) => book.name);
  return booksNames;
}

function mostrarItems() {
  const arreglo = document.getElementById("arrayInput").value.split(",");
  const item = document.getElementById("itemInput").value;
  const resultado = removeFromArray(arreglo, item);
  document.getElementById("resultado").innerHTML = resultado.join(", ");
}

function mostrarTitulos() {
  const books = JSON.parse(document.getElementById("booksInput").value);
  const titulos = getTheTitles(books);
  document.getElementById("titulos").innerHTML = titulos.join(", ");
}
