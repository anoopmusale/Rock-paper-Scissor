let userScore = 0;
let compScore = 0;
let userScore_span = document.getElementById("user-score");
let compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock-choice");
const paper_div = document.getElementById("paper-choice");
const scissor_div = document.getElementById("scissor-choice");

function game(userChoice){
    const choices = ["Rock","Paper","Scissor"];
    const compChoice = choices[Math.floor(Math.random()*3)];
    
    switch (userChoice + compChoice){
        case "RockScissor":
        case "ScissorPaper":
        case "PaperRock":
            userScore++;
            userScore_span.innerHTML = userScore;
            result_div.innerHTML =  userChoice +" beats " +compChoice +". You WIN!!";
            break;
            
        case "ScissorRock":
        case "PaperScissor":
        case "RockPaper":
            compScore++;
            compScore_span.innerHTML = compScore;
            result_div.innerHTML =  compChoice +" beats " +userChoice +". You LOSE :( ";
            break;
        case "ScissorScissor":
        case "PaperPaper":
        case "RockRock":
            compScore++;
            compScore_span.innerHTML = compScore;
            result_div.innerHTML =  compChoice +" Draw " +userChoice +". Its a Draw :| ";
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("Rock");
    })

    paper_div.addEventListener('click', function(){
        game("Paper");
    })

    scissor_div.addEventListener('click', function(){   
        game("Scissor");
    })
}


main();