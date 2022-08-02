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
  const state = useSelector(state=>state)
  const singleBusiness = useSelector(state=>state.business.products);
  const avaRate = useSelector(state=>state.business.ava_rate);



// console.log(state)
//  console.log(avaRate) 
 console.log(singleBusiness)
let  allProducts ;

if(singleBusiness.length >0){


 allProducts = singleBusiness.map((product , index)=>{
  console.log(index)
  return(
    
    <div key={index} className="col-lg-4 col-md-6">
    <div className="single-product">
      <div className="product-img">
        <img width = '200px' height = '300px'
          className="card-img"
          src={"http://localhost:8000/product_image/" + product.product_image}
          alt=""
        />
      </div>
      <div className="product-btm">
        <a href="#" className="d-block">
          <span>{product.product_name}</span>
        </a>
        <div className="mt-3">
          <h4 className="mr-4">{product.product_description}</h4>
          
        </div>
        <div className="review_item">
      <div className="media">

      </div>
        <div className="mt-1 d-flex justify-content-between align-items-center">
        <div className="small-ratings mt-3">
        {
        (() => {
          

            // console.log(avaRate[j])
            if(avaRate[index]){

            
            if (product.prodID == avaRate[index].prod_id) {
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
          </div>
      </div>
      </div>
    </div>
  </div>
  )
})

} 



  // console.log(id)
    return(
    
<div className="row py-5 px-4">
<div className="col-xl-11 col-md-6 col-sm-10 mx-auto">

  
{/* <div className="bg-white shadow rounded overflow-hidden">
    <div className="px-4 pt-0 pb-4 ">
        <div className="media  profile-header">
            <div className="profile mr-3">
               {singleBusiness[0] && <img src={'http://127.0.0.1:8000/profile_photo/'+ singleBusiness[0].profile_photo} width="200" className="rounded mb-2 img-thumbnail" />}
               {singleBusiness && <img src={'http://127.0.0.1:8000/profile_photo/'+ singleBusiness.profile_photo} width="200" className="rounded mb-2 img-thumbnail" />}
               <a href="#" className="btn btn-dark btn-sm btn-block">Products</a></div>
            <div className="media-body mb-5 text-white ">
                <div className="row container-fluid">
                    <div className="col-xl-5 col-md-6 col-sm-10 m-2">
                    <h2>
                        <span style={{color:"black"}}>Name:</span>
                       
                        <span className="mx-2" style={{color:"#71cd14"}}>{singleBusiness[0] && singleBusiness[0].owner_name}</span>
                        <span className="mx-2" style={{color:"#71cd14"}}>{singleBusiness && singleBusiness.owner_name}</span>
                
                      </h2> 
                    </div>
                    <div className="col-xl-5 col-md-6 col-sm-10 m-2">
                    <h2>
                        <span style={{color:"black"}}>Email:</span>
                        
                          <span className="mx-2" style={{color:"#71cd14"}}>{singleBusiness[0] && singleBusiness[0].owner_email}</span>
                          <span className="mx-2" style={{color:"#71cd14"}}>{singleBusiness && singleBusiness.owner_email}</span>
                
                      </h2> 
                    </div>
                    <div className="col-xl-5 col-md-6 col-sm-10 m-2">
                      <h2>
                        <span style={{color:"black"}}>Phone:</span>
                       
                        <span className="mx-2" style={{color:"#71cd14"}}>{singleBusiness[0] && singleBusiness[0].address}</span>
                        <span className="mx-2" style={{color:"#71cd14"}}>{singleBusiness && singleBusiness.address}</span>
                
                      </h2>  
                    </div>
                    <div className="col-xl-5 col-md-6 col-sm-10 m-2">
                      <h2>
                        <span style={{color:"black"}}>Category Name :</span>
                       
                        <span className="mx-2" style={{color:"#71cd14"}}>{singleBusiness[0] && singleBusiness[0].category_name}</span>
                        <span className="mx-2" style={{color:"#71cd14"}}>{singleBusiness && singleBusiness.category_name}</span>
                
                      </h2>  
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div className="bg-light p-4 justify-content-start text-start">
        <h3>Description :</h3>
        <h4>{singleBusiness[0] && singleBusiness[0].description}</h4>
        <h4>{singleBusiness && singleBusiness.description}</h4>
    </div>

    <div className="py-4 px-4">
        <div className="mb-5">
            <h3 className="mb-0 text-center">Products</h3>
        </div>
<section className="cat_product_area">
<div className="container">
<div className="row">
  <div className="col-lg-12">
    <div className="latest_product_inner">
      <div className="row">

      { allProducts ? allProducts : <h4 className="m-5">This Business does not have products yet </h4>}
       
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

</div> */}
    <section class="ftco-section ftco-no-pb">
    <header class="header">
        <div class="container-fluid">
          <div class="teacher-name" style={{paddingTop:"20px"}}>
            <div class="row mt-2" style={{marginTop:"0px"}}>
            <div class="col-md-8 p-2" style={{float:"right"}}>
              <h2>Business Name : 
                <strong>
                  {singleBusiness[0] && singleBusiness[0].owner_name}
                  {singleBusiness && singleBusiness.owner_name}
                </strong>
              </h2>
            </div>
    
                
            <div class="col-md-8 ">
              {/* <div class="button" >
                <a href="/edit_assoc/{{$assoc->id}}" class="btn btn-primary">Edit Profile</a>
              </div> */}
            </div>
    
            </div>
          </div>
    
          <div class="row" style={{marginTop:"20px"}}>
            <div class="col-md-3"> 
              <a href="#"> <img class="rounded-circle" src="https://static.remove.bg/remove-bg-web/36b50c4385f75bb65509f63b1e81f99fe2b334fc/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" alt="Kamal" style={{width:"200px",height:"200px"}} /></a>
            </div>
    
            <div class="col-md-3 my-auto"> 
              <h4  >Catrgory : <span>test</span></h4>

            </div>
            <div class="col-md-3 my-auto"> 

              <h5> Address  : 
                <strong>
                {singleBusiness[0] && singleBusiness[0].address} 
                {singleBusiness && singleBusiness.address} 
                </strong> 
              </h5>
  
            </div>
            <div class="col-md-3 my-auto"> 

              <h5>Email:
                 <strong>
                    {singleBusiness[0] && singleBusiness[0].owner_email}
                    {singleBusiness && singleBusiness.owner_email}
                  </strong> 
                </h5>
            </div>

    
          </div>
        </div>
      </header>
 
    
  
      <div class="container mt-5">
    

      <div class="row">
            <div class="col-md-12">
              <div class="card card-block text-xs-left">
                <h2 class="card-title m-2" >Description</h2>
                <div style={{height: "15px"}}></div>
                  <h4 class="mx-3">
                    {singleBusiness[0] && singleBusiness[0].description}
                    {singleBusiness && singleBusiness.description}
                  </h4>
              </div>
            </div>
          </div>
  

    </div> 
{/*     
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
      <script src="js/bootstrap.min.js"></script> */}
</section>
<div className="py-2 px-4">
        <div className="mb-3">
            <h3 className="mt-5 text-center">Products</h3>
        </div>
</div>        
<section className="cat_product_area">
<div className="container">
<div className="row">
  <div className="col-lg-12">
    <div className="latest_product_inner">
      <div className="row mb-5">

      { allProducts ? allProducts : <h4 className="m-5 col-lg-11 text-center ">This Business does not have products yet </h4>}
       
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




    )
}

export default Business_profile;