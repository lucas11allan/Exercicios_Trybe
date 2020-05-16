let palavra = "trybe";
let finalPalavra = "be";
let resultado = false;


function verificaStrings(word, ending){

  for(indice = 0; indice <= ending.length; indice += 1){
    let a = ending.length - indice;
    let b = word.length - indice;
    if(ending[a] === word [b]){
      resultado = true;
    } else {
      resultado = false;
      break;
    }
  }

  return(resultado);
}

verificaStrings(palavra, finalPalavra);

console.log(resultado);