import React from 'react'
const { useEffect, useState } = React

const string = 'The quick brown fox jumps over the lazy dog.'

function charMap(str) {
    const charMap = {}
    let max = 0
    let maxChar = ''

    // create a character map
    for (let char of str) {
        if (charMap[char]) {
            // increment the character's value if the character existed in the map
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    // find the most commonly used character 
}

export default function LetterCount() {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <p>{letterCounter(string)}</p>
        </div>
    )
}
