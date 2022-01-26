# Exercise 1 

1. Create a new folder and execute the following command in a new terminal window 

```
tsc --init
```

2. Verify that a new `tsconfig.json` file is created in the folder and the target value is es5.

3. Create a new file called `squares.ts` inside the folder.

4. In `squares.ts`, create a function called `squares`:

5. Create a new array from the input, using the JS map function:

6. Return the new array from the function.

The TypeScript should look like:

```ts
 function squares(array: number[]) {
   const result = array.map(x => x * x)
   return result
 }
```



7. Save the file and run `tsc squares.ts` in the folder.

8. Verify that there is a new file called `squares.js` with the following content.

```js
function squares(array) {
    var result = array.map(function (x) { return x * x; });
    return result;
}
```

9. Run `tsc --target es6 squares.ts` and compare the outputs.