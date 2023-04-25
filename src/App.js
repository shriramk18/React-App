import { Fragment } from 'react';
import './App.css';
import { ProfileCard } from './components/profile card/profileCard';

function App(props) {

  function register(input) {
    alert('Raju')
  }

  function login() {
    alert('Shyam')
  }



  return (

    <Fragment>
      <div className='div1'>
      <ProfileCard
        name='Babubhaiya'
        designation='FrontEnd'
        jobDiscription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet odio ut enim auctor, at aliquam dolor vestibulum. Suspendisse potenti. Cras consectetur aliquet neque fringilla lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sit amet erat ac ligula aliquet elementum.'
        image='https://resize.indiatvnews.com/en/resize/newbucket/730_-/2017/03/meadow-walker-rsquo-s-photos-1-1489921648-1490188639.jpg' />
      <ProfileCard
        name='Raju'
        designation='Software enginer'
        jobDiscription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet odio ut enim auctor, at aliquam dolor vestibulum. Suspendisse potenti. Cras consectetur aliquet neque fringilla lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sit amet erat ac ligula aliquet elementum.'
        image='https://i.pinimg.com/originals/dd/4c/bb/dd4cbb7af5b14e2a4e3ddab930b12ada.jpg'
        onClickFunction={register}
      />
      <ProfileCard
       name='Shyam'
        designation='Software Developer'
        jobDiscription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet odio ut enim auctor, at aliquam dolor vestibulum. Suspendisse potenti. Cras consectetur aliquet neque fringilla lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sit amet erat ac ligula aliquet elementum.'
        image='https://e0.pxfuel.com/wallpapers/366/988/desktop-wallpaper-chris-hemsworth-chris-actor-hollywood-thumbnail.jpg' 
        onClickFunction={login} />
</div>
</Fragment>

  );
}

export default App;