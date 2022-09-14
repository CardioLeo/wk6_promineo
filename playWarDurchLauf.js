// Author: William Z Chadwick
// Date Created: 09/14/2022
// Date Modified: 09/14/2022
// Description: A place for my notes following along with K Macias' video walk-through of Promineo Tech Week 7 playWar card program.
//

class Character {
	constructor(name, spoils, ) {}

}

class Card {
	constructor() {
		this.value = value;
		this.suit = suit;
		this.rank = 
		// need rank and value; value = A, J, Q, K; rank = actual numerical value, 1-13;
	}
}

class Deck {}

class Character {}

let player1 = new Character('Kyle');
console.log(player1);
let player2 = new Character('Joe');
console.log(player2);

let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let suits ["Hearts", "Diamonds", "Spades", "Clovers"];
let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

createDeck() {
	for (let valueIndex = 0; valueIndex < values.length; valueIndex++) {
		for (let suitIndex = )

	}
}
dealDeck() {
	player1.hand = this.deck.slice(0, 26);
	console.log("printing player1 hand:", player1.hand);
	player2.hand = this.deck.slice(26, 52);
	console.log("printing player2 hand:", player2.hand);
	// slice method ignores the first number, so 26 and 0 are ignored
}

newDeck.createDeck();
newDeck.shuffleDeck();
newDeck.dealDeck();

// class for game

class Game {
	constructor() {

		// don't always have to utilize a constructor;
	}
	// we need a way to make 26 rounds happen; 1 card per round; which played card rank is bigger than the other; assign point values, keep in mind;
	// so we need to 1. iterate 26 rounds
	// (use for-loop)
	// 2. a way to compare values of individual cards each roung
	// 3. assign point to score for player who won the round
	compareCards() {
		console.log(player1.score); // test
		console.log("testing compareCards method"); // test
		for (let round = 0; round < 26; round++) {
			console.log(round);
			console.log(player1.hand[round]);
			// if else statements to check card values and determine round winner
			console.log("player 1 played this card: ", player1.hand[round]);
			console.log(player2.hand[round]);


			if (player1.hand[round].rank > player2.hand[round].rank){console.log(player 1 wins the round!)
				console.log("
					Round ${round}
					${player1.hand[round].value} of ${player1.hand[round].suit}
					${player2.hand[round].value} of ${player2.hand[round].suit} ");
				console.log();
				console.log();

			} else if (player2.hand[round].rank > player1.hand[round].rank){
				console.log("player 1 wins the round!");
				console.log("player 1 played this card:");
				console.log("player 2 played this card:");
				console.log("
                                        Round ${round}
                                        ${player1.hand[round].value} of ${player1.hand[round].suit}
                                        ${player2.hand[round].value} of ${player2.hand[round].suit} ");


			} else if (player1.hand[round].rank === player2.hand[round].rank) {
				console.log();
				console.log("
                                        Round ${round}
                                        ${player1.hand[round].value} of ${player1.hand[round].suit}
                                        ${player2.hand[round].value} of ${player2.hand[round].suit} ");
				console.log()
			};

		}
	}
	
}

let newGame = new Game();
newGame.compareCards();

// need final conditional comparing final spoils to each other;

// make it work, test it, clean it up;

