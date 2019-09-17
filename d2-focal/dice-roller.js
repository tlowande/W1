const args = process.argv;
const newArgs = args.slice(2);
const parameter = newArgs.map(Number);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max) +  1);
}

let diceRoller = function(array) {
  let diceNum = '';
  for (let i = 0; i < array[0]; i++){
    diceNum += getRandomInt(6)
    if (i < array[0] - 1){
      diceNum += ', ';
    }
  }
  return `Rolled ${array[0]} dice: ${diceNum}`;
}

console.log(diceRoller(parameter));