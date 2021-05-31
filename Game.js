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
    }

    greetPlayer(){
        console.log("Hello, Players!")
    }

    howManyPlayers(){
        let userInput = prompt ("how many players?");

        console.log(userInput);
    }



}

module.exports = Game;