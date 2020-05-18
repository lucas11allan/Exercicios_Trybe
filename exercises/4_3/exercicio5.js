let n = 5;
let asterisco = "";
let espacoTotal = 0;
let espacoInterno = "";
let espacoExterno = "";
let impressao = "";
let i = 0;
let j = 0;
let k = 0;
let l = 0;
let m = 0;

//Para resolver esse problema eu separei o desenho em duas condições. Uma condição para a primeira e útima linha e outra condição para as linhas do meio

//Aqui eu criei uma variável com o espaço total, somando o espaço externo e interno. Independente da linha analisada (na parte do meio da piramide, desconsiderando a primeira e a última), a soma dos espaços internos e externos vai ser sempre 'n - 2'
espacoTotal = n - 2;

//esse 'for' tem um incremento de 2 (i += 2) para que ele imprima apenas as linhas com número ímpar
for (i = 1; i <= n; i += 2){
  //Nessa parte as variáveis são resetadas para serem usadas de novo
  asterisco = "";
  espacoExterno = "";
  espacoInterno = "";
  
  //Nessa primeira é construída apenas a primeira linha
  if(i === 1){
    for(j = 1; j < (n / 2); j += 1){
      espacoExterno += " ";
    }
    console.log(espacoExterno + "*");
  //Nessa segunda condição é construída a última
  } else if (i === n){
    for (k = 1; k <= n; k += 1){
      asterisco += "*";
    }
    console.log(asterisco);

    //Nessa terceira condição são feitas as linhas internas da pirâmide
    } else {
    //Nessa parte eu precisava construir uma variável com a quantidade de espaço interno e outra com o espaço externo
      //Nesse primeiro 'for' eu construo uma variável com a quantidade de espaço externo da linha 'i'
      //Esse 'for' vai rodar enquanto o espaço total for maior que i, então quanto maior o i menos vezes esse 'for' vai 'rodar', e também aqui decresce -2 pois o espaço externo está dividido em duas posições
      for(l = espacoTotal; l >= i; l -= 2){
          espacoExterno += " ";
      }
      
      //Nesse segundo 'for' eu construo uma variável com a quantidade de espaço interno da linha 'i'
      //como é para começar com um espaço é necessário colocar o limite como '(i-1)', pois a primeira linha foi feita em outra parte do código
      for(m = 1; m < (i - 1); m += 1){
          espacoInterno += " "; 
      }

      //Aqui eu junto o espaço externo, com um asterísco, o espaço interno e depois outro asterísco
      impressao = espacoExterno + "*" + espacoInterno + "*";
      console.log(impressao);
    }
}