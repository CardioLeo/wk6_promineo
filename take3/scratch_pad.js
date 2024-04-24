//
//
//

class Menu {
        constructor() {
        //      let player1 = new Player("Joeski", [0], 0);
        //      console.log(player1[0]);
        //      let player2 = new Player("Broski", [0], 0);
        //      console.log(player2);
        }

        start_game() {
                alert("war card game started!") // alert works
        }
}

class Deck {
        
	// data members

	let ranks = {
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
                "A": 13
        };

        let suites = ["Hearts", "Spades", "Diamonds", "Clubs"];
        
	// methods

	print_ranks(this.ranks){
		for (i = 0; i >= this.ranks.length-1; i++){
			console.log(i);
		}
	}
        
	print_suites(this.suites){
                for (i = 0; i >= this.suites.length-1; i++){
                        console.log(i); 
                }
        }

	// make_52(){
		// make it call the card constructor 52 times, etc?
	// }
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
let deck = new Deck();
let player1 = new Player("Curly");
let player2 = new Player("Moe");

menu.start_game();
deck.print_ranks();
deck.print_suites();
console.log(player1.name);
console.log(player2.name);
