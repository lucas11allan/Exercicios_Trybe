const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const merge = (array1, array2) => {
  const arrayMerged = array1.map((product, index) => ({[product]: array2[index]}));
  return arrayMerged;
}

console.log(merge(products, prices));