import Footer from "./layout/footer";
import Navbar from "./layout/nav";
import SingleProduct from './components/SingleProduct'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Business from "./components/business_grid";
import Business_profile from "./components/business_profile";
import Index from "./components";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import UserProfile from "./components/userProfile";
import BussnisRegister from "./components/bussnisRegister";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />

    <Routes >
    {/* this is Home */}
    <Route path="/" element={<Index  />} />

      <Route  />
      <Route path="/singleproduct" element={<SingleProduct />} />
      <Route path="contact" element={<Contact />}/>
      <Route path="about" element={<About />}/>
      <Route path="login" element={<Login />}/>
      <Route path="register" element={<Register />}/>
      <Route path="bussnisRegister" element={<BussnisRegister />}/>
      <Route path="business" element={<Business />}/>
      <Route path="userprofile" element={<UserProfile />}/>

      <Route path="business_profile" element={<Business_profile />}/>
    </Routes>

    <Footer />
    </BrowserRouter>

    </>
  );
}

export default App;
