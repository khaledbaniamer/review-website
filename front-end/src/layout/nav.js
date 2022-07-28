import { NavLink } from "react-router-dom";



const Navbar = ()=>{
    return(
        <>
<header className="header_area">
    {/* <div className="top_menu"> */}
      {/* <div className="container"> */}
        {/* <div className="row"> */}
          {/* <div className="col-lg-7">
            <div className="float-left">
              <p>Phone: +01 256 25 235</p>
              <p>email: info@eiser.com</p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="float-right">
              <ul className="right_side">
                <li>
                  <NavLink to="cart.html">
                    gift card
                  </NavLink>
                </li>
                <li>
                  <NavLink to="tracking.html">
                    track order
                  </NavLink>
                </li>
                <li>
                  <NavLink to="contact">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div> */}
        {/* </div> */}
      {/* </div> */}
    {/* </div> */}
    <div className="main_menu">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light w-100">
         
          <NavLink className="navbar-brand logo_h" to="index.html">
            <img src="asset/img/logo.png" to=""/>
          </NavLink>
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
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <NavLink to="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                      aria-expanded="false">Shop</NavLink>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <NavLink className="nav-link" to="category.html">Shop Category</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="single-product.html">Product Details</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="checkout.html">Product Checkout</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="cart.html">Shopping Cart</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <NavLink to="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                      aria-expanded="false">Blog</NavLink>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <NavLink className="nav-link" to="blog.html">Blog</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="single-blog.html">Blog Details</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <NavLink to="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                      aria-expanded="false">Pages</NavLink>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <NavLink className="nav-link" to="tracking.html">Tracking</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="elements.html">Elements</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="contact">Contact</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="about">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="login">Login</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="register">Register</NavLink>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 pr-0">
                <ul className="nav navbar-nav navbar-right right_nav pull-right">
                  <li className="nav-item">
                    <NavLink to="#" className="icons">
                      <i className="ti-search" aria-hidden="true"></i>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="#" className="icons">
                      <i className="ti-shopping-cart"></i>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="#" className="icons">
                      <i className="ti-user" aria-hidden="true"></i>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="#" className="icons">
                      <i className="ti-heart" aria-hidden="true"></i>
                    </NavLink>
                  </li>
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
