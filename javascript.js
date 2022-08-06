
function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * choices.length) ;
    return choices[choice];
}  

function checkForWinner(playerChoice, computerChoice){
    computerSelection = getComputerChoice();
    computerChoice = computerSelection;
    playerChoice = playerSelection;
    if (playerChoice == "rock" && computerChoice == "rock"){
        return "It's a tie";
    } else if  (playerChoice == "rock" && computerChoice == "scissors"){
        return "You won! Rock beats Scissors."
    } else if  (playerChoice == "rock" && computerChoice == "paper"){
        return "You lose! Paper beats Rock."
    } else if  (playerChoice == "scissors" && computerChoice == "scissors"){
        return "It's a tie";
    } else if (playerChoice == "scissors" && computerChoice == "paper"){
        return "You won! Scissors beats  Paper";
    } else if (playerChoice == "scissors" && computerChoice == "rock"){
        return "You lose! Rock beats  Scissors";
    } else if (playerChoice == "paper" && computerChoice == "paper"){
        return "It's a tie";
    } else if (playerChoice == "paper" && computerChoice == "scissors"){
        return "You lose! Scissors beats  Paper";
    } else if (playerChoice == "paper" && computerChoice == "rock"){
        return "You won! Paper beats  Rock";
    } 
    
}
let playerScore = 0;
let computerScore = 0;
function playGame(){
    let result = checkForWinner();
    const score = document.querySelector(".para1")
    score.textContent = result;
    let positiveRes = new RegExp("You won!*");
    let negativeRes = new RegExp("You lose!*");
    if (positiveRes.test(result)){
        playerScore = ++playerScore; 
    } else if (negativeRes.test(result)){
        computerScore = ++computerScore;
    } 
    const scoreP = document.querySelector(".score_p");
    scoreP.textContent = "Player's score: " + playerScore;
    const scoreC = document.querySelector(".score_c");
    scoreC.textContent = "Computer's Score: " + computerScore;
    const playerRes = document.querySelector(".player_choice");
    playerRes.textContent = "Player's Choice : " + playerSelection;
    const computerRes  = document.querySelector(".computer_choice");
    computerRes.textContent = "Computer's Choice: " + computerSelection;
    let finalResult;
    if (playerScore >= 5 || computerScore >= 5){
        if (playerScore >= 5){
            finalResult = " Congratulations! You Won the Computer.";
        } else if(computerScore >= 5){
            finalResult = "Sorry! Computer won the game.";
        }
    }
    const scoreRes = document.querySelector(".para2");
    scoreRes.textContent = finalResult;
    if (playerScore > 5 || computerScore > 5){
        buttons.forEach((button) => {
            button.addEventListener('click', window.location.reload());
        });
    }
}
const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>{
    button.addEventListener('click', action => {
        playerSelection = button.id;
        playGame();
    })
});
