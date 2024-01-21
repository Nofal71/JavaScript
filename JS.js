// //String Methods

// /*
// lastIndexOf
// String length
// String slice(x, y)
// String substring()
// String substr()
// String concat() 
// */

// let userName = "haider.ali"
let email = "haider.ali@alliedc.com"

console.log("lastINdexof", email.lastIndexOf("@"));
let userName = email.slice(0,email.lastIndexOf('@'))
console.log('userName', userName)
console.log("length",userName.length);

// // console.log("slice",email.slice(0,10));
// // //let domainName = email.slice(email.lastIndexOf("@")+1, email.length);
// // console.log("domainName", domainName)  
// // // let domain = "@alliedc.com"
// // console.log("substring", email.substring(email.lastIndexOf("@"), 4))
// // // console.log(email.lastIndexOf('@'))



// // console.log(email.length)
// // const slicedEmail = email.slice(2,5)
// // console.log(slicedEmail)

// //  const subEmail = email.substring(email.lastIndexOf("@"), 4)
// // console.log("sub", subEmail)

// //userName domainName

// // let userName = "haider.ali"
// // let domainName = "@alliedC.com"

// // let email = userName.concat(domainName);
// // console.log(email);

// const person = {
//     firstName: "Haider",
//     class: "React",
//      printName() {
//         console.log('Hello from ')
//     }
// }
// console.log(person)

// console.log(person.printName())

const random = ['Haider', 'Nofal', 'Soban'];
console.log(random)
console.log("lengthofArray", random.length);


random.push("Soban")
console.log(random)
console.log("lengthofArray", random.length);

random.pop();
console.log(random)
console.log("lengthofArray", random.length);

// // random.pop();
// // console.log(random)
// // console.log("lengthofArray", random.length);

// // random.push("Subtain");
// // console.log("lengthofArray", random.length);

// // delete random[1]
// // console.log("random",random)
// // console.log("lengthofArray", random.length);

// // random.pop();//destructive method



// // console.log("random array", random);
// let newRandom = random.join(" Usman ");

// console.log("newRandom",newRandom);

// // let indexLocation = random.indexOf("hiba");
// // console.log("indexLocation",indexLocation)

// // function hello () {
// //     return "hello World";
// // }

// // const returnValueFromFunction = hello();
// // // console.log('returnValueFromFunction',returnValueFromFunction)
// // console.log(hello());
// // let random = ["haider", "ali", "hiba", "tayyaba"];
// // let random2 = ["random","random2"]
// // let random3 = ["Hello"]

// // let concatArray = random.concat(random2,random3);//not a destructive method
// //  console.log("random", concatArray);



// //Array Methods
// /*
// Array length
// Array toString()
// Array pop()
// Array push()
// Array join()
// Array splice()
// Array slice()
//  */


// // let randomString = "hello";
// // let radnomStringTwo = "Hello2";
// // let radnomStringThree = "Hello3";

// // let combinedString = randomString+radnomStringTwo+radnomStringThree
// // console.log(combinedString)

// //Type Conversion

// //convert score to number
// let score = "100";
// console.log(score)
// score = Number(score);
// console.log(score)

// // console.log("Score", score+1);

// let scoreNumber = 100;
// console.log(scoreNumber);
// scoreNumber = String(scoreNumber);
// console.log("scoreNumber",scoreNumber)

// //Boolean Check

// let booleanCheck = Boolean("someValue");


// let myVariable = 0;

// if(myVariable.length){
//     console.log("truthy")
// }
// else{
//     console.log("falsy")
// }

// myVariable ? console.log("truthy") : console.log("falsy");















//truthy and falsy values are like inherent boolean statuses
//Truthy values: "0", "false", positive and negative values, numbers
//Falsy values: false, 0, empty string, null, undefined



//Truthy Falsy Values 
//!myVariable ? console.log("Printing this because value exists") : console.log("Printing this because value does not exists");
// console.log(Boolean(-3))


// console.log("booleanCheck",booleanCheck)


const scores = [50,25,0,30,20,100,10,40, 60];


for(let i=0; i<scores.length; i++){
   

    // if(scores[i] === 0) {
    //     continue;
    // }
    // if(scores[i] === 100){
    //     console.log(i);
    //     console.log("Top Scorer")
    //     break;
    // }
    //console.log("I was rendered but not after the break statement")
}


//Control Flow
//loops
//Conditionals

//Logical Operators
//OR ||
//AND &&

//Break and Continue

// {
//     let message = "I'm inside a block!";
//     console.log(message); 
//     // Output: I'm inside a block!
// }
// console.log(message); 
// Output: 
//ReferenceError: message is not defined