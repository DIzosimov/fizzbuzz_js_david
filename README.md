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
