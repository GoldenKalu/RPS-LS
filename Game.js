const Player = require('./Player');
const Human = require('./Human');
const Ai = require('./Ai');

const prompt = require("prompt-sync")();
class Game {
    constructor()  {

        this.player1;
        this.player2;

        this.gesture = [];

        this.gesture.push(new gesture(Rock));
        this.gesture.push(new gesture(Paper));
        this.gesture.push(new gesture(Scissors));
        this.gesture.push(new gesture(Lizard));
        this.gesture.push(new gesture(Spock));

    }

    run(){
        this.greetPlayer();
        this.howManyPlayers();
        this.choices();
        this.chooseGameoption();
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

        chooseGameoption(){
            console.log("your choices are Human vs Human", "Human vs Ai");
        }

    displayRules() {
        console.log("Welcome to the RPSLS Game!")
        console.log("Two players will pick a gesture and total up their results.")
        console.log("The first player to three points will win the game!");
      }
    
    
}

    let Player1 = Human;
    let Player2 =Ai;
    let playerMove;
    let winner = this.getWinner;

    if (Player1 === Player2){
        console.log('its a tie');
    } else if ("player1Move === 'Rock'"){
        if (Player2Move ===' Paper') {
        console.log('Player1 lose');
        } else { winner = "Player1"};

    if (player1Move === 'scissors')
            (Player2Move === 'Paper')
        console.log('Player1 winner');
    }   else if {'Player2 lose'};

    if (Player1Move === 'Lizard')
        (player2Move === 'Spock')
        console.log('Player1 winner');
        else if {'Player1 lose'};


        printResult( player1 winner){
            console.log( 'winner Player1');
        }

    let Player1 = Human;
    let Player2 =Human;

    if (player1Move === 'Lizard')
        (Player2Move === 'Rock'){
        console.log('winner is Player2'){
                else if{ winner = "Player1" };
        }
    
        if (Player1Move === 'Rock')
        (Player2Move === 'Spock')
        console.log('winner is Player2')
            else if { winner = 'Player1'};
    }
        
        if (player1Move === 'Lizard')
            (Player2Move === 'Paper')
            console.log('winner is Player1'){
                else if {winner = 'Player2'};
            }

            
        printResult( player1 winner){
            console.log( 'winner Player1');
    }








module.exports = Game