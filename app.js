let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreSpan = document.querySelector("#user-score");
const compScoreSpan = document.querySelector("#comp-score");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const rnd = Math.floor(Math.random() * 3); // get a random number between 0 and 2, increase the 3 to get desired range
    return options[rnd];
}

const DrawGame = () => {
    msg.innerText = "GAME DRAW";
    msg.style.backgroundColor = "blue";
    msg.style.borderRadius = "1.5rem";
}

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScoreSpan.innerText = userScore;
        console.log("USER WINS");
        msg.innerText = "YOU WON";
        msg.style.backgroundColor = "green";
        msg.style.borderRadius = "1.5rem";
    }
    else {
        compScore++;
        compScoreSpan.innerText = compScore;
        console.log("COMP WINS");
        msg.innerText = "YOU LOOSE";
        msg.style.backgroundColor = "red";
        msg.style.borderRadius = "1.5rem";
    }
};


const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = getCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        DrawGame();
    }
    else {
        // nestesd else code
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;

        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};



choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click", (e) => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);

    });
});

