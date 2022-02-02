// "Some text"
// 12
function snippet(text, length) {
    if (text.length < length) {
        return text;
    }
    var ellipsis = "...";
    var result = text.slice(0, length - ellipsis.length);
    var lastSpace = result.lastIndexOf(" ");
    result = "".concat(result.slice(0, lastSpace)).concat(ellipsis);
    return result;
}
var resultOne = snippet("TypeScript is a programming language that is a strict syntactical superset of JavaScript and adds optional static typing to the language.", 40);
var resultTwo = snippet("Lorem ipsum", 10);
console.log(resultOne);
