let arr = [1,2,3,4,6,7,8];
let num = 0;

function firstNonConsecutive (arr) {
  for(let i = 0; i < arr.length; i += 1){
    if(i === (arr.length - 1)){
      return null;
      break;
    }else if((arr[i] + 1) != (arr[(i + 1)])){
      num = arr[i];
      return arr[i];
    }
  }
}

console.log (num);