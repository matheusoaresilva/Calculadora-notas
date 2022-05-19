let alunos = document.querySelectorAll(".aluno");


for(let i = 0; i < alunos.length; i++){

  let aluno = alunos[i];

  let tdNota1 = aluno.querySelector(".info-nota1");
  let nota1 = parseInt(tdNota1.textContent);
  
  let tdNota2 = aluno.querySelector(".info-nota2");
  let nota2 = parseInt(tdNota2.textContent);
  
  let tdMF = aluno.querySelector(".info-media-final");
  
  let notaValida = true;
  
  if (nota1 < 0 || nota1 > 10) {
    console.log("nota inválida!")
    notaValida = false;
    tdMF.textContent = "Nota inválida!"
    aluno.classList.add("aluno-invalido");
  }
  
  if (nota2 < 0 || nota2 > 10) {
    console.log("nota inválida!")
    notaValida = false;
    tdMF.textContent = "Nota inválida!"
    aluno.classList.add("aluno-invalido");
  }
  
  if (notaValida) {
    let MF = (nota1 + nota2) / 2;
    
    tdMF.textContent = MF.toFixed(1);
  }
}

let buttonAdicionar = document.querySelector("#adicionar-aluno");

buttonAdicionar.addEventListener("click", function(event) {
  event.preventDefault();

  let form = document.querySelector("#form-adiciona");

  let nome = form.nome.value;
  let primeiraNota = form.nota1.value;
  let segundaNota = form.nota2.value;


  let alunoTr = document.createElement("tr");

  
  let nomeTd = document.createElement("td");
  let nota1Td = document.createElement("td");
  let nota2Td = document.createElement("td");
  let mfTd = document.createElement("td");

  nomeTd.textContent = nome;
  nota1Td.textContent = primeiraNota;
  nota2Td.textContent = segundaNota;

  alunoTr.appendChild(nomeTd);
  alunoTr.appendChild(nota1Td);
  alunoTr.appendChild(nota2Td);

  let tabela = document.querySelector("#tabela-alunos");
  tabela.appendChild(alunoTr);
});


