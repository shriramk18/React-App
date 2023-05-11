import React from 'react'
import styles from './profileCard.module.css'

export default function Card(){
    const Array=[{
        img:'https://images.pexels.com/photos/13446290/pexels-photo-13446290.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        Name:'abc',
        role:"Software engg",
        exp:'2yrs'
    },
    {
        img:'https://images.pexels.com/photos/14960025/pexels-photo-14960025.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        Name:'abc',
        role:"Frontend developer",
        exp:'2yrs'
    },
    {
        img:'https://images.pexels.com/photos/15658170/pexels-photo-15658170.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        Name:'abc',
        role:"Backend developer",
        exp:'2yrs'
    },
    {
        img:'https://images.pexels.com/photos/12303622/pexels-photo-12303622.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        Name:'abc',
        role:"software engg",
        exp:'2yrs'
    },
    {
        img:'https://images.pexels.com/photos/7116676/pexels-photo-7116676.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        Name:'abc',
        role:"software engg",
        exp:'2yrs'
    }


]


    return(
        <div className={styles.container}>
            {Array.map((data)=>(
                <div className={styles.card}>
                    <img src={data.img} className={styles.img}/>
                    <p className={styles.Name}>{data.Name}</p>
                    <p className={styles.role}>{data.role}</p>
                    <p className={styles.exp}>{data.exp}</p>
                </div>
            ))}
        </div>
    )

}