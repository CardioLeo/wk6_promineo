// Author: William Zachary Chadwick
// Date Created: 11/14/2023
// Date Modified: 11/14/2023
// Descripton: A place for my JavaScript cardgame, War, implementation
// 		for PromineoTech Week 6 project
// Usage: For use along with an index.html file in internet browsers

// -----

// Game Logic:
// 1. Define Cards/Players/Decks(/hands?)
// -- -- -- Decks, Players, Menu defined;
// -- -- -- Means of printing values defined;
// -- -- -- Sleep function defined;
// 2. - -- Define shuffle algorithm & function
// 3. Deal 26 cards to each player from one deck
// 4. Highest card in each round gets each player an extra point
// -- ties result in zero points for both players
// 5. After all cards play, display score, declare winner

// -----

// Player Has Hand, Hand has Cards;
// Card has Emblem or Number (K,Q,J);
// Card is an instance of an Object belonging to Hand;
// Hand is an instance of an Object belonging to Deck; // Is this true?
// 							/ I don't think so

// Need Shuffle Logic.

//
//
//

function sleep(ms) { 
        return new Promise(resolve => setTimeout(resolve, ms));
}

function print_all_in(this_set) {
	console.log('printing all elements in set');
	// alert('printing all elements in set');
	for (let element in this_set){
		sleep(750).then(() => { console.log(element); });
                                // 750 is a good arg to pass to sleep
				// if doing console.log();
				// but for alert, even 50 feels too large
	}
}

function get_value_by_key(input_key){
	let value = Object.keys(input_key).forEach((item) => {
		if(typeof input_key[item] == "number") {
		       return input_key[item];
		}
		return "Error!";
	})
	return value;
}

function print_array_of_objects(full_52){
	let formatted_52 = JSON.stringify(full_52, null, 4);
	console.log(formatted_52);
}

class Menu {
        constructor() {
        //      let player1 = new Player("Joeski", [0], 0);
        //      console.log(player1[0]);
        //      let player2 = new Player("Broski", [0], 0);
        //      console.log(player2);
        }

        start_game() {
		console.log("war card game started!");
                // alert("war card game started!") // alert works
        }
}

class Deck {
        
	// data members

	ranks = {
                "2": 1,
                "3": 2,
                "4": 3,
                "5": 4,
                "6": 5,
                "7": 6,
                "8": 7,
                "9": 8,
                "10": 9,
                "J": 10,
                "Q": 11,
                "K": 12,
                "A": 13,
	};

        suites = ["Hearts", "Spades", "Diamonds", "Clubs"];
        
	// methods

	print_suites() {
		// alert("printing suites");
                console.log("printing suites");
		for (let i = 0; i < this.suites.length; i++){
                        // alert(suites[i]);
			console.log(this.suites[i]); 
                }
        }
}	

class Card {
        constructor(rank, suite, points, card_num) {
                this.rank = rank;
                this.suite = suite;
                this.points = points;
		this.card_num = card_num;
        }

	make_52_cards(deck_suites, deck_ranks){
		let full_52 = [];
		let card_number = 1;
		for (let suite_num = 0; suite_num < deck_suites.length; suite_num++){
			for (let element in deck_ranks){
				let this_card_suite = deck_suites[suite_num];
				let this_card_rank = element;
				let this_card_points = deck_ranks[element];
				let temp = new Card(this_card_rank, this_card_suite, this_card_points, card_number);
				full_52.push(temp);
				// console.log("The number of this card is: ", card_number, "||| Rank: ", this_card_rank, "||| Suite: ", this_card_suite, "||| Points: ", this_card_points,);
				if (card_number < 53){
					card_number++; // this is mainly for helping insure my sanity
				}
			}
			// const obj = { name: "Ben" };
			// Object.assign(obj, { age: 22 });
			// console.log(obj); // { name: 'Ben', age: 22 }
		}
		// PRINT HERE ******
		print_array_of_objects(full_52);
	}
}

class Player { // add name, hand, score as parameters to constructor?
        name = "";
        hand = [];
        score = 0;

	constructor(name, score){
		this.name = name;
		// this.hand = hand;
		this.score = score;
	}
}

//

let menu = new Menu();
let deck = new Deck();
let player1 = new Player("Curly", 0);
let player2 = new Player("Moe", 0);

let arch_card = new Card(deck.suites[0], deck.suites[1], deck.suites[2]);
let full_52 = arch_card.make_52_cards(deck.suites, deck.ranks);

menu.start_game();
// print_all_in(deck.ranks);
// deck.print_suites();
console.log(player1);
console.log(player2);
// print_all_in(deck.suites); // only prints indices and not strings of suites
