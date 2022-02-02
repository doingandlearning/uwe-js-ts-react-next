// string
//
var Suit;
(function (Suit) {
    Suit[Suit["Hearts"] = 0] = "Hearts";
    Suit[Suit["Diamonds"] = 1] = "Diamonds";
    Suit[Suit["Clubs"] = 2] = "Clubs";
    Suit[Suit["Spades"] = 3] = "Spades";
})(Suit || (Suit = {}));
let trumpSuit = Suit.Diamonds;
console.log(trumpSuit);
// {
//   '0': 'Hearts',
//   '1': 'Diamonds',
//   '2': 'Clubs',
//   '3': 'Spades',
//   Hearts: 0,
//   Diamonds: 1,
//   Clubs: 2,
//   Spades: 3
// }
