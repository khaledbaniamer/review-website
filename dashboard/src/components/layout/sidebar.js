function Sidebar(){
return (
<>
     <div className="sidebar pe-4 pb-3">
     <nav className="navbar bg-secondary navbar-dark">
       <a href="index.html" className="navbar-brand mx-4 mb-3">
         <h3 className="text-primary"><i className="fa fa-user-edit me-2" />DarkPan</h3>
       </a>
       <div className="d-flex align-items-center ms-4 mb-4">
         <div className="position-relative">
           <img className="rounded-circle" src="img/user.jpg" alt="" style={{width: '40px', height: '40px'}} />
           <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
         </div>
         <div className="ms-3">
           <h6 className="mb-0">Jhon Doe</h6>
           <span>Admin</span>
         </div>
       </div>
       <div className="navbar-nav w-100">
         <a href="/" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2" />Dashboard</a>
      
         <a href="products" className="nav-item nav-link"><i className="fa fa-list-alt me-2" />Products</a>
         <a href="categories" className="nav-item nav-link"><i className="fa fa-list-alt me-2" />Categories</a>

         <a href="users" className="nav-item nav-link"><i className="fa fa-users me-2" />Users</a>
         <a href="business" className="nav-item nav-link"><i className="fa fa-table me-2" />Business </a>
        
         <div className="nav-item dropdown">
           <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2" />Pages</a>
           <div className="dropdown-menu bg-transparent border-0">
             <a href="signin.html" className="dropdown-item">Sign In</a>
             <a href="signup.html" className="dropdown-item">Sign Up</a>
             <a href="404.html" className="dropdown-item">404 Error</a>
             <a href="blank.html" className="dropdown-item">Blank Page</a>
             <a href="#" className="dropdown-item">My Profile</a>
          <a href="#" className="dropdown-item">Settings</a>
          <a href="#" className="dropdown-item">Log Out</a>
           </div>
         </div>
       </div>
     </nav>
     
   </div>
   
    <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
    <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
      <h2 className="text-primary mb-0"><i className="fa fa-user-edit" /></h2>
    </a>
    <a href="#" className="sidebar-toggler flex-shrink-0">
      <i className="fa fa-bars" style={{color:"#113F67"}}/>
    </a>
    <form className="d-none d-md-flex ms-4">
      <input className="form-control bg-dark border-0" type="search" placeholder="Search" />
    </form>
    <div className="navbar-nav align-items-center ms-auto">
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
          <i className="fa fa-envelope me-lg-2" />
          <span className="d-none d-lg-inline-flex">Message</span>
        </a>
        <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
          <a href="#" className="dropdown-item">
            <div className="d-flex align-items-center">
              <img className="rounded-circle" src="img/user.jpg" alt="" style={{width: '40px', height: '40px'}} />
              <div className="ms-2">
                <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                <small>15 minutes ago</small>
              </div>
            </div>
          </a>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <div className="d-flex align-items-center">
              <img className="rounded-circle" src="img/user.jpg" alt="" style={{width: '40px', height: '40px'}} />
              <div className="ms-2">
                <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                <small>15 minutes ago</small>
              </div>
            </div>
          </a>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <div className="d-flex align-items-center">
              <img className="rounded-circle" src="img/user.jpg" alt="" style={{width: '40px', height: '40px'}} />
              <div className="ms-2">
                <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                <small>15 minutes ago</small>
              </div>
            </div>
          </a>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item text-center">See all message</a>
        </div>
      </div>
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
          <i className="fa fa-bell me-lg-2" />
          <span className="d-none d-lg-inline-flex">Notificatin</span>
        </a>
        <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
          <a href="#" className="dropdown-item">
            <h6 className="fw-normal mb-0">Profile updated</h6>
            <small>15 minutes ago</small>
          </a>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <h6 className="fw-normal mb-0">New user added</h6>
            <small>15 minutes ago</small>
          </a>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <h6 className="fw-normal mb-0">Password changed</h6>
            <small>15 minutes ago</small>
          </a>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item text-center">See all notifications</a>
        </div>
      </div>
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
          <img className="rounded-circle me-lg-2" src="img/user.jpg" alt="" style={{width: '40px', height: '40px'}} />
          <span className="d-none d-lg-inline-flex">John Doe</span>
        </a>
        <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
          <a href="#" className="dropdown-item">My Profile</a>
          <a href="#" className="dropdown-item">Settings</a>
          <a href="#" className="dropdown-item">Log Out</a>
        </div>
      </div>
    </div>
  </nav>
 </>
);
}
export default Sidebar;