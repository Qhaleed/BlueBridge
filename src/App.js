import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { DonationPage } from './pages/DonationPages/DonationPage'
import { VolunteerPage } from './pages/VolunteerPages/VolunteerPage'
import { PaymentPage } from './pages/PaymentPages/PaymentPage'
import LandingPage from './pages/LandingPages/LandingPage';

import './App.css';
import DocumentationPage from './pages/DocumentationPage/DocumentationPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/page2" element={<DonationPage />} />
          <Route path="/page3" element={<DocumentationPage />} />
          <Route path="/page5" element={<PaymentPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
