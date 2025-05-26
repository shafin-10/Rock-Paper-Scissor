let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

let genComChoice = () => {
    const options = ["rock", "paper", "scissor"];
    let ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};

let drawGame = () => {
    console.log("Game is draw");
    msg.innerText = "Game Drawn";
    msg.style.backgroundColor = "#081b31";
};

let showWinner = (userWin, cmpChoice, userChoice) => {
    if(userWin){
        console.log("user won");
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You won! Your choice ${userChoice} beats computer choice ${cmpChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("Computer won");
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `Computer won! computer choice ${cmpChoice} beats user choice${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

let playGame = (userChoice) => {
    console.log(`user choice = ${userChoice}`);

    //generate choices of computer
    let cmpChoice = genComChoice();
    console.log(`Computer choice = ${cmpChoice}`);

    if(userChoice == cmpChoice)
    {
        //game drawn
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            //paper , scissor
            if(cmpChoice == "paper") userWin = false;
            else userWin = true;
        }
        else if(userChoice == "paper"){
            //rock , scissor
            if(cmpChoice == "scissor") userWin = false;
            else userWin = true;
        }
        else{
            //rock , paper
            if(cmpChoice == "rock") userWin = false;
            else userWin = true;
        }
        showWinner(userWin, cmpChoice, userChoice);
    }
};


choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});