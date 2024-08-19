function sumAll() {
  const a = parseInt(document.getElementById("a").value);
  const b = parseInt(document.getElementById("b").value);
  let sum = 0;

  for (let i = a; i <= b; i++) {
    sum += i;
  }

  document.getElementById(
    "resultado"
  ).innerText = `La suma de todos los números entre ${a} y ${b} es: ${sum}`;
}
