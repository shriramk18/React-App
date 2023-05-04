import React, { useState } from 'react'


export function GenerateOtp() {

    const [num, setNum] = useState('')
    const [msg, setMsg] = useState('')



    function valid() {
        const validateMyNumber = /^[6-9]\d{9}$/.test(num)
        if (!validateMyNumber) {
            setMsg("Please,check your number")
        } else {
            setMsg("Msg sent successfully")
            setMsg(' ')
        }
    }

    async function getOTP() {
        const url='https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP'
        
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mobile: 9673893458 })

        }
        fetch(url,option)
        .then((resp)=>resp.json())
            .then((data) => setNum(data.mobile))
            .catch((error) => console.log(error))
        valid()

    }
    return (
        <div>
            <div>
                <input onChange={(e) => { setNum(e.target.value) }}  type='number'/>
                <button onClick={getOTP}>GET OTP</button>
                <h3>{msg}</h3>
            </div>
        </div>



    )




}