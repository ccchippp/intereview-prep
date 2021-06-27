import * as React from 'react';
import './App.css';
import axios from 'axios'

const {useState} = React


export default function App() {
  const [counter, setCounter] = useState(0)
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
            <button
              onClick={() => {
                fetchRandomData()}}
            > Fetch Random User </button>
        </div>
    )

}

// would normally be in an api file

const fetchRandomData = () => {

  return axios.get('https://randomuser.me/api')
  .then(res => {
    // handle success
    console.log(res);
    return res
  })
  .catch(err => {
    // handle error
    console.log(err);
  })
}