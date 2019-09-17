const args = process.argv;
const newArgs = args.slice(2);
let pigLatin = [];

newArgs.forEach(function (element, i, array) {
  let newString = ''
  for (let x = 1; x < element.length; x++) {
    newString += element[x];
  }
  newString += `${element[0]}ay`
  pigLatin.push(newString);
})

pigLatin = pigLatin.join(' ');

console.log(pigLatin);