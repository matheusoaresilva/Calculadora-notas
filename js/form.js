let buttonAdicionar = document.querySelector("#adicionar-aluno");

buttonAdicionar.addEventListener("click", function(event) {
  event.preventDefault();

  let form = document.querySelector("#form-adiciona");

  let nome = form.nome.value;
  let nota1 = form.notaPrimeira.value;
  let nota2 = form.notaSegunda.value;


  let alunoTr = document.createElement("tr");

  
  let nomeTd = document.createElement("td");
  let nota1Td = document.createElement("td");
  let nota2Td = document.createElement("td");
  let mfTd = document.createElement("td");

  nomeTd.textContent = nome;
  nota1Td.textContent = nota1;
  nota2Td.textContent = nota2;
  mfTd.textContent = calcula(nota1, nota2);

  alunoTr.appendChild(nomeTd);
  alunoTr.appendChild(nota1Td);
  alunoTr.appendChild(nota2Td);
  alunoTr.appendChild(mfTd);

  let tabela = document.querySelector("#tabela-alunos");
  tabela.appendChild(alunoTr);
});


