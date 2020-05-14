let n = 9;
let asterisco = "";
let espaco = "";
let i = 0;
let j = 0;
let k = 0;

for (i = 1; i <= n; i += 2){
  asterisco = "";
  espaco = "";

  for (j = n; j >= 1; j -= 1){
    if(j<=i){
      asterisco += "*";
    }
  }

  for (k = n; k >= 1; k -= 2){
    if(k>i){
      espaco += " ";
    }
  }
  
  asterisco = espaco + asterisco + espaco;
  console.log(asterisco);
}