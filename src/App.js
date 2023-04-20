
import './App.css';
// import { Fragment } from 'react';
import  {Button} from './components/button';
import {ReactBenifits} from './components/reactBenifits';
import { ReactLogo } from './components/reactLogo';

function App() {
  return (
    <div className="App">
      <ReactLogo/>
      <ReactBenifits/>
      <Button/>
    </div>
  );
}

export default App;
