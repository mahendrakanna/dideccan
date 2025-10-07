import Banner from '../components/Banner';
import FeatureSection from '../components/FeatureSection';
import Footer from '../components/Footer';
import GetStartedSection from '../components/GetStartedSection';
import Navbar from '../components/Navbar';
import Courses from '../components/Courses';
import Slide from '../components/Slide';
import ClientsSection from '../components/ClientsSection';
import Contact from '../components/Contact';
import BackToTop from '../components/BackToTop';
import StudentBook from '../Pages/StudentBook';  
import ScrollToTop from '../Pages/ScrollToTop'; 
import HappyRide from '../Pages/HappyRide';
import ServicesDropdown from '../components/Navbar/ServicesDropdown';
import AboutPanel from '../components/Navbar/AboutPanel';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BusinessGuider from '../Pages/BusinessGuider';
import FAQ from '../Pages/FAQ';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import TermsConditions from '../Pages/TermsConditions';
function Routers() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop /> 
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Slide />
              <FeatureSection />
              <Courses />
              <ClientsSection />
              <GetStartedSection />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/StudentBook" element={<StudentBook />} />
        <Route path="/HappyRide" element={<HappyRide />} />
         <Route path="/BusinessGuider" element={<BusinessGuider />} />
         <Route path="/FAQ" element={<FAQ />} />
         <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
         <Route path="/TermsConditions" element={<TermsConditions />} />
          
           <Route path="/contactus" element={<Contact />} />
           <Route path="/Services" element={<ServicesDropdown />} />
           <Route path="/About" element={<AboutPanel/>} />
           
           

      </Routes>
      
      <Footer />
      <BackToTop />
    </Router>
  );
}

export default Routers;


