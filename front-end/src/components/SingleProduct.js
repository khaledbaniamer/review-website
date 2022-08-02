import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {reviewsActions} from '../Store/Slices/ReviewsSlice';
import { fetchReviews, deleteReview,updateReview } from '../Store/Slices/ReviewsSlice';
import { addReviews, cancelEditForm } from '../Store/Slices/ReviewsSlice';
import Swal from 'sweetalert2';
const SingleProduct = () => {
  const [bodyReview,setBodyReview] = useState('');
  const [rate,setRate] = useState();
  const [EditReviewBody,setEditReviewBody] = useState();
  const [EditReviewId,setEditReviewId] = useState();
  const isEdit = useSelector((state) => state.reviews.isEdit);
  const editReviewId = useSelector((state) => state.reviews.editReviewId);
  // const editUserId = useSelector((state) => state.reviews.editUserId);
  const  loading  = useSelector((state) => state.reviews.loading);
  const  errors = useSelector((state) => state.reviews.errors);
  const  reviews = useSelector((state) => state.reviews.reviews);
  const  product = useSelector((state) => state.reviews.product);
  const  ratingCount = useSelector((state) => state.reviews.ratingCount);
  const  overall = useSelector((state) => state.reviews.overall);
  // console.log(editReviewId)
  const dispatch = useDispatch();
  const {id} = useParams();
  // console.log(id)

  useEffect(() => {
    dispatch(fetchReviews(+id))
  }
  ,[dispatch])


  const addReviewHandler = (e) => {
    e.preventDefault();
    // console.log(rate)
    const reviewData = {
      review_body: bodyReview,
      review_rate: rate,
      // user_id : 1,
      user_id : (JSON.parse(localStorage.getItem('user-info')).id),
      product_id: +id,
      // product_id: product_id,

    }

    dispatch(addReviews(reviewData));
    setBodyReview('');
    setRate();
  }

  // Edit Review
   const EditHandler = (reviewId) => {
    dispatch(reviewsActions.showEditForm(reviewId))
  }
  useEffect(() => {
    if (isEdit) {
      const review = reviews.find((review) => review.id === editReviewId);
      // console.log(review)
      setEditReviewBody(review.comment_body)
      setEditReviewId(review.id)
    }  
  }, [isEdit])


  const updateHandler =(e)=>{
    e.preventDefault();
    const reviewData = {
      review_body_edit: EditReviewBody,
      review_rate_edit: rate,
      id: EditReviewId,
    }
    Swal.fire({
      title: 'Do you want to update the review?',
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: 'Update',
      confirmButtonColor: '#71cd14',
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(updateReview(reviewData));
        
        // Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        // Swal.fire('Changes are not saved', '', 'info')
      }
    })
    setEditReviewBody()
    // setEditReviewId()
    setRate()
  }

  const cancleHandler = () => {
    dispatch(reviewsActions.cancelEditForm())
  }
  
  const deleteHandler = (reviewId) => {
    // console.log(reviewId)
    Swal.fire({
      title: 'Do you want to delete the review?',
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: 'Delete',
      confirmButtonColor: '#f00',
      denyButtonText: `Cancel`,
      denyButtonColor: `#71cd14`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deleteReview(reviewId))
        // Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        // Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }




  return (
   
    <> {product ? 
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
                <NavLink style={{fontWeight: 900 , color: 'black'}} to="/">Home</NavLink>
                <NavLink style={{fontWeight: 900 , color: 'black'}} to={`/singleproduct/${+id}`}>Product Details</NavLink>
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
                  <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  >
                    <img 
                      src={"http://localhost:8000/product_image/" + product.product_image}
                      alt=""
                      width="60"
                      height="60"
                    />
                  </li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  >
                    <img
                      src={"http://localhost:8000/product_image/" + product.product_image1}
                      alt=""
                      width="60"
                      height="60"
                    />
                  </li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                    
                  >
                    <img
                      src={"http://localhost:8000/product_image/" + product.product_image2}
                      alt=""
                      width="60"
                      height="60"
                    />
                  </li>
                </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img style={{height: '400px' , width:'400px'}}
                        className="d-block w-100 "
                        src={"http://localhost:8000/product_image/" + product.product_image}
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img style={{height: '400px' , width:'400px'}}
                        className="d-block w-100"
                        src={"http://localhost:8000/product_image/" + product.product_image1}
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img style={{height: '400px' , width:'400px'}}
                        className="d-block w-100"
                        src={"http://localhost:8000/product_image/" + product.product_image2}
                        alt="Third slide"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="s_product_text">
                <h3>{product.product_name}</h3>

                <ul className="list">
                  <li>
                    <NavLink className="active" to="/category">
                      <span>Category:</span>{product.category_name}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="active" to={`/business_profile/${product.business_id}`}>
                      <span>Business:</span>{product.owner_name}
                    </NavLink>
                  </li>
                </ul>
                <p>
                 {product.product_description}
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
              {product.product_description}
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
                    isEdit && editReviewId === review.id && (JSON.parse(localStorage.getItem('user-info')).id) === review.user_id ? 
// edit section
<div key={review.id} className="review_item mt-3">
                        <div className="media">
                          <div className="d-flex">
                            <img
                              src={"http://localhost:8000/profile_photo/" + review.user_image}
                              alt=""
                              width="50"
                            />
                          </div>
                          <div className="media-body">
                            {/* <h4>Blake Ruiz</h4>
                            <h5>12th Feb, 2017 at 05:56 pm</h5> */}

                            <form
                              className="row contact_form"
                              onSubmit={updateHandler}
                              id="contactForm"
                              noValidate="novalidate"
                            >
                              <div className="px-3 form-group">
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
                              
                        </div>
                        <p className="text-danger">{errors && errors.review_rate_edit }</p>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    name="message"
                                    id="message"
                                    rows="7"
                                    placeholder="Review"
                                    value={EditReviewBody}
                                    onChange={(e)=>setEditReviewBody(e.target.value)}
                                  >
                                  </textarea>
                                  <span className="text-danger">{errors && errors.review_body_edit}</span>
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
                      </div>




                     
                      
                     : 
                      
                       <div key={review.id} className="review_item mt-3">
                        <div className="media">
                          <div className="d-flex">
                            {/* {review.user_image} */}
                            <img
                              src={"http://localhost:8000/profile_photo/" + review.user_image}
                              alt=""
                              width="50"
                            />
                          </div>
                          <div className="media-body">
                            <h4>{review.user_name}</h4>
                            <h5>{(new Date(review.updated_at)).toLocaleString()}</h5>
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
                            {(JSON.parse(localStorage.getItem('user-info'))) !== null && (JSON.parse(localStorage.getItem('user-info')).id) === review.user_id && 
                             <div className="btn-group reply_btn">
                              <button
                                className="btn btn-light btn-sm dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i class="fa-solid fa-pen-to-square"></i>
                              </button>
                              <div className="dropdown-menu">
                                <button className="dropdown-item" onClick={()=>EditHandler(review.id)}>
                                  Edit
                                </button>
                                <button className="dropdown-item" onClick={() =>deleteHandler(review.id)}>
                                  Delete
                                </button>
                              </div>
                            </div>
                            }
                           
                                
                            {/* <a className="reply_btn" href="#">Edit</a> */}
                          </div>
                        </div>
                        <p>
                        {review.comment_body}
                        </p>
                      </div>
                      )
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
                {(JSON.parse(localStorage.getItem('user-info'))) !== null &&
                
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
                }
              </div>
              }
            </div>
          </div>
        </div>
      </section>
      </>
    : <>
      <p className="alret alert-danger text-center text-dark p-2 my-2" role="alert">There is no product with that name</p>
      </>}
    </> 
  );
};

export default SingleProduct;
