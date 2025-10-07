<<<<<<< HEAD
let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, loses: 0, ties: 0 };

// if (score === null) {   //!score -- isnull? --true
//  score = { wins : 0 ,
//  loses : 0 ,
//  ties : 0
//  };
// }

updatescore();

function playGame(yourMove) {

    const compMove = pickCompMove();
    let result = '';

    if (compMove === yourMove) {
        result = 'Tie.';
    }
    else if ((compMove === 'rock' && yourMove === 'scissors') || (compMove === 'paper' && yourMove === 'rock') || (compMove === 'scissors' && yourMove === 'paper')) {
        result = 'You Lose.';
    }
    else if ((compMove === 'rock' && yourMove === 'paper') || (compMove === 'paper' && yourMove === 'scissors') || (compMove === 'scissors' && yourMove === 'rock')) {
        result = 'You Win.';
    }

    if (result === 'You Win.') {
        score.wins++;
    }
    else if (result === 'You Lose.') {
        score.loses++;
    }
    else if (result === 'Tie.') {
        score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updatescore();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-pick').innerHTML = `You <img src="./${yourMove}-emoji.png" class="pick">  <img src="./${compMove}-emoji.png" class="pick"> Computer`;

}

function gameresult() {
    document.querySelector('.js-result').innerHTML = result;
}

function pick() {
    document.querySelector('.js-pick').innerHTML = `You picked ${yourMove} Computer picked ${compMove}`;
}

function updatescore() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}


function pickCompMove() {

    const randomNum = Math.random();
    let compMove = '';

    if (randomNum >= 0 && randomNum < 1 / 3) {
        compMove = 'rock';
    }
    else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
        compMove = 'paper';
    }
    else if (randomNum >= 2 / 3 && randomNum < 1) {
        compMove = 'scissors';
    }

    return compMove;
}
=======
let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, loses: 0, ties: 0 };

// if (score === null) {   //!score -- isnull? --true
//  score = { wins : 0 ,
//  loses : 0 ,
//  ties : 0
//  };
// }

updatescore();

function playGame(yourMove) {

    const compMove = pickCompMove();
    let result = '';

    if (compMove === yourMove) {
        result = 'Tie.';
    }
    else if ((compMove === 'rock' && yourMove === 'scissors') || (compMove === 'paper' && yourMove === 'rock') || (compMove === 'scissors' && yourMove === 'paper')) {
        result = 'You Lose.';
    }
    else if ((compMove === 'rock' && yourMove === 'paper') || (compMove === 'paper' && yourMove === 'scissors') || (compMove === 'scissors' && yourMove === 'rock')) {
        result = 'You Win.';
    }

    if (result === 'You Win.') {
        score.wins++;
    }
    else if (result === 'You Lose.') {
        score.loses++;
    }
    else if (result === 'Tie.') {
        score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updatescore();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-pick').innerHTML = `You <img src="./${yourMove}-emoji.png" class="pick">  <img src="./${compMove}-emoji.png" class="pick"> Computer`;

}

function gameresult() {
    document.querySelector('.js-result').innerHTML = result;
}

function pick() {
    document.querySelector('.js-pick').innerHTML = `You picked ${yourMove} Computer picked ${compMove}`;
}

function updatescore() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}


function pickCompMove() {

    const randomNum = Math.random();
    let compMove = '';

    if (randomNum >= 0 && randomNum < 1 / 3) {
        compMove = 'rock';
    }
    else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
        compMove = 'paper';
    }
    else if (randomNum >= 2 / 3 && randomNum < 1) {
        compMove = 'scissors';
    }

    return compMove;
}
>>>>>>> 977089a4263deb9111c9a8ced54dfe8f16860848
