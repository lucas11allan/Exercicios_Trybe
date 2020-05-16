let arrayNumRomanos = ['XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI','XXII','XXIII','XXIV','XXV','XXVI','XXVII','XXVIII','XXIX','XXX','XXXI','XXXII','XXXIII','XXXIV','XXXV','XXXVI','XXXVII','XXXVIII','XXXIX','XL','XLI','XLII','XLIII','XLIV','XLV','XLVI','XLVII','XLVIII','XLIX','L','LI','LII','LIII','LIV','LV','LVI','LVII','LVIII','LIX','LX','LXI','LXII','LXIII','LXIV','LXV','LXVI','LXVII','LXVIII','LXIX','LXX','LXXI','LXXII','LXXIII','LXXIV','LXXV','LXXVI','LXXVII','LXXVIII','LXXIX','LXXX','LXXXI','LXXXII','LXXXIII','LXXXIV','LXXXV','LXXXVI','LXXXVII','LXXXVIII','LXXXIX','XC','XCI','XCII','XCIII','XCIV','XCV','XCVI','XCVII','XCVIII','XCIX','C', 'MCMXCIX', 'MMCMXCIX'];
let numConvertido = 0;
let arrayArabico = [];
let arrayNumerosConvertidos = [];

//Essa função converte uma string de números Romanos em um número Arábico
function converteRomanoArabico(numRomano){
  //Limpa as variáveis numConvertido e arrayArabico caso a função seja usada mais de uma vez
  numConvertido = 0;
  arrayArabico = [];
  
  //Cria uma variável para cada valor puro dos números romanos correspondentes
  let I = 1;
  let V = 5;
  let X = 10;
  let L = 50;
  let C = 100;
  let D = 500;
  let M = 1000;

  //Cria um array com os números romanos convertidos em arabicos (FUNCIONANDO CORRETAMENTE)
  for(let indice in numRomano){
    if(numRomano[indice] === "I"){
      arrayArabico.push(I);
    }else if(numRomano[indice] === "V"){
      arrayArabico.push(V);
    }else if(numRomano[indice] === "X"){
      arrayArabico.push(X);
    }else if(numRomano[indice] === "L"){
      arrayArabico.push(L);
    }else if(numRomano[indice] === "C"){
      arrayArabico.push(C);
    }else if(numRomano[indice] === "D"){
      arrayArabico.push(D);
    }else if(numRomano[indice] === "M"){
      arrayArabico.push(M);
    }
  }

  //Faz as comparações dos números do Array e converte propriamente no número arábico
  for(let posicao = 0; posicao <= arrayArabico.length; posicao += 1){

    //Faz as comparações do número atual com o anterior
    if(posicao === 0){
      numConvertido += arrayArabico[posicao];

    }else if(arrayArabico[posicao] === arrayArabico[(posicao - 1)]){
      numConvertido += arrayArabico[posicao];

    }else if(arrayArabico[posicao] > arrayArabico[(posicao - 1)]){
      numConvertido = arrayArabico[posicao] - numConvertido;

    }else if(arrayArabico[posicao] < arrayArabico[(posicao - 1)]){
      numConvertido += arrayArabico[posicao];
    }

    //Faz as comparações do número atual com o próximo, sendo necessário quando o número romano está precedido e sucedido por números maiores que o atual
    if(arrayArabico[(posicao + 1)] === ""){
      break;
    }else if(arrayArabico[posicao] < arrayArabico[(posicao + 1)] && arrayArabico[posicao] < arrayArabico[(posicao-1)]){
      numConvertido += (arrayArabico[(posicao +1)] - arrayArabico[posicao]) - arrayArabico[posicao];

      //Nesse caso especial o próximo número já foi computado, então posicao recebe um incremento para 'pulá-lo'
      posicao += 1;

    }

  }

  return(numConvertido);

}


//usa a função de conversão para converter todos os números de um array
function converteArrayRomanoArabico(arrayRomanos){
  for(let i = 0; i < arrayRomanos.length; i += 1){
    converteRomanoArabico(arrayRomanos[i]);
    arrayNumerosConvertidos.push(numConvertido);
  }
  
  return(arrayNumerosConvertidos);
}


converteArrayRomanoArabico(arrayNumRomanos);

console.log(arrayNumerosConvertidos);