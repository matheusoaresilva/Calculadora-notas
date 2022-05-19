let tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function() {
  let alvoEvento = event.target;
  let eventoPai = alvoEvento.parentNode;
  eventoPai.remove();
  
});

