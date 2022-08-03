import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ()=>{
  const naviagte = useNavigate();
    function refreshPage() {
      window.location.reload(false);
    }

    function logOut() {
    localStorage.clear();
    naviagte('/');
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
            <div className="col-lg-2">
            <li className="nav-item mt-3" style={{listStyle:"none"}} >
                  <div class="logo-4">
                      <NavLink className="nav-link" to="/"> <h3 title="Home"> REVS</h3></NavLink>
                  </div>
                </li>
                </div>
              <div className="col-lg-10">
                <ul className="nav navbar-nav center_nav">
                
                <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="business">Businesses</NavLink>
              </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="contact">Contact</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="about">About</NavLink>
                  </li>
                 {
                  (!localStorage.getItem('user-info'))?
                  <>
                  <li className="nav-item pull-right">
                  <NavLink className="nav-link" to="login">Login</NavLink>
                </li>
                <li className="nav-item pull-right">
                  <NavLink className="nav-link" to="register">Register</NavLink>
                </li>
                  </>
                :
                <>
                {JSON.parse(localStorage.getItem('user-info')).user_role == null ?
                <li className="nav-item">
                  <NavLink className="nav-link" to="bussnisRegister">Business Register</NavLink>
                </li>
                :
                <li className="nav-item">
                  <NavLink className="nav-link" to="add">Add Product</NavLink>
                </li> }

                 <li className="nav-item submenu dropdown">
                 <NavLink to="#" className="icons mt-2">
                    <i className="ti-user fa-2x" aria-hidden="true"></i>
                </NavLink>
                 <ul className="dropdown-menu">
                   <li className="nav-item">
                     <NavLink className="nav-link" to="/userprofile/:id">Accout</NavLink>
                   </li>
                   <li className="nav-item">
                     <NavLink onClick={logOut} className="nav-link" to="/">Logout</NavLink>
                   </li>
                 </ul>
               </li>
               </>
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
