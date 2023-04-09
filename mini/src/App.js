import React from 'react';
import { BrowserRouter, Route, Routes,Switch } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';
import Appbar from './component/Appbar';
function App() {
  return (
    <div className="App">
      <Appbar></Appbar>
      <BrowserRouter>
      <Navbar/>
      <Routes> 
        
      <Route path="/" exact element={<Home/>}> </Route>
      <Route path="/about" element={<About/>}> </Route>
      <Route path="/contuct" element={<Contact/>}> </Route>
      <Route component={Notfound}> </Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
