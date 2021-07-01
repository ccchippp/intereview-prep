import React from 'react'

export default function Fizzbuzz() {
    let i
    for (i=1; i<=100; i++)
    {
        // if number is divisible by 3 and 5
        // print Fizzbuzz in place of the number
        if (i%15 == 0)
        document.write('FizzBuzz' + ' ')
        // if number is divisible by 5
        // print Buzz in place of the number
        else if (i%5 == 0)
        document.write('Buzz' + ' ')
        // if number is divisible by 3
        // print Fizz instead of the number
        else if (i%3 == 0)
        document.write('Fizz' + ' ')
        // print the number
        else
        document.write(i + ' ')
    }
    return (
        <div>
            
        </div>
    )
}
