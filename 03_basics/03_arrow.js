const user = {
    username: "vikas",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to webite`);
        console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chai() {
//     let username = "fffff"
//     console.log(this.username);
    
// }
// chai()


const chai = () =>{
    let username = "fffff"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username : "gdfgdf"})





console.log(addTwo(3,5))