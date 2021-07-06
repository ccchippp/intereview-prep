import React from 'react'

export default function algo() {
    let solve = (n) => {
        let num = n.toString()
        let numArray = num.split('')

        for (let i = 0; i < numArray.length;) {
            if (numArray[i] == 3) {
                i++
            } else if (numArray[i] != 3) {
            numArray[i] = 3
            let output = numArray.join('')
            let int = parseInt(output)
            return int
            } else {
                return n
            }
        }
        return n
    }
        }
    return (
        <div>
            
        </div>
    )
}
