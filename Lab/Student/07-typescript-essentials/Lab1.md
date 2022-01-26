# Creating a Library for Working with Strings

Your task is to create a series of simple functions that will help you do some common operations on strings. Some of the operations are already supported in the standard JavaScript library, but you will use them as a convenient learning exercise, both of JavaScript internals and TypeScript as a language. Our library will have the following functions:

1. `toTitleCase`: This will process a string and will capitalize the first letter of each word but will make all the other letters lowercase.
Test cases for this function are as follows:

```
"war AND peace" => "War And Peace"
"Catcher in the Rye" => "Catcher In The Rye"
"tO kILL A mOCKINGBIRD" => "To Kill A MockingBird"
```

2. `countWords`: This will count the number of separate words within a string. Words are delimited by spaces, dashes (-), or underscores (_).
Test cases for this function are as follows:

```
"War and Peace" => 3
"catcher-in-the-rye" => 4
"for_whom the-bell-tolls" => 5
```

3. `toWords`: This will return all the words that are within a string. Words are delimited by spaces, dashes (-), or underscores (_).
Test cases for this function are as follows:

```
"War and Peace" => [War, and, peace]
"catcher-in-the-rye" => [catcher, in, the, rye]
"for_whom the-bell-tolls"=> [for, whom, the, bell, tolls]
```

4. repeat: This will take a string and a number and return that same string repeated that number of times.
Test cases for this function are as follows:

```
"War", 3 => "WarWarWar"
"rye", 1 => "rye"
"bell", 0 => ""
```

5. isAlpha: This will return true if the string only has alpha characters (that is, letters). Test cases for this function are as follows:

```
"War and Peace" => false
"Atonement" => true
"1Q84" => false
```

6. isBlank: This will return true if the string is blank, that is, consists only of whitespace characters.
Test cases for this function are as follows:

```
"War and Peace" => false
"         " => true
"" => true
```

When writing the functions, make sure to think of the types of the parameters and the types of the return values.



# Hints

1. Creating the toTitleCase function: In order to change each word, we'll need first to get all the words. You can use the split function to make a single string into an array of words. Next, we'll need to slice off the first letter from the rest of the word. We can use the toLowerCase and toUpperCase methods to make something lower- and uppercase, respectively. After we get all the words properly cased, we can use the join array method to make an array of strings into a single large string.

2. Creating the countWords function: In order to get the words, we can split the original string on any occurrence of any of the three delimiters ( " ", "_", and "-"). Fortunately, the split function can take a regular expression as a parameter, which we can use to our benefit. Once we have the words in an array, we just need to count the elements.

3. Creating the towards function: This method can use the same approach as the preceding one. Instead of counting the words, we'll just need to return them. Take note of the return type of this method.

4. Creating the repeat function: Create an array with the required length (using the Array constructor), and set each element to the input value (using the array's fill method). After that, you can use the join method of the array to join the values into a single long string.

5. Creating the isAlpha function: We can design a regular expression that will test this, but we can also split the string into single characters, using the string split method. Once we have the character array, we can use the map function to transform all the characters to lowercase. We can then use the filter method to return only those characters that are not between "a" and "z". If we don't have such characters, then the input only has letters, so we should return true. Otherwise, we should return false.

6. Creating the isBlank function: One way to create such a function is to repeatedly test whether the first character is empty, and if it is, to remove it (a while loop works best for this). That loop will break either on the first non-blank characters or when it runs out of the first elements, that is, when the input is empty. In the first case, the string is not blank, so we should return false; otherwise, we should return true.