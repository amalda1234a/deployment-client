import { useState } from 'react'
import {Route,Routes} from "react-router-dom";
import Home  from './Home';
import About from './About';


function App() {
 
  return (
    <>
     <Routes>
     <Route path="/" element={<Home />} /> 
     <Route path="/About" element={<About/>} /> 

     </Routes>
        
    </>
  )
}

export default App
