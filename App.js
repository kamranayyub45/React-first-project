
import './App.css';
import React  from 'react';

import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import Home from './componets/Home';
import Blogabout from './componets/Blogabout'
import Navbar from './componets/Navbar';

function App() {
  return (
    <div className="App">
    

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/Blogabout" element={<Blogabout /> }/> 
          <Route path='/*' element={<Navigate to='/'/>}/> 

          
        </Routes>
       
      </BrowserRouter>
      
      
      
      
    </div>
  );
}

export default App;
