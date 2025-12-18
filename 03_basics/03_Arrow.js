const user ={
    username : "Sudhanshu",
    price :999,


     welcomeMessage : function(){
        console.log(`${this.username} welocme to website`, );
     }
    }


    // user.welcomeMessage()
    // user.username = "sam"
    // user.welcomeMessage()

    // console.log(this);

    function one(){
        let username = "Sudhanhsu Kunwar"
        console.log(this.username);
    }


    one()


    const one = function (){
         let username = "Sudhanhsu Kunwar"
        console.log(this.username);
    }

    one ()

    const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()