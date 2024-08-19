function getOdds(nums) {
  return nums.filter((numero) => numero % 2 !== 0);
}

function duplicates(nums) {
  const diccionario = {};
  let cantidadDeDuplicados = 0;

  nums.forEach((numero) => {
    if (diccionario[numero]) {
      diccionario[numero]++;
    } else {
      diccionario[numero] = 1;
    }
  });

  for (let numero in diccionario) {
    if (diccionario[numero] > 1) {
      cantidadDeDuplicados++;
    }
  }

  return cantidadDeDuplicados;
}

function showOdds() {
  const numsInput = document.getElementById("numsInputOdds").value;
  const nums = numsInput.split(",").map(Number);
  const odds = getOdds(nums);
  document.getElementById("oddsResult").innerText =
    "Números Impares: " + odds.join(", ");
}

function countDuplicates() {
  const numsInput = document.getElementById("numsInputDuplicates").value;
  const nums = numsInput.split(",").map(Number);
  const duplicatesCount = duplicates(nums);
  document.getElementById("duplicatesResult").innerText =
    "Cantidad de números duplicados: " + duplicatesCount;
}
