let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const getAbsoluteDistance = (numberOne, numberTwo) => {
  return Math.abs(numberOne - numberTwo);
};
const compareGuesses = (userGuess, computerGuess, secretTargetNumber) => {
  return (
    getAbsoluteDistance(userGuess, secretTargetNumber) <=
    getAbsoluteDistance(secretTargetNumber - computerGuess)
  );
};

const updateScore = (winner) => {
  winner === "human" ? (humanScore += 1) : (computerScore += 1);
};

const advanceRound = () => currentRoundNumber++;
