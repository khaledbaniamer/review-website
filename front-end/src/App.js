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
import Products from "./components/products";
import Bussines_addForm from "./components/Bussines_addForm";
import BusinessCategory from "./components/business_category";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />

    <Routes >
    {/* this is Home */}
    <Route path="/" element={<Index  />} />

    {/* this is Bussines form for add */}
    <Route path="add" element={<Bussines_addForm />}/>

      <Route  />
      <Route path="/singleproduct/:id" element={<SingleProduct />} />
      <Route path="contact" element={<Contact />}/>
      <Route path="about" element={<About />}/>
      <Route path="login" element={<Login />}/>
      <Route path="register" element={<Register />}/>
      <Route path="bussnisRegister" element={<BussnisRegister />}/>
      <Route path="business" element={<Business />}/>
      <Route path="business/:id" element={<BusinessCategory />}/>

      {<Route path="/userprofile/:id" element={localStorage.getItem('user-info') ?<UserProfile /> : <Login />}/>}

      <Route path="business_profile/:id" element={<Business_profile />}/>
      <Route path="products/:id" element={<Products />}/>
    </Routes>

    <Footer />
    </BrowserRouter>

    </>
  );
}

export default App;
