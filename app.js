import logo from './logo.svg';
import './App.css';
import Home from './Pages/home';
import Work from './Pages/work';
import About from './Pages/about';
import Contact from './Pages/contact';
import Barclays from './Pages/Barclays';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  
  return (
    <Router>
      
    <Routes>
      <Route exact path="" element={<Barclays />} />
      {/* <Route exact path="/work" element={<Work />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} /> */}
    </Routes>
  
</Router>
     
  );
}

export default App;
