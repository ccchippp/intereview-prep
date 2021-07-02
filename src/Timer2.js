import React, { useState, useEffect } from 'react'

const Timer2 = () => {
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

                const computedSeconds = String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter
                const computedMinutes = String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter

                setSecond(computedSeconds)
                setMinute(computedMinutes)

                setTimer(timer => timer + 1)
            }, 1000)
        }
        return () => clearInterval(intervalId)
    }, [isActive, timer])

    return (
        <div>
            <h3>React Stopwatch</h3>
            <span>{minute}</span>
            <span>:</span>
            <span>{second}</span>
            <br/>
            <button onClick={() => setIsActive(!isActive)}>
                {isActive? 'Pause' : "Start"}
                </button>
                <button onClick={() => stopTimer()}>Reset</button>
        </div>
    )
}

export default Timer2
