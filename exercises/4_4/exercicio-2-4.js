let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let maiorNome = "";

function retornaMaiorNome (arrayNomes){

  for(let indice in arrayNomes){
    if (arrayNomes[indice].length > maiorNome.length){
      maiorNome = arrayNomes[indice];
    }
  }

  return maiorNome;

}

retornaMaiorNome(nomes);

console.log(maiorNome);