require('../spec.helper')
let fizzBuzz = new FizzBuzz

describe('Fizz Buzz', () => {
    fizzBuzz
})

    it('returns a number if no game rules are met', () => {
        expect(fizzBuzz.check(1)).to.eql(1)
    })

    it('returns Fizz if number is divisible by 3', () => {
        expect(fizzBuzz.check(3)).to.eql('Fizz')
    })

    it('returns Buzz if number is divisible by 5', () => {
        expect(fizzBuzz.check(5)).to.eql('Buzz')
    })

    it('returns FizzBuzz if a number is divisible by 15', () => {
        expect(fizzBuzz.check(15)).to.eql('FizzBuzz')
    })