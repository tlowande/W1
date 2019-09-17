const args = process.argv;
const newArgs = args.slice(2);

let obfuscate = function(array) {
  let password = '';
  for (let i = 0; i < array[0].length; i++) {
    if (array[0][i] === 'a') {
      password += '4';
    } else if (array[0][i] === 'e'){
      password += '3';
    } else if (array[0][i] === 'o'){
      password += '0';
    } else if (array[0][i] === 'l'){
      password += '1';
    } else {
    password += array[0][i]
    }
  }
    return password;
}

console.log(obfuscate(newArgs));