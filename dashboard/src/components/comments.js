import { useState,useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";




function Comments(){

  const [data, setData]= useState([]);
  useEffect(() => {
    const fetchData = async () => {
        getData()
    };
    fetchData();
  }, []);
  async function getData(){
    const api = await fetch("http://127.0.0.1:8000/api/ShowallComments");
    const allData = await api.json();
    setData(allData);
  }
  const deleteUser=(id)=>{
    fetch(`http://127.0.0.1:8000/api/deleteComment/${id}`)
    
     getData()
     alert("Delete Comment successfully")
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
                  <th scope="col">Product Name </th>
                  <th scope="col">Comment</th>
                  <th scope="col">Comment Rate</th>
                  
                  
                </tr>
              </thead>
              <tbody>
              {data.map((comment) => {
                    return (
                      <tr key={comment.id}>
                        <th scope="row">{comment.id}</th>
                        <td>{comment.user_name}</td>
                        <td>{comment.product_name}</td>
                        
                          
                         
                        
                        <td>{comment.comment_body}</td>
                        <td>{comment.comment_rate}</td>
                
                        {/* <Link  to={`/singlecategory/${product.id}`} className="btn btn-primary mt-auto align-self-start" >Edite</Link>*/}
                        <Link className="btn btn-primary mt-auto align-self-start" onClick={() =>deleteUser(comment.id)} to=''> Delete</Link> 
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






export default Comments;