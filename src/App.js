import './App.css';
import Alert from './Components/TextUtils/Alert';
// import About from './Components/TextUtils/About';
import Navbar from "./Components/TextUtils/Navbar"
import TextForm from './Components/TextUtils/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() =>{
      setAlert(null)
    },1200)
  }
  

  const toggleMode = () =>{
    if (mode==='light'){
      setMode('dark')
      document.getElementsByTagName('body')[0].style.backgroundColor = "#292e48"
      showAlert("Dark mode has been Enabled", "success")
    }
    else {
      setMode('light')
      document.getElementsByTagName('body')[0].style.backgroundColor = "white"
      showAlert("Light mode has been Enabled", "success")
    }
  }
  return (
    <div>
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} about= "About TextUtils"/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      {/* <About /> */}
      <TextForm heading= "Enter the text to Analyze" mode={mode} showAlert={showAlert}/>
      
      
      
      </div>
    </div>
  );
}

export default App;
