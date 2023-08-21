import './App.css';
import Login from './Components/Login';
import { Routes, Route } from 'react-router-dom';
import BankFormDetails from './Components/Bankform/BankFormDetails';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/bankFormDetails' element={<BankFormDetails />} />
      </Routes>
    </>
  );
}

export default App;
