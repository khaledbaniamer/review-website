import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {reviewsActions} from '../Store/Slices/ReviewsSlice'
const SingleProduct = () => {
  const isEdit = useSelector((state) => state.reviews.isEdit);
  const dispatch = useDispatch();
  let stars = [];
  for (let index = 1; index <= 3; index++) {
    stars.push("star");
  }
  return (
    <>
      {console.log()}{" "}
      <section class="banner_area">
        <div class="banner_inner d-flex align-items-center">
          <div class="container">
            <div class="banner_content d-md-flex justify-content-between align-items-center">
              <div class="mb-3 mb-md-0">
                <h2>Product Details</h2>
                <p>Very us move be blessed multiply night</p>
              </div>
              <div class="page_link">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/singleproduct">Product Details</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="product_image_area">
        <div className="container">
          <div className="row s_product_inner">
            <div className="col-lg-6">
              <div className="s_product_img">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      className="active"
                    >
                      <img
                        src="asset/img/product/single-product/s-product-s-2.jpg"
                        alt=""
                      />
                    </li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    >
                      <img
                        src="asset/img/product/single-product/s-product-s-3.jpg"
                        alt=""
                      />
                    </li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    >
                      <img
                        src="asset/img/product/single-product/s-product-s-4.jpg"
                        alt=""
                      />
                    </li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src="asset/img/product/single-product/s-product-1.jpg"
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="asset/img/product/single-product/s-product-s-3.jpg"
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="asset/img/product/single-product/s-product-s-4.jpg"
                        alt="Third slide"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="s_product_text">
                <h3>Faded SkyBlu Denim Jeans</h3>

                <ul className="list">
                  <li>
                    <a className="active" href="#Category">
                      <span>Category</span> : Household
                    </a>
                  </li>
                </ul>
                <p>
                  Mill Oil is an innovative oil filled radiator with the most
                  modern technology. If you are looking for something that can
                  make your interior look awesome, and at the same time give you
                  the pleasant warm feeling during the winter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="product_description_area">
        <div className="container">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Description
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link active"
                id="review-tab"
                data-toggle="tab"
                href="#review"
                role="tab"
                aria-controls="review"
                aria-selected="false"
              >
                Reviews
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <p>
                Beryl Cook is one of Britain’s most talented and amusing artists
                .Beryl’s pictures feature women of all shapes and sizes enjoying
                themselves .Born between the two world wars, Beryl Cook
                eventually left Kendrick School in Reading at the age of 15,
                where she went to secretarial school and then into an insurance
                office. After moving to London and then Hampton, she eventually
                married her next door neighbour from Reading, John Cook. He was
                an officer in the Merchant Navy and after he left the sea in
                1956, they bought a pub for a year before John took a job in
                Southern Rhodesia with a motor company. Beryl bought their young
                son a box of watercolours, and when showing him how to use it,
                she decided that she herself quite enjoyed painting. John
                subsequently bought her a child’s painting set for her birthday
                and it was with this that she produced her first significant
                work, a half-length portrait of a dark-skinned lady with a
                vacant expression and large drooping breasts. It was aptly named
                ‘Hangover’ by Beryl’s husband and
              </p>
              <p>
                It is often frustrating to attempt to plan meals that are
                designed for one. Despite this fact, we are seeing more and more
                recipe books and Internet websites that are dedicated to the act
                of cooking for one. Divorce and the death of spouses or grown
                children leaving for college are all reasons that someone
                accustomed to cooking for more than one would suddenly need to
                learn how to adjust all the cooking practices utilized before
                into a streamlined plan of cooking that is more efficient for
                one person creating less
              </p>
            </div>

            <div
              className="tab-pane fade show active"
              id="review"
              role="tabpanel"
              aria-labelledby="review-tab"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="row total_rate">
                    <div className="col-6">
                      <div className="box_total">
                        <h5>Overall</h5>
                        <h4>4.0</h4>
                        <h6>(03 Reviews)</h6>
                      </div>
                    </div>
                  </div>
                  <div className="review_list">
                    {isEdit ? (
                      <div className="review_item mt-3">
                        <div className="media">
                          <div className="d-flex">
                            <img
                              src="asset/img/product/single-product/review-3.png"
                              alt=""
                            />
                          </div>
                          <div className="media-body">
                            <h4>Blake Ruiz</h4>
                            <h5>12th Feb, 2017 at 05:56 pm</h5>
                            {stars.map((star, index) => (
                              <i key={index} className="fa fa-star"></i>
                            ))}
                            <div class="btn-group reply_btn">
                              <button
                                class="btn btn-light btn-sm dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Edit
                              </button>
                              <div class="dropdown-menu">
                                <button class="dropdown-item" href="#">
                                  Edit
                                </button>
                                <button class="dropdown-item" href="#">
                                  Delete
                                </button>
                              </div>
                            </div>
                            {/* <a class="reply_btn" href="#">Edit</a> */}
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo
                        </p>
                      </div>
                    ) : (
                      // edit section
                      <div className="review_item mt-3">
                        <div className="media">
                          <div className="d-flex">
                            <img
                              src="asset/img/product/single-product/review-3.png"
                              alt=""
                            />
                          </div>
                          <div className="media-body">
                            <h4>Blake Ruiz</h4>
                            <h5>12th Feb, 2017 at 05:56 pm</h5>

                            <form
                              className="row contact_form"
                              action="contact_process.php"
                              method="post"
                              id="contactForm"
                              noValidate="novalidate"
                            >
                              <p>Your Rating:</p>
                              <ul className="list">
                                <div className="rating">
                                  <input
                                    type="radio"
                                    name="rating"
                                    value="5"
                                    id="5"
                                  />
                                  <label htmlFor="5">☆</label>
                                  <input
                                    type="radio"
                                    name="rating"
                                    value="4"
                                    id="4"
                                  />
                                  <label htmlFor="4">☆</label>
                                  <input
                                    type="radio"
                                    name="rating"
                                    value="3"
                                    id="3"
                                  />
                                  <label htmlFor="3">☆</label>
                                  <input
                                    type="radio"
                                    name="rating"
                                    value="2"
                                    id="2"
                                  />
                                  <label htmlFor="2">☆</label>
                                  <input
                                    type="radio"
                                    name="rating"
                                    value="1"
                                    id="1"
                                  />
                                  <label htmlFor="1">☆</label>
                                </div>
                              </ul>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    name="message"
                                    id="message"
                                    rows="7"
                                    placeholder="Review"
                                  >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo
                                  </textarea>
                                </div>
                              </div>
                              <div className="col-md-12 text-right">
                                <button
                                  type="submit"
                                  value="submit"
                                  className="btn submit_btn"
                                >
                                  Submit Now
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* reply section */}
                    {/* <div class="review_item reply">
                    <div class="media">
                      <div class="d-flex">
                        <img
                          src="asset/img/product/single-product/review-2.png"
                          alt=""
                        />
                      </div>
                      <div class="media-body">
                        <h4>Blake Ruiz</h4>
                        <h5>12th Feb, 2017 at 05:56 pm</h5>
                        <a class="reply_btn" href="#">Reply</a>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo
                    </p>
                  </div> */}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="review_box">
                    <h4>Add a Review</h4>

                    {/* <p>Outstanding</p> */}
                    <div class="form-group required"></div>
                    <form
                      className="row contact_form"
                      action="contact_process.php"
                      method="post"
                      id="contactForm"
                      noValidate="novalidate"
                    >
                      <p>Your Rating:</p>
                      <ul className="list">
                        <div className="rating">
                          <input type="radio" name="rating" value="5" id="5" />
                          <label htmlFor="5">☆</label>
                          <input type="radio" name="rating" value="4" id="4" />
                          <label htmlFor="4">☆</label>
                          <input type="radio" name="rating" value="3" id="3" />
                          <label htmlFor="3">☆</label>
                          <input type="radio" name="rating" value="2" id="2" />
                          <label htmlFor="2">☆</label>
                          <input type="radio" name="rating" value="1" id="1" />
                          <label htmlFor="1">☆</label>
                        </div>
                      </ul>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            name="message"
                            id="message"
                            rows="1"
                            placeholder="Review"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12 text-right">
                        <button
                          type="submit"
                          value="submit"
                          className="btn submit_btn"
                        >
                          Submit Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
