// import logo from './logo.svg';
import './App.css';
import { Invitation } from './Invitation/Invitation';

function App() {

  return (
    <div className="App">
      <Invitation
        subject='Birthday party Invitation'
        email='jaGdish@gmail.com.com'
        name='jaGdish'
        party='birthday party'
        names=' Ritu , Saurabh , Kartik'
        add='Green field Avenue '
      />
    </div>
  );
}

export default App;
