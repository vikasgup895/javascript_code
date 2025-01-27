//singleton

//object iterals

const mySym = Symbol('key1')


const JsUser = {
    name: "Vikas",
    "full name":"Vikas Gupta",
    [mySym]: "mykey2",
    age: 19,
    location: "Ghaziabad",
    email: 'vikas@google.com',
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "vikas@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "vikas@microsoft.com"
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());