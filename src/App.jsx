import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
// AboutSection from "./About us/About";
import "./App.css";
import Nav from "./navbar/Nav";
import Footer from "./footer/Footer";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
