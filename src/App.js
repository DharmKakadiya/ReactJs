import { useState } from 'react';
import './App.css';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import { Alert } from 'bootstrap';
import Alert from './components/Alert';
function App() {

  const[mode,setmode]=useState("dark");
  document.body.style.backgroundColor='grey';
  const[msg,setMsg]=useState("black is Enabled ");

  const toggleMode=()=>{
      if(mode==="dark")
      {
        setmode("light");
        document.body.style.backgroundColor='grey';
        setMsg("white is Enabled");
        
      }
      else
      {
          setmode("dark");
          document.body.style.backgroundColor='dark';
          setMsg("black is Enabled");
      }
  }
  return (
    <>  
    <BrowserRouter>
    
        <Navbar title="Textutil2" about="about text" mode={mode} toggleMode={toggleMode}/> 
        
              <div className="container">
                <Alert msg={msg} mode={mode}/>
              </div>
              <Routes> 
              <Route path="/home" element={
                <TextForm heading="Enter Text Below" mode={mode}/> 
                } />
                <Route path="/about" element={ 
                <About  />} />
              </Routes>
             

    
    </BrowserRouter>
    
    </>
  );
}

export default App;
