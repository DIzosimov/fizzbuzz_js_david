# Questions

## Question 1: explain what the following lines of code do
```
global.browser = new BrowserHelpers() 
It provides a way for you to specify and manipulate custom browser information for all browsers in all files

global.expect = chai.expect;
global allows for it to be accessible for all files and components and chai allows for a choice of interface for the developer depending on preference
```

## Question 2: Explain why we are placing let fizzBuzz = new FizzBuzz outside the it block
```
We are first meant to create a describe block that describes the class that we are meant to define and write the tests for, in this case being FizzBuzz. We then create a variable called fizzBuzz and set it equal to a new instance of the FizzBuzz class so that whenever we call on fizzBuzz it creates a new instance of the FizzBuzz class, for our it (test/expect) blocks and evaluates the test.
```

## Question 3: What is the difference between === and == in javascript
```
=== operator compares the value as well as the type of the two inputs in order to evaluate to true, whilst == only requires the inputs to be of the same value but not input necessarily.
```

## Question 4: Why are we moving (number % 5 === 0) to the top?
```
By moving it to the top, we are making sure that this function is made and evaluated before moving further down the function in case a number is divisible by both and thus will return buzz instead of fizz in certain cases when divisible by both, however, this becomes more important once we add % 15 as it will be needed to be evaluated before either 3 or 5 in order to return fizzbuzz rather than fizz or buzz.
```