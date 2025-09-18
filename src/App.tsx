import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Parlourly from './components/Parlourly';
import WhyUs from './components/WhyUs';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import BuildByTeam from './components/BuildByTeam';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import ContactUs from './components/ContactUs';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Parlourly />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/build-by-team" element={<BuildByTeam />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
