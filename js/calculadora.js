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
    tdMF.textContent = MF;
  }
}


function calcula(nota1, nota2) {
  let MF = 0;

  MF = (parseFloat(nota1) + parseFloat(nota2)) / 2;

  return MF;

}


