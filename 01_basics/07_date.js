// dates


let myDate = new Date()
//console.log(myDate)
//console.log(myDate.toString());

let myCreatedDate = new Date("01-04-2023")
//console.log(myCreatedDate.toDateString());


let myTimestamp = Date.now()

//console.log(myTimestamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
//console.log(newDate.getDay())


let mydfd = newDate.toLocaleString('default',{
  weekday :  "long"
})
 
 console.log(mydfd);
 