let randomNumber = Math.floor(Math.random() *  100) + 1
console.log(randomNumber)

let attempts = 0

const guessInput = document.getElementById('guessInput')
const guessButton = document.getElementById('guessButton')
const message = document.getElementById('message')
const restartButton = document.getElementById('restartButton')

function checkGuess() {
    const userGuess = Number(guessInput.value)

    attempts++

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! you guessed the number ${randomNumber} correctly in ${attempts} attempts.`
        message.style.color = '#28a745'
        endGame()
    } else if (userGuess > randomNumber) {
        message.textContent = 'Too high! Try again.'
        message.style.color = '#dc3545'
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.'
        message.style.color = '#dc3545'
    }
    guessInput = ''
    guessInput.focus()
}

function endGame() {
    guessInput.disabled = true
    guessButton.disabled = true
    restartButton.style.display = 'inline'
}

function resetGame() {
    attempts = 0
    randomNumber = Math.floor(Math.random() *  100) + 1
    guessInput.disabled = false
    guessButton.disabled = false
    message.textContent = 'Good Luck! Start guessing . . .'
    message.style.color = '#333333'
    restartButton.style.display = 'none'
    guessInput.value = ''
    guessInput.focus()
}

guessButton.addEventListener("click", checkGuess)

restartButton.addEventListener("click", resetGame)

guessInput.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        checkGuess()
    }
})
