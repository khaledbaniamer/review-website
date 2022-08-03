import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategory } from "../Store/Slices/categorySlice";
import { addProducts } from "../Store/Slices/productSlice";
import Swal from "sweetalert2";

function Bussines_addForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const category = useSelector((state) => state.category);
  //  console.log(category)

  const allCategory = category.categories.map((category) => {
    return (
    <option value={category.id}>{category.category_name}</option>
    )
  });

  const [productData, setProductData] = useState({ business_id: "5" });
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setProductData({
      ...productData,
      [e.target.name]: value,
    });
  };

  const handleChangeImage = (e) => {
    setProductData({ ...productData, product_image: e.target.files[0] });
  };
  const handleChangeImage1 = (e) => {
    setProductData({ ...productData, product_image1: e.target.files[0] });
  };
  const handleChangeImage2 = (e) => {
    setProductData({ ...productData, product_image2: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setProductData({
      ...productData,
    });

    // console.log(productData);
    const formData = new FormData();
    formData.append("product_name", productData.product_name);
    formData.append("product_image", productData.product_image);
    formData.append("product_image1", productData.product_image1);
    formData.append("product_image2", productData.product_image2);
    formData.append("product_description", productData.product_description);
    formData.append("catrgory_id", parseInt(productData.catrgory_id));
    formData.append("business_id", parseInt(productData.business_id));

    dispatch(addProducts(formData));
    
  };

  return (
    <>
      <section class="banner_area">
        <div class="banner_inner d-flex align-items-center">
          <div class="container">
            <div class="banner_content d-md-flex justify-content-between align-items-center">
              <div class="mb-3 mb-md-0">
                <h1>Add product</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section_gap">
        <div class="container">
          <div class="d-none d-sm-block mb-5 pb-4">
            <div class="row">
              <div class="col-12">{/* <h2 class="contact-title"></h2> */}</div>
              <div class="col-lg-8 mb-4 mb-lg-0">
                <form
                  onSubmit={handleSubmit}
                  class="form-contact contact_form"
                  action="contact_process.php"
                  method="post"
                  id="contactForm"
                  novalidate="novalidate"


                >
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label style={{ color: "black" }}>Product name:</label>
                        <input
                          class="form-control"
                          name="product_name"
                          id="name"
                          type="text"
                          value={productData.productName}
                          onChange={handleChange}
                          placeholder="Enter product name"
                        />
                      </div>
                    </div>

                    <div class="col-sm-12">
                      <label style={{ color: "black" }}>Select category:</label>
                      <select
                        name="catrgory_id"
                        onChange={handleChange}
                        class="form-control my-2 mb-3"
                        
                      >
                        <option >Select category</option>
                        {allCategory}
                      </select>
                    </div>

                    <div class="col-sm-12">
                      
                      <label style={{ color: "black" }}>Enter first image :</label>
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
                    <div class="col-sm-12">
                      
                      <label style={{ color: "black" }}>Enter second image:</label>
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="product_image1"
                          id="subject"
                          type="file"
                          onChange={handleChangeImage1}
                          placeholder="Enter image"
                        />
                      </div>
                    </div>
                    <div class="col-sm-12">
                      
                      <label style={{ color: "black" }}>Enter third image:</label>
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="product_image2"
                          id="subject"
                          type="file"
                          onChange={handleChangeImage2}
                          placeholder="Enter image"
                        />
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label style={{ color: "black" }}>
                          Enter description:
                        </label>
                        <textarea
                          class="form-control w-100"
                          name="product_description"
                          type="text"
                          id="message"
                          cols="30"
                          rows="9"
                          placeholder="Enter description"
                          value={productData.productDescription}
                          onChange={handleChange}
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
