// const Player = require("./Player)
const prompt = require("prompt-sync")();
class Game {
    constructor()  {

        this.player1;
        this.player2;
    }

    run(){
        this.greetPlayer();
        this.howManyPlayers();
        this.choices();
    }

    greetPlayer(){
        console.log("Hello, Players!")
    }

    howManyPlayers(){
        let userInput = prompt ("how many players?");
        
        console.log(userInput);
    }

    choices(){
        console.log("your choices are rock, paper, scissors, lizard, spock");
    }



}

module.exports = Game;