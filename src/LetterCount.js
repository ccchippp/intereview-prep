import React from 'react'
const { useEffect, useState } = React

var exp = 'Thequickbrownfoxjumpsoverthelazydog'
var expCounts = {}
var maxKey = ''
for(var i = 0; i < exp.length; i++) {
    var key = exp[i]
    if(!expCounts[key]) {
        expCounts[key] = 0
    }
    expCounts[key]++
    if(maxKey == '' || expCounts[key] > expCounts[maxKey]){
        maxKey = key
    }
    return maxKey + ':' + expCounts[maxKey]
}
console.log(maxKey + ':' + expCounts[maxKey])


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
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char]
            maxChar = char
        }
    }
    return maxChar
    console.log(maxChar)
}

export default function LetterCount() {
    return (
        <div>
            <p>{charMap('Thequickbrownfoxjumpsoverthelazydog')}</p>

            {/* <p>{getMax('Thequickbrownfoxjumpsoverthelazydog')}</p> */}
            {/* <p>hi</p> */}
        </div>
    )
}
