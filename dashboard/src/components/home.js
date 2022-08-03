import { useEffect, useState } from "react";

function Home(){

const [data, setData]= useState([]);

useEffect(() => {
  const fetchData = async () => {
      getData()
  };
  fetchData();
}, []);
async function getData(){
  const api = await fetch("http://127.0.0.1:8000/api/allcount");
  const allData = await api.json();
  setData(allData);
}



console.log(data)



    return (
        <div className="container-fluid position-relative d-flex p-0">
   
   
    {/* Content Start */}
    <div className="content">
    
      {/* Sale & Revenue Start */}
      
     
        
    <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
        
      
        
          <div className="col-sm-6 col-xl-3" >
            <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-users fa-3x text-primary" />
              <div className="ms-3">
                <p className="mb-2">Users</p>
                <h6 className="mb-0">{data.users}</h6>
              </div>
            </div>
          </div>
      
          <div className="col-sm-6 col-xl-3">
            <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
             
              <i className="fa fa-chart-bar fa-3x text-primary" />
              <div className="ms-3">
                <p className="mb-2">Business</p>
                <h6 className="mb-0">{data.businesses}</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-mobile fa-3x text-primary" />
              <div className="ms-3">
                <p className="mb-2">Products</p>
                <h6 className="mb-0">{data.products}</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
            
              <i className="fa fa-comments fa-3x text-primary" />
              <div className="ms-3">
                <p className="mb-2">Comments</p>
                <h6 className="mb-0">{data.comments}</h6>
              </div>
            </div>
          </div>
      
        </div>
      
      </div>
      {/* Sale & Revenue End */}
      {/* Sales Chart Start */}
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <div className="col-sm-12 col-xl-6">
            <div className="bg-secondary text-center rounded p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">Worldwide Sales</h6>
                <a href>Show All</a>
              </div>
              <canvas id="worldwide-sales" />
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="bg-secondary text-center rounded p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">Salse &amp; Revenue</h6>
                <a href>Show All</a>
              </div>
              <canvas id="salse-revenue" />
            </div>
          </div>
        </div>
      </div>
     
      
      {/* Footer Start */}
     
      {/* Footer End */}
    </div>
    {/* Content End */}
    {/* Back to Top */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
  </div>
    )
}
export default Home;