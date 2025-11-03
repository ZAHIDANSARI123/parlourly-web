import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Navbar from './components/Navbar';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Home from './components/Home';
import WhyUs from './components/WhyUs';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import BuildByTeam from './components/BuildByTeam';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import ContactUs from './components/ContactUs';


function App() {
  const [gender, setGender] = useState<'female' | 'male'>('female');

  return (
    <>
      <Navbar gender={gender} />
      <Routes>
        <Route path="/" element={<Home gender={gender} setGender={setGender} />} />
        <Route path="/services" element={<Services gender={gender} />} />
        <Route path="/how-it-works" element={<HowItWorks gender={gender} />} />
        <Route path="/why-us" element={<WhyUs gender={gender} />} />
        <Route path="/faqs" element={<FAQs gender={gender} />} />
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
