import React, { useRef } from 'react'
import './Ur.css'


export default function Ur() {
    const fileRef = useRef(null)
    function handleButton() {
        fileRef.current.click()
    }
    return (
        <div className='container'>
            <div>
                <input
                    type='file'
                    ref={fileRef}
                    id='inp'
                />
                <button className='btn' onClick={handleButton}>Pick the file</button>
            </div>
        </div>
    )
}
