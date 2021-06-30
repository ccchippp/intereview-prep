import * as React from 'react';
import './App.css';
import axios from 'axios'

const {useEffect, useState} = React

const getFullUserName = (userInfo) => {
  const {name: {first, last}} = userInfo
  return `${first} ${last}`
}

let string = 'hello'
let foxString = 'The quick brown fox jumps over the lazy dog.'
function reverseString(str) {
    var splitStr = str.split('')
    var reverseArray = splitStr.reverse()
    var backwardsString = reverseArray.join('')
    console.log(splitStr)
    console.log(reverseArray)
    console.log(backwardsString)
  return backwardsString
}

const originalString = (string) => {
  return string
}

// would normally be in an api file
const fetchRandomData = (pageNumber: number) => {
  return axios
  .get(`https://randomuser.me/api?=${pageNumber}`)
  .then(({ data }) => {
    // handle success
    console.log(data);
    return data
  })
  .catch(err => {
    // handle error
    console.log(err);
  })
}

export default function App() {
  const [counter, setCounter] = useState(0)
  const [timer, setTimer] = useState(0)
  const [nextPageNumber, setNextPageNumber] = useState(1)
  const [userInfos, setUserInfos] = useState([])
  const [randomUserDataJSON, setRandomUserDataJSON] = useState('')

  const fetchNextUser = () => {
    fetchRandomData(nextPageNumber).then((randomData) => {
      const newUserInfos = [
        ...userInfos,
        ...randomData.results,
      ]
      setUserInfos(newUserInfos)
      setNextPageNumber(randomData.info.page + 1)
    })
  }

  useEffect(() => {
    fetchNextUser()
  }, [])
    
  return (
    <div className="App">
        <h1>Interview Practice</h1>
        <p>
          {counter}
        </p>
        <button
          onClick={() => setCounter(counter - 1)}
        > - 1 </button>
        <button
          onClick={() => setCounter(counter + 1)}
        > + 1 </button>


        <p>{originalString(string)}</p>
        <p>{reverseString(string)}</p>

        <p>{originalString(foxString)}</p>
        <p>{reverseString(foxString)}</p>


        {
          userInfos.map((userInfo, idx) => (
            <div key={idx}>
            <img src={userInfo.picture.thumbnail} alt=""/>
            <p>{getFullUserName(userInfo)}</p>
            </div>
          ))
        }
        <button
          onClick={() => {
            fetchNextUser()
            }}
        >
          Next User
        </button>
    </div>
  )

}
