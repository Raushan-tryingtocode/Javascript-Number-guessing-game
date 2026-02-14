let min=1;
let max=100;
let answer = Math.floor(Math.random()*(max-min + 1)) + min;

let guess;
let attempts = 0;

let running = true;

while(running){
    guess = window.prompt(`Enter your guess between ${min} and ${max}`);
    guess=Number(guess);

    if(isNaN=guesss){
        window.prompt(`Invalid! Please Try again.`);
    }
    else if(guess < min || guess > max){
        window.prompt(`Enter a valid number from the given range`)
    }
    else{
        attempt++;
        if(guess < answer){
            window.prompt(`Too Low ! Choose a higher Number.`);
        }
        else if(guess>answer){
            window.prompt(`Too High! Choose a lower Number.`)
        }
        else{
            window.prompt(`That's right! The answer is ${answer}`)
        }
    }
}