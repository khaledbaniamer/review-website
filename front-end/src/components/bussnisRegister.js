function BussnisRegister() {
    return ( 
        <>
        <section className="banner_area">
                <div className="banner_inner d-flex align-items-center">
                    <div className="container">
                    <div className="banner_content d-md-flex justify-content-between align-items-center">
                        <div className="mb-3 mb-md-0">
                        <h1 >Register For Owner</h1>
                        <p>Create an account in our website</p>
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
                    <div className="mt-4">
                    <label for="" class="form-label">Full Name</label>
                        <input type="text" name="owner_name" placeholder="Enter Your Name" required className="single-input" />
                    </div>
                    <div className="mt-4">
                    <label for="" class="form-label">Email</label>

                        <input type="text" name="owner_email" placeholder="Enter Your Email" required className="single-input" />
                    </div>
                    <div className="mt-4">
                    <label for="" class="form-label">Address</label>

                        <input type="text" name="owner_address" placeholder="Enter Your Address" required className="single-input" />
                    </div>
                    <div className="mt-4">
                    <label for="" class="form-label">Credential Photo</label>

                        <input type="file" name="credential_photo" placeholder="Enter Your Address" required className="single-input" />
                    </div>
                    <div className="mt-4">
                    <label for="" class="form-label">Profile Photo</label>

                        <input type="file" name="profile_photo" placeholder="Enter Your Address" required className="single-input" />
                    </div>
                    <div className="mt-4">
                    <label for="" class="form-label">Password</label>

                        <input type="text" name="owner_password" placeholder="Enter Your Password" required className="single-input" />
                    </div>
                   <div className="d-flex justify-content-center">
                   <button href="#" className="main_btn col-lg-3 mt-3">Register</button>
                   </div>
                </form>
           </div>

        </>

     );
}

export default BussnisRegister;