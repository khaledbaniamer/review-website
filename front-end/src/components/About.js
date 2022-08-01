import React from "react";

class About extends React.Component {
    render() { 
        return (
            <>
            <section className="banner_area">
                <div className="banner_inner d-flex align-items-center">
                    <div className="container">
                    <div className="banner_content d-md-flex justify-content-between align-items-center">
                        <div className="mb-3 mb-md-0">
                        <h1>About Us</h1>
                        <h2><p>Revs connects people with great local businesses.</p></h2>
                        {/* <h4>Know more about us</h4> */}
                        </div>
                       
                    </div>
                    </div>
                </div>
            </section><br /> <br />   

            {/* <div>
              <div className="container py-5">
                <div className="row h-100 align-items-center py-5">
                  <div className="col-lg-6">
                    <h1 className="display-4">About us</h1>
                    <p className="lead text-muted mb-0">Rev connects people with great local businesses.</p>
                    
                    
                  </div>
                  <div className="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" class="img-fluid" /></div>
                </div>
              </div>
          </div> */}

    <div>
      <div className=" container">
        <div className="row mb-4">
          <div className=" col-lg-5">
            <h2 className="display-4 font-weight-light">Our team</h2>
            <p className="font-italic text-muted">Meer Our Team.</p>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-xl-12 col-sm-6 mb-5">
            <div className="bg-light rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
              <h5 className="mb-0">Qutaibah khasawaneh</h5><span className="small text-uppercase text-muted">Product Owner</span>
            </div>
          </div>
          
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-light rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
              <h5 className="mb-0">Yousef Alhindawi</h5><span className="small text-uppercase text-muted">Scrum Master</span>
            </div>
          </div>
        
        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-light rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
            <h5 className="mb-0">Ayman shraideh</h5><span className="small text-uppercase text-muted">Developer</span>
          </div>
        </div>

              <div className="col-xl-3 col-sm-6 mb-5">
                  <div className="bg-light rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                  <h5 className="mb-0">Khaled Bani Amer</h5><span className="small text-uppercase text-muted">Developer</span>
                  </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-5">
                  <div className="bg-light rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                  <h5 className="mb-0">Mo'men Alshouha </h5><span className="small text-uppercase text-muted">Developer</span>
                  </div>
              </div>

              </div>
          </div>
          </div>
            </>
        );
    }
}


export default About;