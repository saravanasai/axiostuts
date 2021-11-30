import { Suspense, useState } from 'react';
import './App.css';
import CustomerList from './components/CustomerList/CustomerList';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from './Pages/Login/Login';
import Deposite from './Pages/Deposite/Deposite';
function App() {

  

  return (
    <div className="App">
      <Suspense fallback={<h2>Loading.....</h2>}> 
       <Router >
       <NavBar  />
         <Routes>
           <Route exact path="/login"element={<Login/>} />
           <Route  path="/Deposite/:id"element={<Deposite />} />
           <Route   path="/" element={<CustomerList />} />
         </Routes>
       </Router>  
      </Suspense>    
    </div>
  );
}

export default App;
