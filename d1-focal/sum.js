const args = process.argv;
const newArgs = args.slice(2);
const result = newArgs.map(Number);

function sum(array) {
  return array[0] + array[1];
}

console.log(sum(result));

/* or without the function we can have:

const args = process.argv;
const newArgs = args.slice(2);
const result= newArgs.map(Number);
console.log(result[0]+result[1]);
*/
