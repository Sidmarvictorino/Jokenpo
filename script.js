

const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {
    playThegame(humanChoice, playMachine())
}


const playMachine = () => {
    const choice = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    console.log(randomNumber)

    return choice[randomNumber]

}


const playThegame = (human, machine) => {

    console.log('humano:' + human + "maquina:" + machine)

    if (human === machine) {
        result.innerHTML = "Deu Empate"
    } else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissor') ||
        (human === 'scissor' && machine === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para Alexa"
    }

}