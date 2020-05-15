let palavra = "arara";
let palavraInvertida = "";

function inverterPalavra (possivelPalindromo){
  for (let i = (possivelPalindromo.length -1); i >= 0 ; i -= 1){
    palavraInvertida += possivelPalindromo[i];

  }
  return palavraInvertida;
}

function verificaPalindromo (palavraNormal, palavraInvert){
  if (palavraInvert === palavraNormal){
    console.log(palavraNormal + " é um palíndromo!!!");
  } else {
    console.log(palavraNormal + " não é um palíndromo!!!");
  }
}

inverterPalavra(palavra);

verificaPalindromo(palavra, palavraInvertida);