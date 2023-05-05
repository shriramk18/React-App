import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './AxiosImg.css'

export function ImageData() {

    const [img, setImg] = useState('')

    async function handleClick() {

        await axios.get('https://dog.ceo/api/breeds/image/random')
            .then((resp) => setImg(resp.data.message))
            .catch((error) => console.log(error))
    }
    useEffect(() => {
        handleClick()
    }, [])
    return (
        <div className='container'>
            <img src={img} className='img'/>
            <button className='btn' onClick={handleClick}>Click to Change</button>
        </div>
    )

}

