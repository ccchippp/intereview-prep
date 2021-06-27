import * as React from 'react';
import './App.css';
import axios from 'axios'

const {useEffect, useState} = React


export default function App() {
  const [counter, setCounter] = useState(0)
  const [randomUserDataJSON, setRandomUserDataJSON] = useState('')

  useEffect(() => {
    const randomData = await fetchRandomData()
    setRandomUserDataJSON(randomData)
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
        {/* <button
          onClick={() => {
            fetchRandomData()}}
        > Fetch Random User </button> */}
        <div className="random_user_data">

        </div>
    </div>
  )

}

// would normally be in an api file
const fetchRandomData = () => {
  return axios.get('https://randomuser.me/api')
  .then(({data}) => {
    // handle success
    console.log(data);
    return JSON.stringify(data)
  })
  .catch(err => {
    // handle error
    console.log(err);
  })
}