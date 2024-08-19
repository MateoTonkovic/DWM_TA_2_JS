function getSum() {
  const nums = document.getElementById("nums").value.split(",").map(Number);
  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  document.getElementById(
    "resultado4"
  ).innerText = `La suma de los elementos es: ${sum}`;
}
