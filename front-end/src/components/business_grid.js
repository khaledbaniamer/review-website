import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getBusinesses } from "../Store/Slices/businessSlice";


const Business = ()=>{
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBusinesses())
  }, [dispatch])
  
  const businesses = useSelector(state=>state.business);
  const allBusiness = businesses.businesses.map(business=>{
    return(
      <div key={business.id} className="card mb-3" style={{maxWidth: "100%"}}>
        <div className="row g-0">
            <div className="col-md-3">
                    <img
                        src={'http://localhost:8000/profile_photo/'+business.profile_photo}
                        alt="Trendy Pants and Shoes"
                        className="img-fluid rounded-start"
                        />
                  </div>
                  <div className="col-md-8  d-flex ">
                  <div className="card-body">
                        <h5 className="card-title">{business.owner_name}</h5>
                        <p className="card-text">
                        {business.description}
                        </p>
                        <p className="card-text">
                        <small className="text-muted">{(new Date(business.created_at)).toLocaleString()}</small>
                        </p>
                  </div>
                    <NavLink to={"/business_profile/"+business.id} className="main_btn align-self-end mb-4 mx-2">Red More</NavLink>
              </div>
          </div>
          </div>

    );
  });
  // console.log(allBusiness)
  
    return(
        <>

<section className="banner_area">

      <div className="banner_inner d-flex align-items-center">
        <div className="container">
          <div className="banner_content d-md-flex justify-content-between align-items-center">
            <div className="mb-3 mb-md-0">
              <h2>Business Category</h2>
              <p>Very us move be blessed multiply night</p>
            </div>
            <div className="page_link">
              <NavLink style={{fontWeight: 900 , color: 'black'}} to="/">Home</NavLink>
              <NavLink style={{fontWeight: 900 , color: 'black'}} to="">Business profiles</NavLink>
              {/* <NavLink to="category.html">Women Fashion</NavLink> */}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cat_product_area section_gap">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-9">
            <div className="product_top_bar">
              <div className="left_dorp">
                <select className="sorting">
                  <option value="1">Default sorting</option>
                  <option value="2">Default sorting 01</option>
                  <option value="4">Default sorting 02</option>
                </select>
                <select className="show">
                  <option value="1">Show 12</option>
                  <option value="2">Show 14</option>
                  <option value="4">Show 16</option>
                </select>
              </div>
            </div>
            
            <div className="latest_product_inner">
              {allBusiness}
            </div>
          </div>

          <div className="col-lg-3">
            <div className="left_sidebar_area">
              <aside className="left_widgets p_filter_widgets">
                <div className="l_w_title">
                  <h3>Browse Categories</h3>
                </div>
                <div className="widgets_inner">
                  <ul className="list">
                    <li>
                      <NavLink to="#">Frozen Fish</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Dried Fish</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Fresh Fish</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Meat Alternatives</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Fresh Fish</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Meat Alternatives</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Meat</NavLink>
                    </li>
                  </ul>
                </div>
              </aside>



            </div>
          </div>
        </div>
      </div>
    </section>
 
        </>
    )
}

export default Business;