let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', (e) => {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
});

guessBtn.addEventListener('click', (e) => {
    let guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    } else {

        if(guess === winningNum) {
            gameOver(true, `${winningNum} is correct, YOU WIN!`);    
        } else {
            guessesLeft -= 1;
            
            if(guessesLeft === 0) {
                gameOver(true, `Game Over, you lost! The correct number was ${winningNum}.`);
            } else {
                gameOver(false, `${guess} is not correct, ${guessesLeft} guesses left.`);
            }
        }
    }
});

function gameOver(won, msg) {
    let color;

    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = won;
    guessInput.style.borderColor = color;
    setMessage(msg, color);

    //guessBtn.value = 'Play Again';
    //guessBtn.className += 'play-again';
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}