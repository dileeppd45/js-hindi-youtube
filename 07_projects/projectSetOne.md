# Projects related to DOM

## PROJECT LINK
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("dileep");
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```
## project 2

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = bmi;
  }
});


```

## project 3

```javascript

const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## project 4

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');
let numGuess = 0;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`please enter a valid number`);
  } else if (guess < 1) {
    alert(`Please enter a number more than 1`);
  } else if (guess > 100) {
    alert(`please enter a number less than 100`);
  } else {
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function displayGuess(guess) {
  numGuess++;
  if (parseInt(10 - numGuess) < 0) {
    remaining.innerHTML = '0';
  } else {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    remaining.innerHTML = `${10 - numGuess}`;
  }
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  submit.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id ="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    numGuess = 0;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess}`;
    submit.removeAttribute('disabled');
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    displayMessage.innerHTML = '';
  });
  playGame = true;
}

```
## project 5

```javascript

console.log('Project 5');

insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  console.log(e.keyCode);
  insert.innerHTML = `
  <div class = "color">
    <table>
    <tr>
      <th>key</th>
      <th>keycode</th>
      <th>code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
    </table>
  </div>
  `;
});
```



## project 6

```javascript

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(16 * Math.random())];
  }
  document.querySelector('body').style.backgroundColor = color;
};

let changeColorId = undefined;
document.querySelector('#start').addEventListener('click', function () {
  if (changeColorId == null) {
    changeColorId = setInterval(randomColor, 2000);
  }
});
document.querySelector('#stop').addEventListener('click', function () {
  if (changeColorId != null) {
    clearInterval(changeColorId);
    changeColorId = null;
  }
});

 
 ```