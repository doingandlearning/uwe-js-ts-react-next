// "Some text"
// 12

function snippet(text: string, length: number): string {
  if (text.length < length) {
    return text;
  }

  const ellipsis = "...";
  let result = text.slice(0, length - ellipsis.length);
  const lastSpace = result.lastIndexOf(" ");
  result = `${result.slice(0, lastSpace)}${ellipsis}`;

  return result;
}

const resultOne = snippet(
  "TypeScript is a programming language that is a strict syntactical superset of JavaScript and adds optional static typing to the language.",
  40
);

const resultTwo = snippet("Lorem ipsum", 10);

console.log(resultOne);

interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}

function showFullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

function makePerson(name: string, surname: string): Person {
  return {
    firstName: name,
    lastName: surname,
  };
}

const babbage = makePerson("Charles", "Babbage");
showFullName(babbage);

const person: Person = {
  firstName: "Ada",
  lastName: "Lovelace",
};

person.age = 25;

console.log(`Hello ${person.firstName}`);
