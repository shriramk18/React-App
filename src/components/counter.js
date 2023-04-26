import {useState} from 'react'
// import React from 'react' 
import './counter.css'

export function Counter(){
    const [count,setCount]=useState(0)
    
    function Increase(){
        setCount(count+1)
    }
    function Decrease(){
        if(count>0){
        setCount(count-1)
        }
        else{
            alert("Count Should not decrease below zero")
        }
    }


    return(
        <div className='main'>
            <h1>{count}</h1>
            <button className='btn' onClick={Increase}>Increase</button>
            <button className='btn' onClick={Decrease}>Decrease</button>
        </div>
    )
}