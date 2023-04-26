import { Fragment, useState } from 'react'
import './ChangeName.css'


export function ChangeName() {
    const [name, setName] = useState('')
    const [name1, setName1] = useState('')
    function onClickChange(event) {
        setName1(event.target.value)
    }
    function change() {
        setName(name1)
    }

    return (
        <Fragment className='main'>
            <div className='div'>
                <input className='inp' placeholder='Add your name' onChange={onClickChange}></input><br />
                <button className='btn' onClick={change}>Submit</button>
                <h2 className='heading'>Hi my name is : {name}</h2>
            </div>
        </Fragment>

    )
}