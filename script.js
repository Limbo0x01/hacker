let secretCode = Math.floor(1000 + Math.random() * 9000).toString(); // Generate a random four-digit number
let attempts = 10;

function submitGuess() {
    let guess = document.getElementById('guessInput').value;
    let feedback = document.getElementById('feedback');
    let attemptsDisplay = document.getElementById('attempts');
    if (guess.length != 4) {
        feedback.textContent = 'Please enter a 4-digit code.';
        return;
    }

    attempts--;
    attemptsDisplay.textContent = `Attempts left: ${attempts}`;

    if (guess === secretCode) {
        feedback.textContent = 'Access granted. System hacked!';
        attemptsDisplay.textContent = '';
    } else if (attempts <= 0) {
        feedback.textContent = 'System locked. Game over!';
        attemptsDisplay.textContent = '';
    } else {
        let correctPosition = 0;
        let correctDigits = 0;
        let seenDigits = new Set();
        for (let i = 0; i < 4; i++) {
            if (guess[i] === secretCode[i]) {
                correctPosition++;
            } else if (secretCode.includes(guess[i]) && !seenDigits.has(guess[i])) {
                correctDigits++;
                seenDigits.add(guess[i]);
            }
        }
        feedback.textContent = `${correctPosition} correct position, ${correctDigits} correct digits but wrong position.`;
    }
}

