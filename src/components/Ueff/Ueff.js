import React, { useEffect, useState,useRef } from 'react'

export default function Ueff() {

  const [img, setImg] = useState('');
  const imgRef = useRef(null);
  const imgUrl = ["https://images.pexels.com/photos/16511744/pexels-photo-16511744.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load", "https://images.pexels.com/photos/13915442/pexels-photo-13915442.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"];

  useEffect(() => {
    setImg(imgUrl[0])
  }, [])

  const changeImg = () => {
    const currentImg = imgRef.current.src;
    const currentIndex = imgUrl.indexOf(currentImg);
    const nextIndex = (currentIndex + 1) % imgUrl.length;
    setImg(imgUrl[nextIndex])
  }

  return (
    <div>
      <img src={img} ref={imgRef} />
      <button onClick={changeImg}>Click to change</button>
    </div>
  )
}
