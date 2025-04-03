import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import DigitalMarket from './DigitalMarket';
import Ecommerce from './Ecommerce';
import Footer from './Footer';
import Home from './Home';
import HospitalManage from './HospitalManage';
import HotelManage from './HotelManage';
import MobileDev from './MobileDev';
import Navbar from './Navbar';
import ResturentErp from './ResturentErp';
import SchoolErpDev from './SchoolErpDev';
import WebDevelopmentPage from './WebDevelopmentPage';
import MissionVisionPage from './MissionVisionPage';
import AwardsPage from './AwardsPage';




function App() {
  return (
    <Router>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/expertise/mobile" element={<MobileDev/>} />
        <Route path="/expertise/school" element={<SchoolErpDev/>} />
        <Route path="/expertise/resturent" element={<ResturentErp />} />
        <Route path="/expertise/hotel" element={<HotelManage/>} />
        <Route path="/expertise/hospital" element={<HospitalManage />} />
        <Route path="/expertise/digital" element={<DigitalMarket />} />
        <Route path="/expertise/ecommerce" element={<Ecommerce />} />
        <Route path="/expertise/web" element={<WebDevelopmentPage />} />
        
      </Routes> */}
      {/* <MissionVisionPage/> */}
      <AwardsPage/>
      <Footer/>
    </Router>
  );
}

export default App
