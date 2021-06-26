import * as React from 'react';
import './App.css';

const {useState} = React

export default function App() {
  const [counter, setCounter] = useState(0)
    return (
        <div className="App">
            <h1>Interview Practice</h1>
            <p>
              {counter}
            </p>
            <button> + 1 </button>
        </div>
    )

}