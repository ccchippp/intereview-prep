import React, { useEffect, useState } from 'react'
import './Timer.css'

const Timer = () => {
    const [timer, setTimer] = useState(0)
    const [second, setSecond] = useState('00')
    const [minute, setMinute] = useState('00')
    const [isActive, setIsActive] = useState(false)
    
    function stopTimer() {
      setIsActive(false)
      setTimer(0)
      setSecond('00')
      setMinute('00')
    }
    useEffect(() => {
      let intervalId

      if (isActive) {
        intervalId = setInterval(() => {
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
  
return (
    <div className="container">
    <div className="time">
      <span className="minute">{minute}</span>
      <span>:</span>
      <span className="second">{second}</span>
    </div>
    <div className="buttons">
      <button onClick={() => setIsActive(!isActive)} className="start">
        {isActive ? 'Pause': 'Start'}
      </button>
      <button onClick={() => stopTimer()} className="reset">Reset</button>
    </div>
  </div>
)
}
  export default Timer