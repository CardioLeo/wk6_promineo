// Author: William Z Chadwick
// Date Created: 09/14/2022
// Date Modified: 09/14/2022
// Description: My JavaScript version of the classic card game, "War".
//

//

//

// blog notes: good abstraction can be pragmatic; you are overwhelmed; you say, breathe. you say, what is the next right thing. You put everything else out of your mind. You do the next right thing. This is a form of good abstraction, and perhaps like methodical reductionism regarding steps to do in the immediate future. Whereas, in Kierkegaard's words, "Freedom's possibility announces itself in anxiety" (Concept of Anxiety, ch II.2.b, page 91,).

// what do I need to do next? I need to figure out everything that needs to go into the players class.
class Player{
	constructor(name, hand, spoils) {
		this.name = name;
		this.hand = [];
		this.spoils = [];
	}
	//any additional methods?
	}
class Deck{ //cards
	constructor()
	this.deck = [];
}

let suites = ["Hearts", "Spades", "Diamonds", "Clubs"];
console.log(suites);
let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
console.log(value);
let rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
console.log(rank);
// suites, value and rank have been console.log tested;


class Card() {
	// so there should be a loop in the constructor, or a loop that calls the constructor 26 times? How did Macias fill this out in her walkthrough?
	let this.rank = rank;
	let this.suit = suit;
	let this.value = value;}
class Hand{
	// should hand be a sub-class of player?
}

// there needs to be a loop which fills out the deck with one of each of the suites, values, and ranks;

let player1 = new Player("Joeski", [0], [0]);
console.log(player1);
let player2 = new Player("Broski", [0], [0]);
console.log(player2);

function playWar() {



	if {
	} else if {
	} else if {
	}
};


playWar();
