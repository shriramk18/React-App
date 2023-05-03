import React, { useState, useEffect } from 'react';
import './fetch.css';

export function FetchOne() {
    const [people, setPeople] = useState([]);
    const [index, setIndex] = useState(0);
    useEffect(() => { });

    async function getDog() {
        // setIndex(index + 1);

        try {
            // async await (to wait till request is processed
            const response = await fetch('https://reqres.in/api/users/');
            const data = await response.json();
            // console.log(data.data[2],'i am from catch ...' )
            if (index == 6) {
                setIndex(0)
            }
            else {
                setIndex(index + 1)
                setPeople(data.data[index]);
            }

            //   console.log(people);
        } catch (error) {
            console.log('i am from catch ', error);
        }

    }

    return (
        <div className='main'>
            <div className='m2'>
                {/* {people.map} */}
                <img src={people.avatar} />
                <p className='pg'>id :{people.id}</p>
                <p className='pg'>email :{people.email}</p>
                <p className='pg'>first_name :{people.first_name}</p>
                <p className='pg'>last_name :{people.last_name}</p>
            </div>
            <button className='btn' onClick={getDog}>click me</button>
        </div>
    );
}