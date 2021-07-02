import React from 'react'
const { useEffect, useState } = React

const charMax = (str) => {
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
    return ['The character ' + maxChar + ' is the most common.', <br/>,
    'It occurs ' + charCount[maxChar] + ' times in the given string.']
}

export default function LetterCount() {
    return (
        <div>
            <p>{charMax('Thequickbrownfoxjumpsoverthelazydog')}</p>
        </div>
    )
}
