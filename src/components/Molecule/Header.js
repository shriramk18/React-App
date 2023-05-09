import React,{useState} from 'react'
import style from './Header.module.css'
import { FaBars } from 'react-icons/fa';

export default function Header() {
    const [show, setshow] = useState(false);

  return (
   <>
      <header>
        <div className={style.logo}>
            <img className={style.img1}src="https://thumbs.dreamstime.com/b/globe-up-logo-world-vector-global-221612871.jpg" alt="Logo"/>
            <span className={style.logoName}>Logo Name</span>
        </div>
        <nav className={style.nav1}>
    
        
            <ul className={style.ul1}>
                <li className={style.li1}><a href="#" className={style.a1}>Home</a></li>
                <li className={style.li1}><a href="#" className={style.a1}>About Us</a></li>
                <li className={style.li1}><a href="#" className={style.a1}>Projects</a></li>
                <li className={style.li1}><a href="#" className={style.a1}>Video</a></li>
                <li className={style.li1}><a href="#" className={style.a1}>Contact</a></li>
                <button>Login</button>
            </ul>
            
        </nav>
    
        <FaBars className={style.bar}size={24} onClick={()=>setshow(!show)}></FaBars>
   
        {
            show?<nav  style={{backgroundColor:"red",display:"flex",flexDirection:"row",alignItems:"center",position:"absolute",marginTop:"200px",marginLeft:"80%"}}>
                 <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Video</a></li>
                <li><a href="#">Contact</a></li>
                <button>Login</button>
            </ul>
            
            </nav>:null
        }
    </header>
   
      <div className={style.hero}>
      <div >
      <h1>Your welcome...</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Learn More</button>
      </div>
         
      <div className={style.hero_img}>
        <img className={style.img2} src="https://images.pexels.com/photos/16415740/pexels-photo-16415740.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="Hero Image" />
      </div>
      </div>
    
   </>
  )
}