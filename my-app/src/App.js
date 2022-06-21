// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);         /* define state initial value is null*/

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#057a87";
      showAlert("Dark mode has been enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
    }
  };

  return (
    <>   {/* used to make a single component in app.js */}
      <Navbar heading="TextUtills" /* about="About"*/ mode={mode}  toggleMode={toggleMode}  />  
      <Alert alert={alert} />
      <div className="container my-3">
        <Textarea  showAlert={showAlert}  heading="Enter the text to Analyze below"   mode={mode} />
      </div>
    </>
  );
}

export default App;
