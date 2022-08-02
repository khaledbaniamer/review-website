
import Sidebar from "./components/layout/sidebar";
import Footer from "./components/layout/footer";
import Home from "./components/home";
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Products from "./components/products";
import Users from "./components/users";
import Business from "./components/business";
import Categories from "./components/categories";
import Singlecategory from "./components/singlecategories";
import Comments from "./components/comments";
function App() {
  return (
    <>
    
    
   
    <BrowserRouter>
    <Sidebar />

    <Routes >
    {/* this is Home */}
    <Route path="/" element={<Home />} />

    {/* this is Bussines form for add */}
    {/* <Route path="add" element={<Bussines_addForm />}/> */}

      <Route  />
      <Route path="/products" element={<Products />} />
      <Route path="/users" element={<Users />} />
      <Route path="/business" element={<Business />} />
      <Route path="/comments" element={<Comments />} />
      <Route path="/singlecategory/:id" element={<Singlecategory />} />

      <Route path="/categories" element={<Categories />} />

      {/* <Route path="contact" element={<Contact />}/>
      <Route path="about" element={<About />}/>
      <Route path="login" element={<Login />}/>
      <Route path="register" element={<Register />}/>
      <Route path="bussnisRegister" element={<BussnisRegister />}/>
      <Route path="business" element={<Business />}/>

      <Route path="userprofile" element={<UserProfile />}/>

      <Route path="business_profile" element={<Business_profile />}/>
      <Route path="products" element={<Products />}/> */}
    </Routes>

    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
