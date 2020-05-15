let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let position2 = 0;
let numbers2 = [];

for (i = 0; i < numbers.length; i += 1){
  position2 += 1;
  if(numbers[position2] != null){
    numbers2.push(numbers[i] * numbers[position2]);
  } else{
    numbers2.push(numbers[i] * 2);
  }
}

for(let x = 0; x < numbers2.length; x += 1){
  console.log(numbers2[x]);
}