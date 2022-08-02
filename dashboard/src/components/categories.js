import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Categories() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        getData()
    };
    fetchData();
  }, []);

  const deleteCategorie=(id)=>{
    fetch(`http://127.0.0.1:8000/api/deletecategory/${id}`)
    
     getData()
     alert("Delete category successfully")
  }
 async function getData(){
    const api = await fetch("http://127.0.0.1:8000/api/category");
    const allData = await api.json();
    setData(allData);
  }
  const [category_name,setName]=useState('');
  const [category_image,setFile]=useState('');
 async function addCategory(){
    console.warn(category_name,category_image)
    const formData=new FormData();

    formData.append('category_name',category_name)
    formData.append('category_image',category_image)
    let result=await fetch("http://127.0.0.1:8000/api/addcategory",{
        method: 'POST',
        body:formData
    });
    alert('Added category successfully')
  }
  return (
    <div className="content">
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
        <div className="col-sm-12 col-xl-12">
            <div className="bg-secondary rounded h-100 p-4">
              <h6 className="mb-4">Add Category</h6>
              <form>
                <div className="row mb-4">
                  
                  <div className="col-sm-5">
                    <label
                    htmlFor="inputEmail3"
                    className="form-label"
                  >
                    Category Name
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail3"
                      onChange={(e)=>{setName(e.target.value)}}
                    />
                     <label htmlFor="formFile" className="form-label">
                      Category Image
                      </label>
                      <input
                        className="form-control bg-dark"
                        type="file"
                        id="formFile"
                      onChange={(e)=>{setFile(e.target.files[0])}}

                      />
                  </div>
                </div>
                
                <fieldset className="row mb-3">
               
                  <div className="col-sm-10">
                   
                  
                     
                   
                    
                  </div>
                </fieldset>
               
                <button onClick={addCategory} className="btn btn-primary">
                  Add Category
                </button>
              </form>
            </div>
            
          </div>
          <div class="col-sm-12 col-xl-12">
            <div class="bg-secondary rounded h-100 p-4">
              <h6 class="mb-4">All Category </h6>
              <table class="table table-responsive">
                <thead>
                  <tr>
                    <th scope="col">Category Id</th>
                    <th scope="col">Category Name</th>
                    <th scope="col">Category Image</th>
                    <th scope="col">Action</th>

                  </tr>
                </thead>
                <tbody>
                  {data.map((category) => {
                    return (
                      <tr key={category.id}>
                        <th scope="row">{category.id}</th>
                        <td>{category.category_name}</td>
                        <td>
                          
                          <img
                            src={
                              "http://127.0.0.1:8000/category_image/" +
                              category.category_image
                            }
                            alt=""
                            style={{ width: "100px" }}
                          />
                        </td>
                        <Link  to={`/singlecategory/${category.id}`} className="btn btn-primary mt-auto align-self-start " >Edit</Link>
                        <Link className="btn btn-primary mt-auto align-self-start" onClick={() =>deleteCategorie(category.id)} to='' > Delete</Link>
                        {/* <td> <Link to={'http://127.0.0.1:8000/api/deletecategory/'+category.id} className="btn btn-primary mt-auto align-self-start">Delete</Link></td>          */}
                                     </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* <div className="col-12">
            <div className="bg-secondary rounded h-100 p-4">
              <h6 className="mb-4">Responsive Table</h6>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Country</th>
                      <th scope="col">ZIP</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>John</td>
                      <td>Doe</td>
                      <td>jhon@email.com</td>
                      <td>USA</td>
                      <td>123</td>
                      <td>Member</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>mark@email.com</td>
                      <td>UK</td>
                      <td>456</td>
                      <td>Member</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>jacob@email.com</td>
                      <td>AU</td>
                      <td>789</td>
                      <td>Member</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Categories;
