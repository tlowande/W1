var input = process.argv[2];

/*function reverse(original) {
  let firstStep = original.split('');
  let secondStep = firstStep.reverse().join('');
  return secondStep;
}

if(input) {
  console.log(reverse(input));
}*/

if (input) {
  console.log(reverse(input));
}

function reverse(original) {
  return original.split('').reverse().join('');
}