let numeros = [2, 3, 2, 5, 8, 2, 3];
let numeroMaisRepete = 0;

function retornaNumMaisRepete(arrayNumeros){
  let vezesRepete = 0;
  let vezesRepeteAnterior = 0;

  for(let indice in arrayNumeros){
    vezesRepeteAnterior = vezesRepete;
    vezesRepete = 0;

    for(let indice2 in arrayNumeros){

      if(arrayNumeros[indice] === arrayNumeros[indice2]){
        vezesRepete += 1; 
      }
    }

    if (vezesRepete > vezesRepeteAnterior){
      numeroMaisRepete = arrayNumeros[indice];
    }
  }


  return numeroMaisRepete;
}


retornaNumMaisRepete(numeros);

console.log(numeroMaisRepete);