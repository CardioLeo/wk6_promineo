// Author: William Z Chadwick
// Date Created: 09/14/2022
// Date Modified: 09/14/2022
// Description: My JavaScript version of the classic card game, "War".
//

//

//

// blog notes: good abstraction can be pragmatic; you are overwhelmed; you say, breathe. you say, what is the next right thing. You put everything else out of your mind. You do the next right thing. This is a form of good abstraction, and perhaps like methodical reductionism regarding steps to do in the immediate future. Whereas, in Kierkegaard's words, "Freedom's possibility announces itself in anxiety" (Concept of Anxiety, ch II.2.b, page 91,).

// what do I need to do next? I need to figure out everything that needs to go into the players class.

//
// process:
// 	create classes: players, decks, 
// 	match values to ranks;
// 	match each key-value pair to a
// 	different suite, four times
//
// key-value pair syntax:
// 	var arr = { "one": 1, "two": 2, "three": 3 };
// which would look like:
// 	var rank_value_arr = { "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "J": 11, "Q": 12, "K": 13, "A": 14 }

class Player{
	constructor(name, hand, spoils) {
		this.name = name; // will be input later?
				//when constructor is called?
		this.hand = []; // will be array, bc hands hold plural cards
				// how does this get initialized?
				// it is initialized here as empty;
				// it will be filled out later on
		this.spoils = []; // i.e, points, will be calculated
				// based on adding up the value side
				// of the key-value pairs gathered in
				// by each player either turn by turn
				// or by the end of the game; may be
				// best to figure out how to calculate
				// it on a turn-by-turn basis
	}
	//any additional methods?
}
// initially deck was within player; but I'm moving it outside of player

// readability pause

class Deck{ //cards
	let rank_value_arr = { "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "J": 11, "Q": 12, "K": 13, "A": 14 }
	// each constructor call should pair a copy
	// of the rank_value_arr to a suite;
	// this will require a loop;
	// if x = 0, pair hearts --> rank_val_arr1;
		// // Hearts_Deck, maybe better name, etc
	// x++;
	// if x = 1, pair Spades --> rank_val_arr2;
	// x++;
	// if x = 2, pair Diamonds --> rank_val_arr3;
	// x++;
	// if x = 3, pair Clubs_Deck --> rank_values_arr4;
		// // can you make a key-value pair arr
		// // of other key-value pair arrs?
	        //
	//
        // so next we need to do this:
	// let Spades_Deck = rank_value_arr_copy1
	// looping four times over the suites_list
	// until we have a deck_total of 4;
	//
	// for (let deck_total = 0; deck_total < 4; deck_total++) {
	//	for (let deck = 0; deck = < 4; deck++) {
	//		if () {
	//			// hmmm
	//		}
	//	} // is this really the best way to build the separate decks?
	// }
	//
	// 	// what if I try ...
	// 	// freecodecamp.org has an article about cloning arrays
	// 	// there are a lot of possibilities; I like this one, I think:
	// 		// numbers = [1, 2, 3];
	// 		// numbersCopy = numers.map((x) => x);
	// 	// or
	// 		// identity = (x) => x;
	//		// numbers.map(identity);
	//		// 	// [1, 2, 3]
	//	// so wouldn't I say:
	//		// let Spades_deck = deck.map((x)=>x);
	//	// or, to make it a loop creating copies of arrays
	//		// for (deck_total = 0; deck_total < 4; deck_total++;) {
	//			// for (suites_counter = 0; suites_counter < deck_total + 1; suites_counter++)
	//			// if (suites_counter = suites_list[0]) {}
	//		} 	// have to initialize the deck names
	//			// elsewhere! in suites...
	// 	Spades_Deck = 
	//
	constructor() {
	this.deck = [];
		// one deck should equal one whole copy
		// of the key-value pairs array, 
	}
}

// readability pause

let suites_list = ["Hearts", "Spades", "Diamonds", "Clubs"];
console.log(suites_list);
let values_list = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
console.log(values_list);
let ranks_list = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
console.log(ranks_list);

// suites, value and rank have been console.log tested;
// now I should move over to working on Week 7 items;

// readability pause

class Card(rank, suite, value) {
	// so there should be a loop in the constructor,
	// or a loop that calls the constructor 26 times?
	// How did Macias fill this out in her walkthrough?
	constructor{
		let this.rank = rank;
		let this.suite = suite;
		let this.value = value;
	}
}

// readability pause

class Hand{
	// should hand be a sub-class of player?
}

// there needs to be a loop which fills out the deck
// with one of each of the suites, values, and ranks;

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
