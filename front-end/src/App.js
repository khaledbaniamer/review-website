import Footer from "./layout/footer";
import Navbar from "./layout/nav";
import SingleProduct from './components/SingleProduct'
import {BrowserRouter , Route , Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />

    <Routes >
      <Route  />
      <Route path="/singleproduct" element={<SingleProduct />} />
    </Routes>

    <Footer />
    </BrowserRouter>

    </>
  );
}

export default App;
