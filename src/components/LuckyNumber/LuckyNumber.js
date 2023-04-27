import './LuckyNumber.css'
import { useState } from 'react'
import React from 'react'


let LuckyNumber = Math.round(Math.random() * 10)
export function CheckNum() {

    const [num, setNum] = useState()
    const [count, setCount] = useState(1)

    function handleChange(event) {
        setNum(event.target.value)
    }

    function guess() {

        setCount(count + 1)

        const guessNum = num

        if (guessNum < LuckyNumber) {
            alert("You guessed smaller number")

        }
        if (guessNum > LuckyNumber) {
            alert("You guessed larger number")
        }
        if (guessNum == LuckyNumber) {
            alert("Congratulation's ,You guessed right number in" + { count } + "attempt")
        }
    }



    return (
        <div className="container">
            <input className='inp' placeholder="Guess lucky number" type="number" onChange={handleChange} />
            <button className='btn' onClick={guess}>Match Number</button>
        </div>
    )
}