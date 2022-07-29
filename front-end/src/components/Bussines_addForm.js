import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";




function Bussines_addForm() {

    const [productName,setProductName]=useState('');
    const [description,setDescription]=useState('');
    const [productImage,setProductImage]=useState('');

  
    const handleInputname=(e)=>{
        setProductName(e.target.value);
    }
  
    const handleInputdescription=(e)=>{
        setDescription(e.target.value);
    }
  

    const handleChangeImage=(e)=>{
        setProductImage(
           { ...productImage,
            image: e.target.files[0]}
        )
    }

    const handleSubmit=(e)=>{
        e.preventDefault();


        // navigate("/add_product", { replace: true });
    }
 

 




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
                <a href="/">Add product</a>
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
                {/* <h2 class="contact-title"></h2> */}
              </div>
              <div class="col-lg-8 mb-4 mb-lg-0">
                <form onSubmit={handleSubmit}
                  class="form-contact contact_form"
                  action="contact_process.php"
                  method="post"
                  id="contactForm"
                  novalidate="novalidate"
                >
                  <div class="row">
                   
                    <div class="col-sm-12">
                      <div class="form-group">
                      <label style={{ color: 'black'}}>Product name:</label>
                        <input
                          class="form-control"
                          name="product_name"
                          id="name"
                          type="text"
                          value={productName}
                          onChange={handleInputname}
                          placeholder="Enter product name"
                        />
                      </div>
                    </div>
                   
                    <div class="col-12">
                    <label style={{ color: 'black'}}>Select category:</label>
                      <select name="category_id"
                        class="form-control"
                        aria-label="Default select example"
                      >
                        <option selected>Select category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      
                    </div>
                    
                    <div class="col-12">
                        <br/>
                        <label style={{ color: 'black'}}>Enter image:</label>
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="product_image"
                          id="subject"
                          type="file"
                          
                          onChange={handleChangeImage}
                          placeholder="Enter image"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                      <label style={{ color: 'black'}}>Enter description:</label>
                        <textarea
                          class="form-control w-100"
                          name="product_description"
                          id="message"
                          cols="30"
                          rows="9"
                          placeholder="Enter description"
                          value={setDescription}
                          onChange={handleInputdescription}
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

          
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bussines_addForm;
