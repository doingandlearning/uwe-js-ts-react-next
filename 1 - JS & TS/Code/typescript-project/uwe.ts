// string
//

enum Routes {
  User = "/api/user/",
  Diamonds = "diamonds",
  Clubs = "clubs",
  Spades = "spades",
}

type integer = number;

type OtherPerson = [string, string, number?];

type OtherOtherPerson = {
  firstName: string;
  lastName: string;
  age?: number;
};

let trumpSuit = Routes.User;

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

// Union |
type Age = number | string;

function myAge(age: Age): Age {
  if (typeof age === "number") {
    return `My age is ${age} and the type was number.`;
  } else if (typeof age === "string") {
    return `My age is ${age} and the type was string.`;
  } else {
    return `Incorrect type - ${typeof age}`;
  }
}

// Intersections

type Product = {
  name: string;
  price: number;
  description: string;
};

type Order = {
  orderId: string;
  amount: number;
  discount?: number;
};

type CartItem = Product & Order;

const model: CartItem = {
  name: "Space Marine",
  price: 1212,
  description: "Cool",
  orderId: "ABC1234",
  amount: 1,
};

// String Literal

type EmailLocaleIDs = "email_welcome" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
type Lang = "en" | "ja" | "fr";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_${Lang}_id`;
