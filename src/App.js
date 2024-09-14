
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  Routes ,Route 
} from "react-router-dom";

function App() {
    const [mode, setMode] = useState('light');

    const [alert, setAlert] = useState(null);


    const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      });
      setTimeout(() => {
        setAlert(null);
      },1500);
}

const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = 'grey';
    showAlert("Dark mode has been enabled","success");
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","success");
  }
}

  //   const routers = createBrowserRouter([
  //   {
  //     path: "/",
  //     element:  <TextForm showAlert={showAlert}/>
  //   },
  //   {
  //     path: "/about",
  //     element:  <About showAlert={showAlert}/>,
  //   }
  // ])

  
  return (
<>
    <Navbar title="Textutils" toggleMode={toggleMode} mode={mode} />
    <Alert alert={alert} toggleMode={toggleMode} mode={mode} />
     <Routes>
      {/* /user -->component 1
      /user -->component 2 */}
      <Route exact path="/" element={<TextForm showAlert={showAlert} />} />
      <Route  path="/about" element={<About />} />
      {/* <RouterProvider router={routers} /> */}
     </Routes>
</>
  );
}
export default App;
  