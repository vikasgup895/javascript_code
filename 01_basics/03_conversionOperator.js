// let score = "33cvb"
// let score = undefined
// let score = true
let score = "viksd"
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33cvb" => NaN
// true => 1  false => 0
// "vikas" => NaN


let isLoggedIn = "bnm"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
//"" => false
//"vikas" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ********************* Operations ***********************

let value = 3
let negValue  = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2**3);

let str1 = "hello"
let str2 = " vikas"

 let str3 = str1+str2;
//  console.log(str3);
 
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true)
// console.log(+"");


let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++
++gameCounter
// console.log(gameCounter);


// avoid these type of conversion  
// console.log(null > 0);     // the reason is that an equality check == and comparison
// console.log(null == 0);    // > < >= <= work differently
// console.log(null >= 0);    // Comaprison convert null to a number, treating it as 0.
//                              // that's why (3) null >= 0 is true and (1) null > 0 is false 



// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined < 0);


//  === strict check 
// console.log("2" === 2);


// ********************************************

//stack (Primitive), heap (Non-Primitive)
 
 let myYoutubename = "vikasguptadotcom"

 let anotherName = myYoutubename
 anotherName = "chaiorcode"

 console.log(myYoutubename);
 console.log(anotherName);
 

 let user1 = {
    email: "vikas@goolr.com",
    upi: "user@ybl"
 }

 let user2 = user1

 user2.email = "abc@google.com"

 console.log(user1.email);
 console.log(user2.email);
 
 