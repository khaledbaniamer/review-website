import Footer from "./layout/footer";
import Navbar from "./layout/nav";
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Index from "./components";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />

    <Routes >
    {/* this is Home */}
    <Route path="/" element={<Index  />} />

      <Route  />
    </Routes>

    <Footer />
    </BrowserRouter>

    </>
  );
}

export default App;
