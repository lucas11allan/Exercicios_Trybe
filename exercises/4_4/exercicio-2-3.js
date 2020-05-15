let numeros = [2, 4, 6, 7, -10, 0, -3];
let indiceMenorNum = 0;

function retornaIndiceMenorNum(a){
  let menorNumero = 0;

  for (let indice in a){
    if(a[indice] <  menorNumero){
      menorNumero = a[indice];
      indiceMenorNum = indice;
    }
  }
  
  return indiceMenorNum;  
}

retornaIndiceMenorNum(numeros);
console.log(indiceMenorNum);