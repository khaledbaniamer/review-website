function Login() {
    return ( 
        <>
        <section className="banner_area">
                <div className="banner_inner d-flex align-items-center">
                    <div className="container">
                    <div className="banner_content d-md-flex justify-content-between align-items-center">
                        <div className="mb-3 mb-md-0">
                        <h1>Login</h1>
                        <p>Signin into our website</p>
                        </div>
                        <div className="page_link">
                        <a href="index.html">Home</a>
                        <a href="contact.html">Contact Us</a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>


           <div className="m-5 col-lg-5 mx-auto">
            <form action="#">
                    <div className="mt-10">
                        <input type="text" name="email" placeholder="Email Address" required className="single-input" />
                    </div>
                    <div className="mt-10">
                        <input type="text" name="password" placeholder="Password" required className="single-input" />
                    </div>
                    <div className="d-flex justify-content-center">
                   <button href="#" className="main_btn col-lg-3 mt-3">Login</button>
                   </div>
                </form>
           </div>
            </>

     );
}

export default Login;