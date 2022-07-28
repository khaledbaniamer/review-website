function Register() {
    return ( 
        <>
        <section class="banner_area">
                <div class="banner_inner d-flex align-items-center">
                    <div class="container">
                    <div class="banner_content d-md-flex justify-content-between align-items-center">
                        <div class="mb-3 mb-md-0">
                        <h1 >Register</h1>
                        <p>Create an account in our website</p>
                        </div>
                        <div class="page_link">
                        <a href="index.html">Home</a>
                        <a href="contact.html">Contact Us</a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <div className="m-5 col-lg-5 mx-auto">
            <form action="#">
                    <div class="mt-10">
                        <input type="text" name="name" placeholder="Full Name" required class="single-input" />
                    </div>
                    <div class="mt-10">
                        <input type="text" name="email" placeholder="Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Last Name'"
                            required class="single-input" />
                    </div>
                    <div class="mt-10">
                        <input type="text" name="password" placeholder="Password" required class="single-input" />
                    </div>
                    <button href="#" class=" col-lg-2 genric-btn default mt-3">Register</button>
                </form>
           </div>

        </>

     );
}

export default Register;