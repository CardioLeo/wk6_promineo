// Author: William Zachary Chadwick
// Date Created: 11/14/2023
// Date Modified: 11/14/2023
// Descripton: A place for my JavaScript cardgame, War, implementation
// 		for PromineoTech Week 6 project
// Usage: For use along with an index.html file in internet browsers

// -----

// Game Logic:
// 1. Define Cards/Players/Decks(/hands?)
// 2. Deal 26 cards to each player from one deck
// 3. Highest card in each round gets each player an extra point
// -- ties result in zero points for both players
// 4. After all cards play, display score, declare winner

// -----

// Player Has Hand, Hand has Cards;
// Card has Emblem, Number (K,Q,J);
// Card is an instance of an Object belonging to Hand;
// Hand is an instance of an Object belonging to Deck;

// Need Shuffle Logic.

class Menu {
	constructor() {
		let player1 = new Player("Joeski", [0], 0);
		console.log(player1);
		let player2 = new Player("Broski", [0], 0);
		console.log(player2);
	}

	start_game() {
		
	}
}

class Deck {
	let rank_values = {
		"2": 2,
		"3": 3,
		"4": 4,
		"5": 5,
		"6": 6,
		"7": 7,
		"8": 8,
                "9": 9,
                "10": 10,
                "J": 11,
                "Q": 12,
                "K": 13,
                "A": 14
	}
	console.log(rank_values)
	let suites_list = ["Hearts", "Spades", "Diamonds", "Clubs"]
	console.log(suites_list);
}

class Card(rank, suite, value) {
	constructor(rank, suite, value) {
		let this.rank = rank;
		let this.suite = suite;
		let this.value = value;
	}
}

class Player(name, hand, score) {
	let this.name = "";
	let this.hand = [];
	let this.score = 0;
}

let menu = new Menu();
menu.start_game();
