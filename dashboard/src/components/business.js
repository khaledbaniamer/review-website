import { useState,useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";




function Users(){

  const [data, setData]= useState([]);


  useEffect(() => {
    const fetchData = async () => {
        getData()
    };
    fetchData();
  }, []);
  async function getData(){
    const api = await fetch("http://127.0.0.1:8000/api/allbusiness");
    const allData = await api.json();
    setData(allData);
  }
  const deleteUser=(id)=>{
    fetch(`http://127.0.0.1:8000/api/deletebusiness/${id}`)
    
     getData()
     alert("Delete User successfully")
  }
  const active=(id)=>{
    fetch(`http://127.0.0.1:8000/api/avtiveBusniss/${id}`)
    
  



     getData()
     alert(" The User is  active ")
  }
  const notactive=(id)=>{
    fetch(`http://127.0.0.1:8000/api/notavtiveBusniss/${id}`)
    
  



     getData()
     alert(" The User is not active ")
  }
    return (
        <div className="content">
        <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
        <div class="col-sm-12 col-xl-6">
                        
                    </div>
          
          <div className="col-12">
        <div className="bg-secondary rounded h-100 p-4">
          <h6 className="mb-4">Responsive Table</h6>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Owner Name</th>
                  
                  <th scope="col">Email</th>
                  <th scope="col">Description</th>
                  <th scope="col">Address</th>
                  <th scope="col">User Image </th>
                  <th scope="col">Status</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action </th>

                  



                </tr>
              </thead>
              <tbody>
              {data.map((busniess) => {
                    return (
                      <tr key={busniess.id}>
                        <th scope="row">{busniess.id}</th>
                        <td>{busniess.owner_name}</td>
                       
                        
                        <td>{busniess.owner_email}</td>
                        <td>{busniess.description}</td>
                        <td>{busniess.address}</td>
                        <td>
                          
                          <img
                            src={
                              "http://127.0.0.1:8000/business_image/" +
                              busniess.profile_photo
                            }
                            alt=""
                            style={{ width: "100px" }}
                          />
                        </td>
                        <td>
                          
                          {busniess.business_status}</td>

                        
                          <td><Link className="btn btn-primary mt-auto align-self-start" onClick={() =>active(busniess.id)} to=''> Active/not</Link> 
                         </td>
                       
                       <td> <Link className="btn btn-primary mt-auto align-self-start" onClick={() =>deleteUser(busniess.id)} to=''> Delete</Link> </td>
                        {/* <td> <Link to={'http://127.0.0.1:8000/api/deletecategory/'+category.id} className="btn btn-primary mt-auto align-self-start">Delete</Link></td>          */}
                                     </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
          
          
         
         
          
        </div>
      </div>
      </div>
    )
}
export default Users;