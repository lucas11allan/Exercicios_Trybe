let n = 7;
let asteriscos = "";
let espacos = "";
let i = 0;
let j = 0;
let k = 0;

for (i = 1; i <= n; i += 1){
  asteriscos = "";
  espacos = "";
  
  for(j = 1; j <= i; j += 1){
    asteriscos += "*";
  }

  for(k = n; k >= j; k -= 1){
    espacos += " ";
  }

  console.log(espacos + asteriscos);
}

