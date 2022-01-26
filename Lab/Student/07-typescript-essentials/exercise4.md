# Exercise 4 - Making a Calculator Function

1. Create a new file called `calculator.ts`.

2. In this file define an enum with all the operators that we want to support in our code (Add, Subtract, Multiply, Divide).

3. Define an empty (for now) `calculator` function that will be our main interface. The function should take three parameters: the two numbers that we want to operate on, as well as an operator.

4. Create a type alias, `Operation`, for a function that does a calculation on two numbers. 

5. Create an empty array that can hold multiple tuples of the `[Operator, Operation]` type. This will be our dictionary, where we store all our methods.

6. Create an `add` method that satisfies the `Operation` type.

7. Create a tuple of `Operator.Add` value and the `add` function and add to the `operations` array.

8. Repeat steps 6 and 7 for subtraction, multiplication and division functions.

9. Implement the `calculator` function, using the `operations` array to find the correct tuple by the `Operator` provided and then using it to carry out the operation.

10. Test it with some values.

Extra: Add a modulo operator.