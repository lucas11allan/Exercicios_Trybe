let n = 15;
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
let x = 0;

espacoTotal = n - 2;

for (i = 1; i <= n; i += 2){
  asterisco = "";
  espacoExterno = "";
  x += 1;

  if(i === 1 || i === n){
    for (j = n; j >= 1; j -= 1){
      if(j<=i){
        asterisco += "*";
      }
    }

    for (k = n; k >= 1; k -= 2){
      if(k>i){
        espacoExterno += " ";
      }
    }
    impressao = espacoExterno + asterisco + espacoExterno;
    console.log(impressao);
  } else {

    for(l = espacoTotal; l >= 1; l -= 2){
      if(l>=i){
        espacoExterno += " ";
      }
    }

    for(m = 1; m < i; m += x){
      if(m < i){
        espacoInterno += " ";
      }  
    }

    impressao = espacoExterno + "*" + espacoInterno + "*" + espacoExterno;
    console.log(impressao);
  }
}