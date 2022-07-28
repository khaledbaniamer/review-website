import Footer from "./layout/footer";
import Navbar from "./layout/nav";
import {BrowserRouter , Route , Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />

    <Routes >
      <Route  />
    </Routes>

    <Footer />
    </BrowserRouter>

    </>
  );
}

export default App;
