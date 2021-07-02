import React from 'react'
const { useEffect, useState } = React

function charMax(str) {
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
    }
    return 'The character ' + maxKey + ' occurs ' + expCounts[maxKey] + ' times.'
    console.log(maxKey + ':' + expCounts[maxKey])
}

const charMaxx = (str) => {
    var string = 'Thequickbrownfoxjumpsoverthelazydog'
    var charCount = {}
    var maxChar = ''

    for (var i = 0; i < string.length; i++) {
        var key = string[i]
        if (!charCount[key]) {
            charCount[key] = 0
        }
        charCount[key]++
        if (maxChar == '' || charCount[key] > charCount[maxChar]) {
            maxChar = key
        }
    }
    console.log('The character ' + maxChar + ' is the most common.')
    console.log('It occurs ' + charCount[maxChar] + ' times in the given string.')
    return ['The character ' + maxChar + ' is the most common.', <br/>,
    'It occurs ' + charCount[maxChar] + ' times in the given string.']
}


// function charMap(str) {
//     const charMap = {}
//     let max = 0
//     let maxChar = ''

//     // create a character map
//     for (let char of str) {
//         if (charMap[char]) {
//             // increment the character's value if the character existed in the map
//             charMap[char]++
//         } else {
//             charMap[char] = 1
//         }
//     }
//     // find the most commonly used character
//     for (let char in charMap) {
//         if (charMap[char] > max) {
//             max = charMap[char]
//             maxChar = char
//         }
//     }
//     return maxChar
//     console.log(maxChar)
// }

export default function LetterCount() {
    return (
        <div>
            {/* <p>{charMax('Thequickbrownfoxjumpsoverthelazydog')}</p> */}
            <p>{charMaxx('Thequickbrownfoxjumpsoverthelazydog')}</p>

        </div>
    )
}
