function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()  

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumber(number1, number2){
//    let result = number1 + number2
//    return result
      return number1 + number2
    
}

const result = addTwoNumber(3, 5)

// console.log("Result: ",result);

function loginUserMessage(username = "sam"){
    if(!username){
      console.log("Please enter your username")
      return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("vikas"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2,...num1) {  //...rest
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "vikas",
    price: 299
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}` );
    
}
// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
//  })

const myNewArray = [200, 400, 100, 340]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
