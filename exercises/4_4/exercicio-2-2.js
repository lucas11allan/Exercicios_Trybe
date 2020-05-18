let numeros = [2,3,6,7,10,1];

function retornaIndiceMaiorNum(a){
  let maiorNumero = 0;
  let indiceMaiorNum = 0;

  for (let indice in a){
    if(a[indice] >  maiorNumero){
      maiorNumero = a[indice];
      indiceMaiorNum = indice;
    }
  }
  
  console.log(indiceMaiorNum);
  return indiceMaiorNum;  
}

retornaIndiceMaiorNum(numeros);
