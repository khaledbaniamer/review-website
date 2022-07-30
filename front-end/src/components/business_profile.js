import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getBusinesses, getProductsForSingleBusiness, getSingleBusiness } from "../Store/Slices/businessSlice";
import { getSingleCategory } from "../Store/Slices/categorySlice";

const Business_profile = ()=>{
  const dispatch = useDispatch();

//  const [data , setData] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    dispatch(getProductsForSingleBusiness(id))
    
  }, [dispatch])
  const singleBusiness = useSelector(state=>state.business.products);
  // dispatch(getProductsForSingleBusiness(id))
  

 console.log(singleBusiness)
  
const allProducts = singleBusiness.map((product , index)=>{
  return(
    
    <div key={index} class="col-lg-4 col-md-6">
    <div class="single-product">
      <div class="product-img">
        <img
          class="card-img"
          src={"http://localhost:8000/category_image/" + product.product_image}
          alt=""
        />
      </div>
      <div class="product-btm">
        <a href="#" class="d-block">
          <span>{product.product_name}</span>
        </a>
        <div class="mt-3">
          <h4 class="mr-4">{product.product_description}</h4>
          
        </div>
        <div class="review_item">
      <div class="media">

      </div>
        <div class="mt-1 d-flex justify-content-between align-items-center">
        <div class="small-ratings mt-3">
              <i class="fa fa-star rating-color"></i>
              <i class="fa fa-star rating-color"></i>
              <i class="fa fa-star rating-color"></i>
              <i class="fa fa-star rating-color"></i>
              <i class="fa fa-star"></i>
          </div>
          </div>
      </div>
      </div>
    </div>
  </div>
  )
})

  
  // console.log(id)
    return(
    
<div className="row py-5 px-4">
    <div className="col-xl-11 col-md-6 col-sm-10 mx-auto">

  
        <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 pt-0 pb-4 ">
                <div className="media  profile-header">
                    <div className="profile mr-3"><img src="https://bootstrapious.com/i/snippets/sn-profile/teacher.jpg" alt="..." width="200" className="rounded mb-2 img-thumbnail"/><a href="#" className="btn btn-dark btn-sm btn-block">Products</a></div>
                    <div className="media-body mb-5 text-white ">
                        <div className="row container-fluid">
                            <div className="col-xl-5 col-md-6 col-sm-10 m-2">
                            <h2>
                                <span style={{color:"black"}}>Name:</span>
                               
                                <span className="mx-2" style={{color:"#71cd14"}}>{singleBusiness[0] && singleBusiness[0].owner_name}</span>
                        
                              </h2> 
                            </div>
                            <div className="col-xl-5 col-md-6 col-sm-10 m-2">
                            <h2>
                                <span style={{color:"black"}}>Email:</span>
                                
                                  <span className="mx-2" style={{color:"#71cd14"}}>{singleBusiness[0] && singleBusiness[0].owner_email}</span>
                        
                              </h2> 
                            </div>
                            <div className="col-xl-5 col-md-6 col-sm-10 m-2">
                              <h2>
                                <span style={{color:"black"}}>Phone:</span>
                               
                                <span className="mx-2" style={{color:"#71cd14"}}>{singleBusiness[0] && singleBusiness[0].address}</span>
                        
                              </h2>  
                            </div>
                            <div className="col-xl-5 col-md-6 col-sm-10 m-2">
                              <h2>
                                <span style={{color:"black"}}>Category Name :</span>
                               
                                <span className="mx-2" style={{color:"#71cd14"}}>{singleBusiness[0] && singleBusiness[0].category_name}</span>
                        
                              </h2>  
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-light p-4 justify-content-start text-start">
                <h3>Description :</h3>
                <h4>{singleBusiness[0] && singleBusiness[0].description}</h4>
            </div>

            <div className="py-4 px-4">
                <div className="mb-5">
                    <h3 className="mb-0 text-center">Products</h3>
                </div>
<section class="cat_product_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="latest_product_inner">
              <div class="row">

              {allProducts}
               
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
                <div className="py-4">
                    <h5 className="mb-3">Recent posts</h5>
                    <div className="p-4 bg-light rounded shadow-sm">
                        <p className="font-italic mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <ul className="list-inline small text-muted mt-3 mb-0">
                            <li className="list-inline-item"><i className="fa fa-comment-o mr-2"></i>12 Comments</li>
                            <li className="list-inline-item"><i className="fa fa-heart-o mr-2"></i>200 Likes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>


    )
}

export default Business_profile;