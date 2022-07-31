import {Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import React, { useEffect } from 'react'
import { getCategory } from '../Store/Slices/categorySlice';

function Index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory())
  }, [dispatch])

  const categories = useSelector(state=>state.category);
  console.log(categories.categories)
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
  <section className="feature_product_area section_gap_bottom_custom">
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
  {/* <!--================ End Feature Product Area =================--> */}

  {/* <!--================ Offer Area =================--> */}
  {/* <section className="offer_area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="offset-lg-4 col-lg-6 text-center">
          <div className="offer_content">
            <h3 className="text-uppercase mb-40">all men’s collection</h3>
            <h2 className="text-uppercase">50% off</h2>
            <Link to="#" className="main_btn mb-20 mt-5">Discover Now</Link>
            <p>Limited Time Offer</p>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/* <!--================ End Offer Area =================--> */}

  {/* <!--================ New Product Area =================--> */}
  {/* <section className="new_product_area section_gap_top section_gap_bottom_custom">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="main_title">
            <h2><span>new products</span></h2>
            <p>Bring called seed first of third give itself now ment</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className="new_product">
            <h5 className="text-uppercase">collection of 2019</h5>
            <h3 className="text-uppercase">Men’s summer t-shirt</h3>
            <div className="product-img">
              <img className="img-fluid" src="asset/img/product/new-product/new-product1.png" alt="" />
            </div>
            <h4>$120.70</h4>
            <Link to="#" className="main_btn">Add to cart</Link>
          </div>
        </div>

        <div className="col-lg-6 mt-5 mt-lg-0">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-product">
                <div className="product-img">
                  <img className="img-fluid w-100" src="asset/img/product/new-product/n1.jpg" alt="" />
                  <div className="p_icon">
                    <Link to="#">
                      <i className="ti-eye"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti-heart"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti-shopping-cart"></i>
                    </Link>
                  </div>
                </div>
                <div className="product-btm">
                  <Link to="#" className="d-block">
                    <h4>Nike latest sneaker</h4>
                  </Link>
                  <div className="mt-3">
                    <span className="mr-4">$25.00</span>
                    <del>$35.00</del>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-product">
                <div className="product-img">
                  <img className="img-fluid w-100" src="asset/img/product/new-product/n2.jpg" alt="" />
                  <div className="p_icon">
                    <Link to="#">
                      <i className="ti-eye"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti-heart"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti-shopping-cart"></i>
                    </Link>
                  </div>
                </div>
                <div className="product-btm">
                  <Link to="#" className="d-block">
                    <h4>Men’s denim jeans</h4>
                  </Link>
                  <div className="mt-3">
                    <span className="mr-4">$25.00</span>
                    <del>$35.00</del>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-product">
                <div className="product-img">
                  <img className="img-fluid w-100" src="asset/img/product/new-product/n3.jpg" alt="" />
                  <div className="p_icon">
                    <Link to="#">
                      <i className="ti-eye"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti-heart"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti-shopping-cart"></i>
                    </Link>
                  </div>
                </div>
                <div className="product-btm">
                  <Link to="#" className="d-block">
                    <h4>quartz hand watch</h4>
                  </Link>
                  <div className="mt-3">
                    <span className="mr-4">$25.00</span>
                    <del>$35.00</del>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-product">
                <div className="product-img">
                  <img className="img-fluid w-100" src="asset/img/product/new-product/n4.jpg" alt="" />
                  <div className="p_icon">
                    <Link to="#">
                      <i className="ti-eye"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti-heart"></i>
                    </Link>
                    <Link to="#">
                      <i className="ti-shopping-cart"></i>
                    </Link>
                  </div>
                </div>
                <div className="product-btm">
                  <Link to="#" className="d-block">
                    <h4>adidas sport shoe</h4>
                  </Link>
                  <div className="mt-3">
                    <span className="mr-4">$25.00</span>
                    <del>$35.00</del>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/* <!--================ End New Product Area =================--> */}

  {/* <!--================ Inspired Product Area =================--> */}
  <br/><br/><br/><br/><br/>
  {/* <section className="inspired_product_area section_gap_bottom_custom">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="main_title">
            <h2><span>Recent products</span></h2>
            <p>This is the recent product </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="single-product">
            <div className="product-img">
              <img className="img-fluid w-100" src="asset/img/product/inspired-product/i1.jpg" alt="" /> */}
              {/* <div className="p_icon">
                <Link to="#">
                  <i className="ti-eye"></i>
                </Link>
                <Link to="#">
                  <i className="ti-heart"></i>
                </Link>
                <Link to="#">
                  <i className="ti-shopping-cart"></i>
                </Link>
              </div> */}
            {/* </div>
            <div className="product-btm">
              <Link to="#" className="d-block">
                <h4>Latest men’s sneaker</h4>
              </Link> */}
              {/* <div className="mt-3">
                <span className="mr-4">$25.00</span>
                <del>$35.00</del>
              </div> */}
            {/* </div>
          </div> */}
        {/* </div> */}

        {/* <div className="col-lg-3 col-md-6">
          <div className="single-product">
            <div className="product-img">
              <img className="img-fluid w-100" src="asset/img/product/inspired-product/i2.jpg" alt="" />
              <div className="p_icon">
                <Link to="#">
                  <i className="ti-eye"></i>
                </Link>
                <Link to="#">
                  <i className="ti-heart"></i>
                </Link>
                <Link to="#">
                  <i className="ti-shopping-cart"></i>
                </Link>
              </div>
            </div>
            <div className="product-btm">
              <Link to="#" className="d-block">
                <h4>Latest men’s sneaker</h4>
              </Link>
              <div className="mt-3">
                <span className="mr-4">$25.00</span>
                <del>$35.00</del>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-product">
            <div className="product-img">
              <img className="img-fluid w-100" src="asset/img/product/inspired-product/i3.jpg" alt="" />
              <div className="p_icon">
                <Link to="#">
                  <i className="ti-eye"></i>
                </Link>
                <Link to="#">
                  <i className="ti-heart"></i>
                </Link>
                <Link to="#">
                  <i className="ti-shopping-cart"></i>
                </Link>
              </div>
            </div>
            <div className="product-btm">
              <Link to="#" className="d-block">
                <h4>Latest men’s sneaker</h4>
              </Link>
              <div className="mt-3">
                <span className="mr-4">$25.00</span>
                <del>$35.00</del>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-product">
            <div className="product-img">
              <img className="img-fluid w-100" src="asset/img/product/inspired-product/i4.jpg" alt="" />
              <div className="p_icon">
                <Link to="#">
                  <i className="ti-eye"></i>
                </Link>
                <Link to="#">
                  <i className="ti-heart"></i>
                </Link>
                <Link to="#">
                  <i className="ti-shopping-cart"></i>
                </Link>
              </div>
            </div>
            <div className="product-btm">
              <Link to="#" className="d-block">
                <h4>Latest men’s sneaker</h4>
              </Link>
              <div className="mt-3">
                <span className="mr-4">$25.00</span>
                <del>$35.00</del>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-3 col-md-6">
          <div className="single-product">
            <div className="product-img">
              <img className="img-fluid w-100" src="asset/img/product/inspired-product/i5.jpg" alt="" />
              <div className="p_icon">
                <Link to="#">
                  <i className="ti-eye"></i>
                </Link>
                <Link to="#">
                  <i className="ti-heart"></i>
                </Link>
                <Link to="#">
                  <i className="ti-shopping-cart"></i>
                </Link>
              </div>
            </div>
            <div className="product-btm">
              <Link to="#" className="d-block">
                <h4>Latest men’s sneaker</h4>
              </Link>
              <div className="mt-3">
                <span className="mr-4">$25.00</span>
                <del>$35.00</del>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-product">
            <div className="product-img">
              <img className="img-fluid w-100" src="asset/img/product/inspired-product/i6.jpg" alt="" />
              <div className="p_icon">
                <Link to="#">
                  <i className="ti-eye"></i>
                </Link>
                <Link to="#">
                  <i className="ti-heart"></i>
                </Link>
                <Link to="#">
                  <i className="ti-shopping-cart"></i>
                </Link>
              </div>
            </div>
            <div className="product-btm">
              <Link to="#" className="d-block">
                <h4>Latest men’s sneaker</h4>
              </Link>
              <div className="mt-3">
                <span className="mr-4">$25.00</span>
                <del>$35.00</del>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-product">
            <div className="product-img">
              <img className="img-fluid w-100" src="asset/img/product/inspired-product/i7.jpg" alt="" />
              <div className="p_icon">
                <Link to="#">
                  <i className="ti-eye"></i>
                </Link>
                <Link to="#">
                  <i className="ti-heart"></i>
                </Link>
                <Link to="#">
                  <i className="ti-shopping-cart"></i>
                </Link>
              </div>
            </div>
            <div className="product-btm">
              <Link to="#" className="d-block">
                <h4>Latest men’s sneaker</h4>
              </Link>
              <div className="mt-3">
                <span className="mr-4">$25.00</span>
                <del>$35.00</del>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-product">
            <div className="product-img">
              <img className="img-fluid w-100" src="asset/img/product/inspired-product/i8.jpg" alt="" />
              <div className="p_icon">
                <Link to="#">
                  <i className="ti-eye"></i>
                </Link>
                <Link to="#">
                  <i className="ti-heart"></i>
                </Link>
                <Link to="#">
                  <i className="ti-shopping-cart"></i>
                </Link>
              </div>
            </div>
            <div className="product-btm">
              <Link to="#" className="d-block">
                <h4>Latest men’s sneaker</h4>
              </Link>
              <div className="mt-3">
                <span className="mr-4">$25.00</span>
                <del>$35.00</del>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
  {/* </section> */}
  {/* <!--================ End Inspired Product Area =================--> */}

  {/* <!--================ Start Blog Area =================--> */}
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
        <div className="col-lg-4 col-md-6">
          <div className="single-blog">
            <div className="thumb">
              <img className="img-fluid" src="asset/img/b1.jpg" alt=""/>
            </div>
            <div className="short_details">
              <div className="meta-top d-flex">
                <Link to="#">By Admin</Link>
                <Link to="#"><i className="ti-comments-smiley"></i>2 Comments</Link>
              </div>
              <Link className="d-block" to="single-blog.html">
               
              </Link>
              <div className="text-wrap">
                <p>
                  Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light
                  Forth.
                </p>
              </div>
              <Link to="#" className="blog_btn">Continue reading <span className="ml-2 ti-arrow-right"></span></Link>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4 col-md-6">
          <div className="single-blog">
            <div className="thumb">
              <img className="img-fluid" src="asset/img/b2.jpg" alt=""/>
            </div>
            <div className="short_details">
              <div className="meta-top d-flex">
                <Link to="#">By Admin</Link>
                <Link to="#"><i className="ti-comments-smiley"></i>2 Comments</Link>
              </div>
              <Link className="d-block" to="single-blog.html">
                <h4>Ford clever bed stops your sleeping
                  partner hogging the whole</h4>
              </Link>
              <div className="text-wrap">
                <p>
                  Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light
                  Forth.
                </p>
              </div>
              <Link to="#" className="blog_btn">Learn More <span className="ml-2 ti-arrow-right"></span></Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-blog">
            <div className="thumb">
              <img className="img-fluid" src="asset/img/b3.jpg" alt=""/>
            </div>
            <div className="short_details">
              <div className="meta-top d-flex">
                <Link to="#">By Admin</Link>
                <Link to="#"><i className="ti-comments-smiley"></i>2 Comments</Link>
              </div>
              <Link className="d-block" to="single-blog.html">
                <h4>Ford clever bed stops your sleeping
                  partner hogging the whole</h4>
              </Link>
              <div className="text-wrap">
                <p>
                  Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light
                  Forth.
                </p>
              </div>
              <Link to="#" className="blog_btn">Learn More <span class="ml-2 ti-arrow-right"></span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!--================ End Blog Area =================--> */}
  
  </body>
    
    </>
  )
}

export default Index