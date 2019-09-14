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

## Question 5: Explain the difference between a unit and feature test
```
From what I understand, a feature test tests the larger features and their functionality as a whole and are comprised by multiple units or components. Unit tests test these components or units on an individual basis to see if that specific function or component works properly.
```

## Question 6: Explain what this following code does
```
describe('User can input a value and get FizzBuzz results', () => {
    before(async () => {
        await  browser.init()
        await  browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await  browser.page.reload();
    })

    after(async ()=> {
        await  browser.close();
    })
})
```
```
This code creates an asynchronous function from the describe block that describes the test.
Firstly, before the code is executed, an async funciton is created that waits for browser initialization or opening and then visits a static localhost for the test.
Before the next test is evaluated with new values, it reloads the browser page, and then after the test is executed, it closes the page. All of it done asynchronously,meaning that they are executed momentarily after each other in order to reduce wait time for each test and multiple functions can be executed at the same time.
```

## Question 7: Explain what expectations in the context of testing are
```
Expectations are created in test blocks, with one expectation per block (from what I know) that sets an expectation on the test of what we want to happen when a code block that is specified within the test is executed and give the expected output. 
```

## Question 8: Write a line to explain what is happening in this code
```
<script src="js/fizzbuzz.js"></script>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            let button = document.getElementById('button')
            let displayDiv = document.getElementById('display_answer')
            button.addEventListener('click', () =>{
                let value = document.getElementById('value').value
                let fizzBuzz = new FizzBuzz
                let result = fizzBuzz.check(value)
                displayDiv.innerHTML = result;
            })
        })
    </script>
```
```
In this code, we create an EventListener for the DOM that listens for when we click the button and displays an answer depending on the input.
```

## Question 9: What is a CDN?
```
A CDN is comprised of multiple servers that allows for you to use its content without the need of downloading it via its servers.
```