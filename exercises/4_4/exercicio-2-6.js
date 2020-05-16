let num = 5;
let somaDosNumeros = 0;

function somaFatorial(n){
  
  for(let indice = 1; indice<= n; indice += 1){
    somaDosNumeros += indice;
  }

  return(somaDosNumeros);
}

somaFatorial(num);

console.log(somaDosNumeros);