'use strict';


const check = document.querySelector('.check');

const num = Math.round(Math.random() * 20);

let highScore = 0;
document.querySelector('.highscore').innerHTML = highScore;



console.log(num);
console.log(guessedNumber);


// document.querySelector('.again').addEventListener('click', () => {

//     console.log("Again button clicked");
//     alert("Clicked again for refresh the game")

//     // document.getElementsByTagName('body')[0].style.backgroundColor = "#222";
//     // document.getElementById('gussedNumber').value = "";
//     // document.querySelector('.message').innerHTML = "Start guessing...";
//     // document.querySelector('.number').innerHTML = "?";
// })

function handleClick() {
    const guessedNumber = Number(document.getElementById('gussedNumber').value);
    document.querySelector('.number').innerHTML = guessedNumber;
    let totalScore = Number(document.querySelector('.score').innerHTML);



    alert(`Guessed number is ${guessedNumber} ${typeof guessedNumber} and target number should be ${num} ${typeof num}`);

    if (guessedNumber < num && guessedNumber >= 0) {
        document.querySelector('.message').innerHTML = "too Low";
        document.querySelector('.score').innerHTML = totalScore - 1;
        totalScore--;
    }
    else if (guessedNumber > num && guessedNumber <= 20) {
        document.querySelector('.message').innerHTML = "too High";
        document.querySelector('.score').innerHTML = totalScore - 1;
        totalScore--;
    }
    else if (guessedNumber === num) {
        document.querySelector('.message').innerHTML = "you guessed it successfully";
        document.getElementsByTagName('body')[0].style.backgroundColor = "rgb(38, 243, 38)";
        document.getElementsByTagName('body')[0].style.color = "black";

        totalScore > highScore ? highScore = totalScore : null;

        document.querySelector('.highscore').innerHTML = highScore;


    }
    else {
        alert("Number should be between 1 to 20");
        document.querySelector('.message').innerHTML = "too High";
        document.querySelector('.score').innerHTML = totalScore - 1;
        totalScore--;
    }
};


function refreshGame() {
    document.getElementsByTagName('body')[0].style.backgroundColor = "#222";
    document.getElementById('gussedNumber').value = "";
    document.querySelector('.message').innerHTML = "Start guessing...";
    document.querySelector('.number').innerHTML = "?";
    document.getElementsByTagName('h1')[0].style.color = "white";
    document.querySelector('.score').innerHTML = "20"
}


