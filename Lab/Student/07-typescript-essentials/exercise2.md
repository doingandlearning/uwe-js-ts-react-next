# Working with functions in TypeScript

1. Create a new file called snippet.ts.
2. In snippet.ts, define a simple function called snippet:

```ts
function snippet (text: string, length: number) : string {
```

3. Check whether the text is smaller than the specified length, and if it is, return it unchanged:
  
```ts 
	if (text.length < length) {
		return text;
	}
```

4. If the text is larger than the maximum length, we'll need to add an ellipsis. The maximum number of characters that we'll be able to show is the specified length minus the length of our ellipsis (as it takes up space too). We'll use the slice string method to extract that many characters from the text:

```ts
	const ellipsis = "...";
	let result = text.slice(0, length - ellipsis.length);
```

5. We'll find the last word boundary before the cutoff, using lastIndexOf, and then combine the text up to that point with the ellipsis:

```ts
  const lastSpace = result.lastIndexOf(" ");
	result = `${result.slice(0, lastSpace)}${ellipsis}`;
```
6. Return the result from the function:

```ts
  return result;
}
```

7. After the function, create a few calls to the function with different parameter types:
 
```ts
// correct call and usage
const resultOne = snippet("TypeScript is a programming language that is a strict syntactical superset of JavaScript and adds optional static typing to the language.", 40);
console.log(resultOne);
// missing second parameter
const resultTwo = snippet("Lorem ipsum dolor sit amet");
console.log(resultTwo);
// The first parameter is of incorrect type
const resultThree = snippet(false, 40);
console.log(resultThree);
// The second parameter is of incorrect type
const resultFour = snippet("Lorem ipsum dolor sit amet", false);
console.log(resultFour);
// The result is assigned to a variable of incorrect type
var resultFive: number = snippet("Lorem ipsum dolor sit amet", 20);
console.log(resultFive);
```

8. Save the file and run the following command in the folder:

```bash   
tsc snippet.ts
```

9. Verify that the file did not compile correctly. You will get specifics from the compiler about the errors found, and the compilation will end with the following message:

```bash
Found 3 errors.
```

10. Comment out or delete all invocations except the first one:

```ts
// correct call and usage
var resultOne = snippet("TypeScript is a programming language that is a strict syntactical superset of JavaScript and adds optional static typing to the language.", 40);
console.log(resultOne);
```

11. Save the file and compile it again:

```
tsc snippet.ts
```

12. Verify that the compilation ended successfully and that there is a snippet.js file generated in the same folder. Execute it in the node environment with the following command:

```bash
node snippet.js
```

You will see an output that looks as follows:

```bash
TypeScript is a programming language...
```