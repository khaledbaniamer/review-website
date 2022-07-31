import { useState } from "react"




function Products(){

  const [data, setData]= useState([]);
  async function getData(){
    const api = await fetch("http://127.0.0.1:8000/api/allproducts");
    const allData = await api.json();
    setData(allData);
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
      </div>
          
          
         
         
          
        </div>
      </div>
      </div>
    )
}
export default Products;