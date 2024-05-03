import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Airlines from './pages/Airlines';
import CheapFlight from './pages/CheapFlight'; 
import About from './pages/About';
import Contact from './pages/Contact'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';



const App = () => {
  return (
    <>
     <Router > 
       <Routes>
         <Route exact path="/" element={<Home />} />
         <Route path="/airlines" element={<Airlines />} />
         <Route path="/cheapflight" element={<CheapFlight />} /> 
          <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} /> 
       </Routes>
     </Router>
         </>

  );
};

export default App;
