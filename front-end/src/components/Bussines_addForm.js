import React from "react";

function Bussines_addForm() {
  return (
    <>
      <section class="banner_area">
        <div class="banner_inner d-flex align-items-center">
          <div class="container">
            <div class="banner_content d-md-flex justify-content-between align-items-center">
              <div class="mb-3 mb-md-0">
                <h2>Add product</h2>
                {/* <p>Very us move be blessed multiply night</p> */}
              </div>
              <div class="page_link">
                <a href="/">Home</a>
                <a href="contact.html">Add product</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section_gap">
        <div class="container">
          <div class="d-none d-sm-block mb-5 pb-4">
            <div class="row">
              <div class="col-12">
                <h2 class="contact-title">Get in Touch</h2>
              </div>
              <div class="col-lg-8 mb-4 mb-lg-0">
                <form
                  class="form-contact contact_form"
                  action="contact_process.php"
                  method="post"
                  id="contactForm"
                  novalidate="novalidate"
                >
                  <div class="row">
                    {/* <div class="col-12">
                        <div class="form-group">
                            <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9" placeholder="Enter Message"></textarea>
                        </div>
                    </div> */}
                    <div class="col-sm-6">
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="name"
                          id="name"
                          type="text"
                          placeholder="Enter product name"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="product_price"
                          type="number"
                          placeholder="Enter product price"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <select
                        class="form-control"
                        aria-label="Default select example"
                      >
                        <option selected>Select category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      
                    </div>
                    
                    <div class="col-12"><br/>
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="subject"
                          id="subject"
                          type="file"
                          placeholder="Enter Subject"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <textarea
                          class="form-control w-100"
                          name="message"
                          id="message"
                          cols="30"
                          rows="9"
                          placeholder="Enter Message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mt-lg-3">
                    <button type="submit" class="main_btn">
                      Add product
                    </button>
                  </div>
                </form>
              </div>

              {/* <div class="col-lg-4">
                <div class="media contact-info">
                  <span class="contact-info__icon">
                    <i class="ti-home"></i>
                  </span>
                  <div class="media-body">
                    <h3>Jordan, Irbid.</h3>
                    <p>0096277809091</p>
                  </div>
                </div>
                <div class="media contact-info">
                  <span class="contact-info__icon">
                    <i class="ti-tablet"></i>
                  </span>
                  <div class="media-body">
                    <h3>
                      <a href="tel:454545654">00 (440) 9865 562</a>
                    </h3>
                    <p>Mon to Fri 9am to 6pm</p>
                  </div>
                </div>
                <div class="media contact-info">
                  <span class="contact-info__icon">
                    <i class="ti-email"></i>
                  </span>
                  <div class="media-body">
                    <h3>
                      <a href="mailto:support@colorlib.com">
                        support@colorlib.com
                      </a>
                    </h3>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
                <a
                  href="mailto:someone@example.com"
                  type="submit"
                  class="main_btn"
                >
                  Direct Email
                </a> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bussines_addForm;
