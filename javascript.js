//A Function that gets a random output with the choices of "Rock , Paper and Scissors"
// to act as the computer's side.
  //no parameter required.
  //store these three strings in an array
  //select one randomly from the array
  //return it
//Another function for the logic of the game
//Two parameters - one from the computer's returned value and  
//another from the user's input, through the prompt
//compare these two
    //if two values are same, print(It's a tie)
    //a block of code that checks who wins according to the logic of the game
    // return the statement
//Another function to make the game run for five times iteratively
    //have to pass the previous function as a parameter
    //need to have a counter to store the scores of the players
    //a for loop to serve the purpose
    // and finally to display the scores and the winner in the console

 function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * choices.length) ;
    return choices[choice];
}  

let input;
let computerSelection;

function checkForWinner(playerChoice, computerChoice){
    input = prompt("Enter Your Choice. rock , paper or scissors : ");
    playerChoice = input.toLowerCase();
    computerSelection = getComputerChoice();
    computerChoice = computerSelection;
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

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++){
        let result = checkForWinner();
        console.log(result);
        console.log("Player's Choice : " + input, ", Computer's Choice: " , computerSelection);
        let positiveRes = new RegExp("You won!*");
        let negativeRes = new RegExp("You lose!*");
        if (positiveRes.test(result)){
            playerScore = ++playerScore; 
        } else if (negativeRes.test(result)){
            computerScore = ++computerScore;
        } 
        console.log("Player's Score: " + playerScore, ", Computer's Score: " + computerScore);
        console.log(" ");
    }
    let finalResult = playerScore > computerScore ? " Congratulations!!! You Won the Computer.":
    computerScore > playerScore ? "Sorry! Computer won the game.":
    "It's a tie. No one wins.";
    console.log(finalResult);
}
game();
