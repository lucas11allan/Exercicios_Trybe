let n = 4;
let asterisco = "";
let espaco = "";
let impressao = "";
let i = 0;
let j = 0;
let k = 0;
let l = 0;
let x = 0;

for (i = 1; i <= n; i += 2){
  asterisco = "";
  espaco = "";
  l += 1;

  for (k = (n - 2); k >= i; k -= 2){
      espaco += " ";
      x += 1;
  }

  for (j = ((n % 2) + n); j <= (n + i); j += 1){
    asterisco += "*"; 
  }

  impressao = espaco + asterisco + espaco;
  console.log(impressao);
}