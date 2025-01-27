const name ="vikas"
const repoCount = 20

//console.log(name + repoCount + " value");

//"using backticks(``) for the concatention of string"  morden way

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('viksa gupta jsdh hdsj')
  
  console.log(gameName[0]);
 
  console.log(gameName.__proto__);
  
  console.log(gameName.length);
  console.log(gameName.toUpperCase());
  console.log(gameName.charAt(6));

  const newString = gameName.substring(0,4)
  console.log(newString);
  
  const anotherString = gameName.slice(-8,4)
  console.log(anotherString);
  
  const newStringOne = "  vikas  "
  console.log(newStringOne);
  console.log(newStringOne.trim());
  
  const url = "https://vikasgup.com/vikas%29gupta"
  console.log(url.replace('%29' , '-'));
  
  console.log(url.includes('Bikas'));
  
  console.log(gameName.split(" "));
  