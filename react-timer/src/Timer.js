import React, { useState } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0)
    const [isActive, setIsActive] = useState(false)
    return (
        <div className = "app">
            <div className = "time">
              {seconds}s
            </div>
            <div className = "row">
                <button className = "button-primary">
                  Start
                </button>
                <button className = "button-secondary">
                  Reset
                </button>
            </div>
        </div>
    )
}

export default Timer