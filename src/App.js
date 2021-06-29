import * as React from 'react';
import './App.css';
import axios from 'axios'

const {useEffect, useState} = React

const getFullUserName = (userInfo) => {
  const {name: {first, last}} = userInfo
  return `${first} ${last}`
}

// would normally be in an api file
const fetchRandomData = (pageNumber: number = 1) => {
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

  useEffect(() => {
    fetchRandomData(nextPageNumber).then(randomData => {
      setRandomUserDataJSON(JSON.stringify(randomData, null, 2) || 'No user data found')
      setUserInfos(randomData.results)
    })
  }, [])
    
  return (
    <div className="App">
        <h1>Interview Practice</h1>
        <p>
          {counter}
        </p>
        <button
          onClick={() => setCounter(counter + 1)}
        > + 1 </button>
        <button
          onClick={() => setCounter(counter - 1)}
        > - 1 </button>
        {/* <div className="random_user_data">
          <pre>
            {randomUserDataJSON}
          </pre>
        </div> */}
        {
          userInfos.map((userInfo, idx) => (
            <div key={idx}>
            <img src={userInfo.picture.thumbnail} alt=""/>
            <p>{getFullUserName(userInfo)}</p>
            </div>
          ))
        }
    </div>
  )

}
