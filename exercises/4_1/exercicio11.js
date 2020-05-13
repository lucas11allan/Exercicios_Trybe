let notaPorcentagem = 85;

if(notaPorcentagem>100 && notaPorcentagem<0){
  console.log("Insira uma nota válida entre 0 e 100!!!");
} else if(notaPorcentagem >= 90){
  console.log("Conceito: A")
} else if(notaPorcentagem >= 80){
  console.log("Conceito: B")
} else if(notaPorcentagem >= 70){
  console.log("Conceito: C")
} else if(notaPorcentagem >= 60){
  console.log("Conceito: D")
} else if(notaPorcentagem >= 50){
  console.log("Conceito: E")
} else if(notaPorcentagem < 50){
  console.log("Conceito: F")
}