import Footer from "./layout/footer";
import Navbar from "./layout/nav";
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />

    <Routes >
      <Route path="contact" element={<Contact />}/>
      <Route path="about" element={<About />}/>
    </Routes>

    <Footer />
    </BrowserRouter>

    </>
  );
}

export default App;
