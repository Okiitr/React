// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";

function App() {
  return (
    <>
    <Navbar heading="Oman" about ="About"/>
    <div className="container my-3">
    <Textarea head="Enter Text Here"/>
    </div>
    </>
  );
}

export default App;
