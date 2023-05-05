import axios from 'axios'


export function GenerateOTP() {

    const [num, setNum] = useState('')
    const [msg, setMsg] = useState('')

    function getOTP() {
        // const url = 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP'
        // const option = {
        //     method: 'POST',
        //     headers: {
        //         'Content_Type': 'application/json',
        //     },
        //     body: JSON.stringify({ mobile: 9673893458 }),
        // }

        axios.get('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',
        {
            mobile:`${num}`
        })
        .then((data)=>setNum(data.num))
        .catch((error) => console.log(error))

    }
    return (
        <div>
            <div>
                <input onchange={(e)=>{setNum(e.target.value)}}/>
                <button onClick={getOTP} >GET OTP</button>
            </div>
        </div>

    )
}