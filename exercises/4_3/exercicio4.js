let n = 7;
let asterisco = "";
let espaco = "";
let impressao = "";
let i = 0;
let j = 0;
let k = 0;

//esse primeiro 'for' imprimi uma linha do triângulo a cada loop
for (i = 1; i <= n; i += 2){

  //as variaveis são 'resetadas' para poderem ser utilizadas novamente
  asterisco = "";
  espaco = "";

  //esse segundo 'for' preenche a variável 'espaco' de acordo com a quantidade de espaços que devem ter a cada linha.
  for (k = (n - 2); k >= i; k -= 2){
      espaco += " ";
  }

  //neste último 'for' a variável 'asterisco' recebe a quantidade de asteriscos de cada linha. Uma peculariedade desta parte do código é que, no primeiro loop, quando i = 1, o 'for' roda duas vezes caso o número seja par e apenas uma vez caso o número seja ímpar.
  for (j = ((n % 2) + n); j <= (n + i); j += 1){
    asterisco += "*"; 
  }

  //a impressao de cada linha ocorre aqui, onde a pirâmide e composta por espaços e asteriscos
  impressao = espaco + asterisco + espaco;
  console.log(impressao);
}