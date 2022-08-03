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
    const api = await fetch("http://127.0.0.1:8000/api/alluser");
    const allData = await api.json();
    setData(allData);
  }
  const deleteUser=(id)=>{
    fetch(`http://127.0.0.1:8000/api/deleteUser/${id}`)
    
     getData()
     alert("Delete User successfully")
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
                  <th scope="col">User Name</th>
                  <th scope="col">User Image </th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
              {data.map((product) => {
                    return (
                      <tr key={product.id}>
                        <th scope="row">{product.id}</th>
                        <td>{product.user_name}</td>
                        <td>
                          
                          <img
                            src={
                              "http://127.0.0.1:8000/profile_photo/" +
                              product.user_image
                            }
                            alt=""
                            style={{ width: "100px" }}
                          />
                        </td>
                        
                        <td>{product.user_email}</td>
                        <td>{product.user_role}</td>
                        <td>{product.user_status}</td>
                        {/* <Link  to={`/singlecategory/${product.id}`} className="btn btn-primary mt-auto align-self-start" >Edite</Link>*/}
                        <Link className="btn btn-primary mt-auto align-self-start" onClick={() =>deleteUser(product.id)} to=''> Delete</Link> 
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