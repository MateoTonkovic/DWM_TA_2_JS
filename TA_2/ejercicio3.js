function leapYears() {
  const year = parseInt(document.getElementById("year").value);
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  document.getElementById("resultado3").innerText = `El año ${year} ${
    isLeap ? "es" : "no es"
  } bisiesto.`;
}
