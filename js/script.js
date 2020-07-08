'use strict';
var userName1 = prompt("what is your name?");
// 1 to 4 too low and   5 to 7 too high and 8 in middle  10 and 9 correct
var ansRight = -1
for (var i = 1; i <= 4; i++) {

    var Ques6 = prompt("How much Hamza can sit for 22-hour to code for fun? Choose from 1 to , Where 1 :- hamza set even a second and 10 :- Have have been sit for 22-hour.");


    if ((Ques6 === '10') || (Ques6 === '9')) {

        alert("correct");
        alert('You have only 4 attempts, you are in  '+i+'  attempt.');

        console.log("The user choose correct answer which is " + Ques6);
        ansRight++;

        break;

    }

    else if (Ques6 >= 1 && Ques6 <= 4) {

        alert("TooLow, try again");
        console.log("TooLow answer is " + Ques6);

        alert('You have only 4 attempts, you are in  '+i+'  attempt.');

    }

    else if (Ques6 >= 5 && Ques6 <= 7) {

        alert("TooHigh, try again");
        console.log("TooHigh Answer is" + Ques6);
        alert('You have only 4 attempts, you are in  '+i+'  attempt.');


    }

    else if (Ques6 == "8") {

        alert("not correct, try again");
        console.log("8 is incorrect answer" + Ques6);
        alert('You have only 4 attempts, you are in  '+i+'  attempt.');


    }

    else {

        alert("Nice try but you fail in this guess and you didnt have attempt to try more " + userName1);
        console.log("The user fail");

    }


        if(i == "4") {
        alert("You fail, try again, the correct answers is 10 and 9")

        }


}
    // else {

    //     alert("wrong");
    //     console.log("wrong answer is " + Ques6);

    // }
// }



//     if (Ques6 <= 4 ) {

//     alert("Its too low user")
//     }

//     else {

//         Ques6 = (Ques6 <= 8 &&  Ques6 >= 5 ); 

//         alert("too high");

//     }

//     else  {

//        Ques6 = (Ques6 === 10 || 9); 

//         alert("correct answer");

//     }

// }




var myStringArray = ['lotus latte', 'coffee', 'latte'];

alert("Hello we're in 7th question, we've 3 possible ansers")
for (var z = 0; z <= 6; z++) {

    var userOrder = prompt("What drinks hamza like?, hint:- guses from coffee menu");

    if (userOrder === myStringArray[0] || userOrder === myStringArray[1] ||
        userOrder === myStringArray[2]) {
        alert("WOW you know me will, lets get coffee with each other");
        ansRight++;
        alert("the correct answer is " + myStringArray)
        //we can use counter instead of myStringArray in line 36

        break;
     } else {
        alert("Nah, guess again please");


    }

}


///////////////////////////////////////////////////////////////////////////////////////////////////
// Marah question7 lab03
// var trueAnswer = ["black", "pink"]; 

// var userAnswer = prompt('What colors Marah likes the most ?')
//     console.log('What colors Marah likes the most ?');

// for (var counter = 0; counter < 5; counter++) {
//     if (userAnswer === trueAnswer[0] || userAnswer === trueAnswer[1]) {
//         alert('correct');
//          console.log("correct");
//           correctAns = correctAns + 1; 
//           break;
//     } else if (userAnswer !== trueAnswer[0] || userAnswer !== trueAnswer[1]) { 
//         alert('wrong!') 
//         console.log("wrong answer!")   
//         userAnswer = prompt('What colors Marah likes the most ?') }
// }













//7/7/2020 - Lab01b 
// var userName = prompt("What is your name"); 
// console.log("The user's name is "+userName);

// alert("your name is " + userName)

// var openquestion = alert("Welcome " + userName + " press ok to continue to the Prompts")

// var question = prompt("Do Hamza like coding?, type yes or no");
//     console.log("this is a user answer " + question);

// if ( question == 'yes' ){

//     alert("I dont know if YES but, we will figure it out in future 😁");

// } else {

    // alert("Who know's what the future holds 🤓");

// }


// var question2 = prompt("Is he working harder?, type yes or no");
//     console.log("The user's answer in que2 is " + question2);

// if (question2 == "yes") {

//     alert("That's obvious 😜");

// } else {

//     alert("Do i need to show you?🤔");

// }            


// var question3 = prompt("Is he wearing glasses?, type yes or no")
//     console.log(" The user's answerin in que3 is " + question3);

// if (question3 == "yes") {

//     alert("You know me will, thank you");

// } else {

//     alert("You will see me in the capmus 🤓");

// }


// var question4 = prompt("Does hamza love coffee or tea?, type yes or no  ");
//     console.log("The user's answer in que4 is " + question4);

// if (question4 == "yes") {

//     alert("The coffee is the black diamond");

// } else {

//     alert("Ahh!! gotch, nice try.");

// }            


// var question5 = prompt("Do You read my goals? 😀, type yes or no ");
//     console.log("The user's answer in que2 is " + question5);

// if (question5 == "yes") {

//     alert("Great your return to tell me your goals in Slack to know you better😀");

// } else {

//   alert("Perhaps consider to read it please, if you want an inspire journey 🦸‍♂️");

//  }            

// alert("Thank you "+ userName +" Hope you enjoy these prompts. BYE!!" )









// 'use strict';
// // var howMuchLove = prompt('from scale 10 to 1 how much you love kids ');
// // var kids1 = prompt('kids are creative.');

// // function ourkids(){

// // var message;//undefined
// // console.log('message is ',message);

// // if ( howMuchLove >= 10 && howMuchLove <= 9) {
// //   message = 'wow';
// // } else if (howMuchLove > 8 && howMuchLove < 6) {
// //   message = 'we love kids';
// // }
// // console.log('new value message is ',message);
// // // true / false
// // // if(condition){
// // // }
// // document.write('<h3>' + message + '</h3>');
// // return message ;
// // }
// // greet();


// //7/5/2020 - Lab01b.
// //var userName = prompt("What is your name"); 
// //console.log("The user's name is "+userName);

// alert("your name is " + userName)

// var userAge = prompt("what is your age " +  userName);
// console.log("The user's age is "+userAge);

// alert("Your name is " + userName + " and you age is " + userAge );

// var userHoppy = prompt("GREAT what is you hoppy? " + userName);
// console.log("The user's hoppy is "+userHoppy);

// alert("your hoppy is " + userHoppy);

// alert("WOW it's amazing " + userName);

// var userDream = prompt("tell me what is your dreams life " + userName);
// console.log("The user's dream is "+userHoppy);

// alert("You can make it happen and make your " + userDream +  " a real thing. this final pop-up message good luck " + userName);









////////////////////////notes////////////////////////////
//7/5/2020
//var userName = prompt('What is your name');   
//alert('Your name is ' + userName);
//console.log("The user's name is "+userName);
//var userAge = prompt('What is your age');
//alert('Your age is ' + userAge);
//console.log("The user's age is "+userAge);

//notes
//prompt = you can input 
//alert = just shown a message
//--------------------------------------//
// //function doYouLoveKids(){
// //  var message 
// //  var howMuchLove = prompt("how much from 1 to 10 user love kids?")
// //  if (howMuchLove >=1 && howMuchLove <=4 )
// //  {message = "go to a doctor"
// //  }
// //  if (howMuchLove >=5 &&  9>=howMuchLove ) 
// //  {message = "you are good person"}
// //  if (howMuchLove == 10 ) 
// //  {message = "wooow you are lovely" }
// //  document.write( "<h1>" +message+"</h1>" )
// //  while (howMuchLove < 1 || howMuchLove > 16) {
// //    howMuchLove = prompt(
// //      "how much from 1 to 10 user love kids? ( type a number from 0 to 16)",
// //      0
// //    );
// //    howMuchLove = parseInt(howMuchLove);
