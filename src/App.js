import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import DetailsSection from './Components/DetailsSection';
import { Routes, Route } from 'react-router-dom';
import NavbarSectionNew from './Components/NavbarSectionNew';
import Register from './Components/Register';
import BankFormDetails from './Components/Bankform/BankFormDetails';


function App() {
  return (
    <>
      <NavbarSectionNew/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/details' element={<DetailsSection/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/bankFormDetails' element={<BankFormDetails/>}/>
      </Routes>  
        
    </>
  );
}

export default App;
