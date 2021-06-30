import * as React from 'react';
import './App.css';
import axios from 'axios'

const {useEffect, useState} = React

const getFullUserName = (userInfo) => {
  const {name: {first, last}} = userInfo
  return `${first} ${last}`
}

function reverseString(str) {
  return str;
}
reverseString("hello");

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
  const [nextPageNumber, setNextPageNumber] = useState(1)
  const [userInfos, setUserInfos] = useState([])
  const [randomUserDataJSON, setRandomUserDataJSON] = useState('')

  const fetchNextUser = () => {
    fetchRandomData(nextPageNumber).then((randomData) => {
      // setRandomUserDataJSON(JSON.stringify(randomData, null, 2) || 'No user data found')
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
