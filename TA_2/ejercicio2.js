function convertToCelsius() {
  const temp = parseFloat(document.getElementById("temp").value);
  const celsius = (((temp - 32) * 5) / 9).toFixed(1);
  document.getElementById(
    "resultado2"
  ).innerText = `${temp}°F es igual a ${celsius}°C`;
}

function convertToFahrenheit() {
  const temp = parseFloat(document.getElementById("temp").value);
  const fahrenheit = ((temp * 9) / 5 + 32).toFixed(1);
  document.getElementById(
    "resultado2"
  ).innerText = `${temp}°C es igual a ${fahrenheit}°F`;
}
