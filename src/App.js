import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Reviews from './components/Reviews'
import Tours from './components/Tours'


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navigation className="nav_bar"/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tours' element={<Tours />} />
          <Route path='/about' element={<About />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
