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
  const [second, setSecond] = useState('00')
  const [minute, setMinute] = useState('00')
  const [isActive, setIsActive] = useState(false)
  const [timer, setTimer] = useState(0)
  const [nextPageNumber, setNextPageNumber] = useState(1)
  const [userInfos, setUserInfos] = useState([])
  const [randomUserDataJSON, setRandomUserDataJSON] = useState('')

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setTimer(timer + 1)
  //   }, 1000)
  // })

  const Timer = () => {
    useEffect(() => {
      let intervalId

      if(isActive) {
        intervalId = setIntervalId(() => {
          const secondCounter = timer % 60
          const minuteCounter = Math.floor(timer / 60)

          const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter
          const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter

          setSecond(computedSecond)
          setMinute(computedMinute)

          setTimer(timer => timer + 1)
        }, 1000)
      }
      return () => clearInterval(intervalId)
    }, [isActive, timer])
  }

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

      <div className="container">
      <div className="time">
        <span className="minute">00</span>
        <span>:</span>
        <span className="second">00</span>
      </div>
      <div className="buttons">
        <button onClick={() => null} className="start">Start</button>
        <button onClick={() => null} className="reset">Reset</button>
      </div>
      </div>

        {/* <p>
          {timer}
        </p> */}

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
