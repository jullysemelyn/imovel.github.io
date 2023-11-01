var calculate    = document.getElementById("calculate");
var result       = document.querySelector("output");
var inputs       = document.querySelectorAll("input");

function calculatePercentage() {
  var fullValue    = parseFloat(document.getElementById("first").value);
  var partialValue = parseFloat(document.getElementById("second").value);
  var totalPercentage = 100;  
  var partialPercentage =  (totalPercentage * partialValue) / fullValue;
  result.classList.remove("hide");
  result.style.display = "block";
  setTimeout(function(){
    result.classList.add("show")
  }, 100);  
  result.innerHTML = "O segundo valor corresponde à <strong>" + partialPercentage.toFixed(2) + "%</strong> do primeiro valor.";
}

calculate.addEventListener('click', calculatePercentage);

inputs.forEach(element => {
  element.addEventListener("focus", function(){
    result.classList.remove("show");
    result.classList.add("hide");
    setTimeout(function(){
    result.style.display = "none";
  }, 400);
  });
});

function formatar(mascara, documento) {
    let i = documento.value.length;
    let saida = '#';
    let texto = mascara.substring(i);
    while (texto.substring(0, 1) != saida && texto.length ) {
      documento.value += texto.substring(0, 1);
      i++;
      texto = mascara.substring(i);
    }
  }