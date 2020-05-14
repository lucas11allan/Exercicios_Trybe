let n = 5;
let asteriscos = "";
let i = 0;
let j = 0;

for(i = 1; i <= n; i += 1){
  asteriscos = "";
  for(j = n; j >= 1; j -= 1){
    if(i<j){
      asteriscos += " ";
    }else{
      asteriscos += "*";
    }
  }
  console.log(asteriscos);
}

