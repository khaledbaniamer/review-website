import {Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import React, { useEffect } from 'react'
import { getCategory } from '../Store/Slices/categorySlice';
import { indexProducts } from '../Store/Slices/businessSlice';

function Index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory())
    dispatch(indexProducts());
  }, [dispatch]);



  useEffect(() => {
    
  }, [dispatch])
  

  const categories = useSelector(state=>state.category);
  const singleBusiness = useSelector(state=>state.business.products);
  const avaRate = useSelector(state=>state.business.ava_rate);
  // console.log(categories.categories)
  console.log(singleBusiness)
  console.log(avaRate)

  const indexproducts = singleBusiness.map((product , index)=>{
    return(
      <div className="col-lg-4 col-md-6">
          <div className="single-blog">
            <div className="thumb">
              <img className="img-fluid" src={"http://127.0.0.1:8000/product_image/"+product.product_image }alt=""/>
            </div>
            <div className="short_details">
                <h3>{product.product_name}</h3>
              <div className="text-wrap">
                <p>
                  {product.product_description}
                </p>
              </div>
              <div className="small-ratings mt-3">
        {
        (() => {
          console.log(index)

            // console.log(avaRate[j])
            if(avaRate[index]){

            
            if (product.id == avaRate[index].prod_id) {
              const stars = [];
              for (let i = 1; i <= Math.round(avaRate[index].ava_rate); i++) {
                stars.push(
                      <i className="fa fa-star"></i>
                  );
              }
              return stars;
          }
        }
          })()}
          </div>
              <Link to={"/singleproduct/"+product.id} className="blog_btn">Continue reading <span className="ml-2 ti-arrow-right"></span></Link>
            </div>
          </div>
        </div>
    )
  })

  const allcategory = categories.categories.map(category=>{
    return (
    <div className="col-lg-4 col-md-6">
      <div className="single-product">
        <div className="product-img">
          <img className="img-fluid w-100" src={ "http://localhost:8000/category_image/" + category.category_image} alt="" />
        </div>
        <div className="product-btm">
          <Link to="#" className="d-block">
            <h3>{category.category_name}</h3>
          </Link>
        </div>
      </div>
    </div>
    )
  })
  return (
    <>
    
    <body>

  {/* <!--================Home Banner Area =================--> */}
  <section className="home_banner_area mb-40">
    <div className="banner_inner d-flex align-items-center">
      <div className="container">
        <div className="banner_content row">
          <div className="col-lg-12">
            <p className="sub text-uppercase" ><h3 style={{ color: 'black' }}>men Collection</h3></p>
            {/* <h3><span>Show</span> Your <br />Personal <span>Style</span></h3> */}
            <h4>Fowl saw dry which a above together place.</h4>
            <Link className="main_btn mt-40" to="#">View Collection</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!--================End Home Banner Area =================--> */}

  {/* <!-- Start feature Area --> */}
  <section className="feature-area section_gap_bottom_custom">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="single-feature">
            <Link to="#" className="title">
              <i className="flaticon-money"></i>
              <h3>Money back gurantee</h3>
            </Link>
            <p>Shall open divide a one</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-feature">
            <Link to="#" className="title">
              <i className="flaticon-truck"></i>
              <h3>Free Delivery</h3>
            </Link>
            <p>Shall open divide a one</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-feature">
            <Link to="#" className="title">
              <i className="flaticon-support"></i>
              <h3>Alway support</h3>
            </Link>
            <p>Shall open divide a one</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-feature">
            <Link to="#" className="title">
              <i className="flaticon-blockchain"></i>
              <h3>Secure payment</h3>
            </Link>
            <p>Shall open divide a one</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End feature Area --> */}

  {/* <!--================ Feature Product Area =================--> */}
  <section className="feature_product_area section_gap_bottom_custom mb-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="main_title">
            <h2><span>Categories</span></h2>
            <p>We have some categories below</p>
          </div>
        </div>
      </div>

      <div className="row">
        {allcategory}
        
        
      </div>
    </div>
  </section>
 
  <section className="blog-area section-gap">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="main_title">
            <h2><span>latest product reviews</span></h2>
            <p>This section show the latest product reviewed</p>
          </div>
        </div>
      </div>

      <div className="row">
        {indexproducts}
      </div>
    </div>
  </section>
  {/* <!--================ End Blog Area =================--> */}
  
  </body>
    
    </>
  )
}

export default Index