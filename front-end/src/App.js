import Footer from "./layout/footer";
import Navbar from "./layout/nav";
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Business from "./components/business_grid";
import Business_profile from "./components/business_profile";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />

    <Routes >
      <Route  path="business" element={<Business />} />
      <Route  path="business_profile" element={<Business_profile />} />
    </Routes >

    <Footer />
    </BrowserRouter>

    </>
  );
}

export default App;
