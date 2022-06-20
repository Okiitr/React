// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import { useState } from "react";

function App() {

  const [Mode, setMode] = useState('light');

  const toggleMode = () => {
    if (Mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'red';
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
    }
};

  return (
    <>
    <Navbar heading="Oman" about ="About" mode={Mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <Textarea head="Enter Text Here" mode={Mode}/>
    </div>
    </>
  );
}

export default App;
