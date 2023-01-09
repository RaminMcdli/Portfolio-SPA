import algoritmlogo from "./algoritm.png"
import './App.css';
import About from './About';
import ContactUs from './ContactUs';
import GeneralInformation from './GeneralInformation';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <div className="logo">
          <img src={algoritmlogo} alt="algo-logo" />
        </div>
        <div>
          <ul className="nav-bar">
            <li> <Link to="/aboutUs" className='Logo'> Haqqımızda</Link></li>
            <li><Link to="/aboutCompany" className='Logo'> İş Nümunələri</Link></li>
            <li><Link to="/contactUs" className='Logo'> Əlaqə məlumatları</Link></li>
          </ul>
        </div>
        <hr />
        <Routes>
          <Route path="/aboutUs" element={<GeneralInformation />} />
          <Route path="/aboutCompany" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
