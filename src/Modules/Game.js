export {submitGuess};

// global variables
let count = 0;
const randomNumber = Math.floor(Math.random()*101);


// eventHandler for button click events
function submitGuess() {

    // store user input value to reference
    let guess = Number.parseInt(document.querySelector('input').value);


    try {

        // if the users' guess is not a number, throw an Error
        if(isNaN(guess)) {
            
            throw new Error('User input is not a number. Please try again.');
        }
        // if it is a number, continue normal program execution
        else {

            // function call to compare user input to random number
            evaluateInput(guess);
        }
    }
    catch(e) {

        alert(e);
    }


}

// compare user input to random number
function evaluateInput(guess) {

    // was users' guess too low, too high, or correct?
    if(randomNumber > guess) {
        count++;
        alert('That number is too low! Try again.');
    }
    else if(randomNumber < guess) {
        count++;
        alert('That number is too high! Try again.');
    }
    else {

        count++;

        // user guessed correctly. Display win message
        displayWinMessage(guess)
    }
}

// display win message and results
function displayWinMessage(guess) {

    let winText = `
    The Random Number: ${randomNumber}
    Your Guess: ${guess}
    
    Congratulations! You won the game!

    Total attempts: ${count}`;

    // create an element node to append to the DOM tree
    let winNode = document.createElement('p');
    winNode.innerText = winText;

    // append winNode to the DOM
    document.getElementById('root').appendChild(winNode);
    document.querySelector('p').style.color = 'green';

    // game is over, prevent user from entering additional data until game is restarted
    disableGame();
}

// disable game until restarted
function disableGame() {

    // DOM elements
    let inputBox = document.querySelector('input');
    let submitButton = document.querySelector('button');

    inputBox.disabled = true;
    submitButton.disabled = true;

}