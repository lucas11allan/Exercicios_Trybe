let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let recipiente = 0;

for(let i = 0; i < numbers.length; i += 1){
  for(let j = i; j < numbers.length; j += 1){
    if (numbers[i] > numbers[j]){
      recipiente = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = recipiente;
    }
  }
}

for(let x = 0; x < numbers.length; x += 1){
  console.log(numbers[x]);
}