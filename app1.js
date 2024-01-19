// guess the number

let max = prompt("Enter max number");

let random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number")

while(true){

    if (guess == "quit"){
        console.log("user quit");
        break;
    }
    if(random == guess){
        console.log("your guess is right, the number is ", random);
        break;
    }else if(guess < random){
       guess =  prompt("your number is too low, enter the larger number");
    }
    else{
       guess =  prompt("your number is too high, enter the Smaller number");
    }
}