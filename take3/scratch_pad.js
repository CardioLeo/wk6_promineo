//
//
//

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

