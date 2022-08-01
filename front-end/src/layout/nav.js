import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = ()=>{

    function refreshPage() {
      window.location.reload(false);
    }

    function logOut() {
    localStorage.clear();
    refreshPage();
    }

    return(
        <>
<header className="header_area">
    <div className="main_menu">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light w-100">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
       
          <div className="collapse navbar-collapse offset w-100" id="navbarSupportedContent">
            <div className="row w-100 mr-0">
              <div className="col-lg-8 pr-0">
                <ul className="nav navbar-nav center_nav pull-right">
                <li className="nav-item mt-3">
                  <div class="logo-4">
                    <a href="/">
                      <h3 title="Home"> REV</h3>
                    </a>
                  </div>
                </li>
                  <li className="nav-item submenu dropdown">
                    <NavLink to="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                      aria-expanded="false">Shop</NavLink>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <NavLink className="nav-link" to="business">Members</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/singleproduct/3">Product Reviwes</NavLink>
                      </li>
                      {/* <li className="nav-item">
                        <NavLink className="nav-link" to="checkout.html">Product Checkout</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="cart.html">Shopping Cart</NavLink>
                      </li> */}
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <NavLink to="/" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                      aria-expanded="false">Blog</NavLink>
                    {/* <ul className="dropdown-menu">
                      <li className="nav-item">
                        <NavLink className="nav-link" to="blog.html">Blog</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="single-blog.html">Blog Details</NavLink>
                      </li>
                    </ul> */}
                  </li>
                  {/* <li className="nav-item submenu dropdown">
                    <NavLink to="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                      aria-expanded="false">Pages</NavLink>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <NavLink className="nav-link" to="">Tracking</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="">Elements</NavLink>
                      </li>
                    </ul>
                  </li> */}
                  <li className="nav-item">
                    <NavLink className="nav-link" to="contact">Contact</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="add">Add Product</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="about">About</NavLink>
                  </li>
                 {
                  (!localStorage.getItem('user-info'))?
                  <>
                  <li className="nav-item">
                  <NavLink className="nav-link" to="login">Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="register">Register</NavLink>
                </li>
                  </>
                :
                 <li className="nav-item submenu dropdown">
                 <NavLink to="#" className="icons mt-2">
                    <i className="ti-user fa-2x" aria-hidden="true"></i>
                </NavLink>
                 <ul className="dropdown-menu">
                   <li className="nav-item">
                     <NavLink className="nav-link" to="tracking.html">Accout</NavLink>
                   </li>
                   <li className="nav-item">
                     <NavLink onClick={logOut} className="nav-link" to="/">Logout</NavLink>
                   </li>
                 </ul>
               </li>
                 }
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
</header>
        </>
    )
}

export default Navbar;
