import logo from './logo.svg';
import './App.css';
import Signup from './singup'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>

        <Route  path='/' element={<Signup/>}  />
        {/* <Route  path='/login' element={<Login/>}  /> */}




      </Routes>
  );
}

export default App;
