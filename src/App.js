import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { DonationPage } from './pages/DonationPages/DonationPage'

import { PaymentPage } from './pages/PaymentPages/PaymentPage'
import LandingPage from './pages/LandingPages/LandingPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/page2" element={<DonationPage />} />
          <Route path="/page3" element={<PaymentPage />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
