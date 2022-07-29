import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {reviewsActions} from '../Store/Slices/ReviewsSlice';
import { fetchReviews, deleteReview } from '../Store/Slices/ReviewsSlice';
import { addReviews, cancelEditForm } from '../Store/Slices/ReviewsSlice';
import Swal from 'sweetalert2';
const SingleProduct = () => {
  const [bodyReview,setBodyReview] = useState('');
  const [rate,setRate] = useState();
  
  const isEdit = useSelector((state) => state.reviews.isEdit);
  const  loading  = useSelector((state) => state.reviews.loading);
  const  errors = useSelector((state) => state.reviews.errors);
  const  reviews = useSelector((state) => state.reviews.reviews);
  const  ratingCount = useSelector((state) => state.reviews.ratingCount);
  const  overall = useSelector((state) => state.reviews.overall);
  // console.log(errors)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews())
  }
  ,[dispatch])


  const addReviewHandler = (e) => {
    e.preventDefault();
    // console.log(rate)
    const reviewData = {
      review_body: bodyReview,
      review_rate: rate,
      user_id : 1,
      product_id: 1,
      // user_id : (JSON.parse(localStorage.getItem('user-info').id)),
      // product_id: product_id,

    }

    dispatch(addReviews(reviewData));
    setBodyReview('');
    setRate();
  }




  const EditHandler = () => {
    dispatch(reviewsActions.showEditForm())
  }
  const cancleHandler = () => {
    dispatch(reviewsActions.cancelEditForm())
  }
  const deleteHandler = (reviewId) => {
    // console.log(reviewId)
    dispatch(deleteReview(reviewId))
    // Swal.fire({
    //   title: 'Do you want to save the changes?',
    //   showDenyButton: true,
    //   showCancelButton: true,
    //   confirmButtonText: 'Save',
    //   denyButtonText: `Don't save`,
    // }).then((result) => {
    //   /* Read more about isConfirmed, isDenied below */
    //   if (result.isConfirmed) {
    //     Swal.fire('Saved!', '', 'success')
    //   } else if (result.isDenied) {
    //     Swal.fire('Changes are not saved', '', 'info')
    //   }
    // })
  }




  return (
    <>
      <section className="banner_area">
        <div className="banner_inner d-flex align-items-center">
          <div className="container">
            <div className="banner_content d-md-flex justify-content-between align-items-center">
              <div className="mb-3 mb-md-0">
                <h2>Product Details</h2>
                <p>Very us move be blessed multiply night</p>
              </div>
              <div className="page_link">
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
               {/* {errors && <div className="alret alert-danger text-center p-2 my-2" role="alert">{errors}</div>} */}
              { loading ? (
          <span>Loading...</span> 
        ) :
              <div className="row">
                <div className="col-lg-6">
                  <div className="row total_rate">
                    <div className="col-6">
                      <div className="box_total">
                        <h5>Overall</h5>
                        <h4>
                        {
                              (() => {
                                const stars = [];
                                for (let i = 1; i <= Math.round(overall); i++) {
                                  stars.push(
                                        <i className="fa fa-star"></i>
                                    );
                                }
                                return stars;
                            })()}
                          </h4>
                        <h6>({ratingCount} Reviews)</h6>
                      </div>
                    </div>
                  </div>
                  <div className="review_list">
                    
                    {reviews.length<=0 && <span className="d-block my-5">There is no reviews</span>}
                  { reviews.length>0 && reviews.map((review)=> (
                    !isEdit ? 
                      <div key={review.id} className="review_item mt-3">
                        <div className="media">
                          <div className="d-flex">
                            {/* {review.user_image} */}
                            <img
                              src={review.user_image}
                              alt=""
                            />
                          </div>
                          <div className="media-body">
                            <h4>{review.user_name}</h4>
                            <h5>{review.created_at}</h5>
                            {
                              (() => {
                                const stars = [];
                                for (let i = 1; i <= review.comment_rate; i++) {
                                  stars.push(
                                        <i className="fa fa-star"></i>
                                    );
                                }
                                return stars;
                            })()}
                            <div className="btn-group reply_btn">
                              <button
                                className="btn btn-light btn-sm dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Edit
                              </button>
                              <div className="dropdown-menu">
                                <button className="dropdown-item" onClick={EditHandler}>
                                  Edit
                                </button>
                                <button className="dropdown-item" onClick={() =>deleteHandler(review.id)}>
                                  Delete
                                </button>
                              </div>
                            </div>
                                
                            {/* <a className="reply_btn" href="#">Edit</a> */}
                          </div>
                        </div>
                        <p>
                        {review.comment_body}
                        </p>
                      </div>
                      
                     : 
                      // edit section
                      
                      <div key={review.id} className="review_item mt-3">
                        <div className="media">
                          <div className="d-flex">
                            <img
                              src="asset/img/product/single-product/review-3.png"
                              alt=""
                            />
                          </div>
                          <div className="media-body">
                            {/* <h4>Blake Ruiz</h4>
                            <h5>12th Feb, 2017 at 05:56 pm</h5> */}

                            <form
                              className="row contact_form"
                              action="contact_process.php"
                              method="post"
                              id="contactForm"
                              noValidate="novalidate"
                            >
                              <p>Your Rating:</p>
                              <ul className="list">
                              <div className="rating my-2">
                          <input type="radio" name="review_rate" onChange={()=>setRate(5)} value="5" id="5" />
                          <label htmlFor="5">☆</label>
                          <input type="radio" name="review_rate" onChange={()=>setRate(4)} value="4" id="4" />
                          <label htmlFor="4">☆</label>
                          <input type="radio" name="review_rate" onChange={()=>setRate(3)} value="3" id="3" />
                          <label htmlFor="3">☆</label>
                          <input type="radio" name="review_rate" onChange={()=>setRate(2)} value="2" id="2" />
                          <label htmlFor="2">☆</label>
                          <input type="radio" name="review_rate" onChange={()=>setRate(1)} value="1" id="1" />
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
                                    value={review.comment_body}
                                  >
                                   
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
                                <button
                                  type="button"
                                  value="submit"
                                  className="btn submit_btn mx-1"
                                  onClick={cancleHandler}
                                >
                                  Cancle
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>)
                    )}

                    {/* reply section */}
                    {/* <div className="review_item reply">
                    <div className="media">
                      <div className="d-flex">
                        <img
                          src="asset/img/product/single-product/review-2.png"
                          alt=""
                        />
                      </div>
                      <div className="media-body">
                        <h4>Blake Ruiz</h4>
                        <h5>12th Feb, 2017 at 05:56 pm</h5>
                        <a className="reply_btn" href="#">Reply</a>
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
                    <div className="form-group required"></div>
                    <form
                      className="row contact_form"
                      onSubmit={addReviewHandler}
                      id="contactForm"
                      
                    >
                      <p>Your Rating:</p>
                      <ul className="list">
                        <div className="rating">
                          <input type="radio" name="review_rate" onChange={()=>setRate(5)} value="5" id="5" />
                          <label htmlFor="5">☆</label>
                          <input type="radio" name="review_rate" onChange={()=>setRate(4)} value="4" id="4" />
                          <label htmlFor="4">☆</label>
                          <input type="radio" name="review_rate" onChange={()=>setRate(3)} value="3" id="3" />
                          <label htmlFor="3">☆</label>
                          <input type="radio" name="review_rate" onChange={()=>setRate(2)} value="2" id="2" />
                          <label htmlFor="2">☆</label>
                          <input type="radio" name="review_rate" onChange={()=>setRate(1)} value="1" id="1" />
                          <label htmlFor="1">☆</label>
                          
                        </div>
                      </ul>
                          <span className="text-danger">{errors && errors.review_rate }</span>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            name="review_body"
                            id="message"
                            rows="1"
                            placeholder="Review"
                            onChange={(e)=>setBodyReview(e.target.value)}
                            value={bodyReview}
                            
                          ></textarea>
                          <span className="text-danger">{errors && errors.review_body}</span>
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
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
