const args = process.argv;
const newArgs = args.slice(2);

newArgs.forEach(function(element, i){
  let reverse = '';
  for(x = element.length - 1; x >= 0; x--) {
    reverse += element[x]
  }
  console.log(reverse);
})
