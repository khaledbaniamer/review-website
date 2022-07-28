import Footer from "./layout/footer";
import Navbar from "./layout/nav";
import SingleProduct from './components/SingleProduct'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />

    <Routes >
      <Route  />
      <Route path="/singleproduct" element={<SingleProduct />} />
      <Route path="contact" element={<Contact />}/>
      <Route path="about" element={<About />}/>
      <Route path="login" element={<Login />}/>
      <Route path="register" element={<Register />}/>
    </Routes>

    <Footer />
    </BrowserRouter>

    </>
  );
}

export default App;
