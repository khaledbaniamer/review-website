import { useState,useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";




function Products(){

  const [data, setData]= useState([]);
  useEffect(() => {
    const fetchData = async () => {
        getData()
    };
    fetchData();
  }, []);
  async function getData(){
    const api = await fetch("http://127.0.0.1:8000/api/allbusiness_products");
    const allData = await api.json();
    setData(allData);
  }
  const deleteProduct=(id)=>{
    fetch(`http://127.0.0.1:8000/api/deleteproduct/${id}`)
    
     getData()
     alert("Delete Product successfully")
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
                  <th scope="col">Product Name</th>
                  <th scope="col">Product Image 1</th>
                  <th scope="col">Product Image 2</th>
                  <th scope="col">Product Image 3</th>
                  <th scope="col">Product description</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
              {data.map((product) => {
                    return (
                      <tr key={product.id}>
                        <th scope="row">{product.id}</th>
                        <td>{product.product_name}</td>
                        <td>
                          
                          <img
                            src={
                              "http://127.0.0.1:8000/product_image/" +
                              product.product_image
                            }
                            alt=""
                            style={{ width: "100px" }}
                          />
                        </td>
                        <td>
                          
                          <img
                            src={
                              "http://127.0.0.1:8000/product_image/" +
                              product.product_image1
                            }
                            alt=""
                            style={{ width: "100px" }}
                          />
                        </td>
                        <td>
                          
                          <img
                            src={
                              "http://127.0.0.1:8000/product_image/" +
                              product.product_image2
                            }
                            alt=""
                            style={{ width: "100px" }}
                          />
                        </td>
                        <td>{product.product_description}</td>
                        {/* <Link  to={`/singlecategory/${product.id}`} className="btn btn-primary mt-auto align-self-start" >Edite</Link>*/}
                        <Link className="btn btn-primary mt-auto align-self-start" onClick={() =>deleteProduct(product.id)} to=''> Delete</Link> 
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
export default Products;