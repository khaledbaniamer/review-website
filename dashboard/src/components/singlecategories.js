import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";




function Singlecategory() {
    const {id} = useParams();
    const [data, setdata] = useState([]);
 
    useEffect(  ()=> {
        fetch(`http://127.0.0.1:8000/api/singlecategory/${id}`) 
      .then((response)=> response.json())
      .then(data => {setdata(data);
          console.log(data);
          });
          },[]);

          const [category_name,setName]=useState('');
          const [category_image,setFile]=useState('');
         async function addCategory(){
            console.warn(category_name,category_image)
            const formData=new FormData();
        
            formData.append('category_name',category_name)
            formData.append('category_image',category_image)
            let result=await fetch(`http://127.0.0.1:8000/api/updatecategory/${id}`,{
                method: 'POST',
                body:formData
            });
            alert('Added category successfully')
          }
  return (
    <div className="content">
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <div class="col-sm-12 col-xl-12">
           
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="bg-secondary rounded h-100 p-4">
              <h6 className="mb-4">Edit Category </h6>
              <form>
                <div className="row mb-4">
                  
                  <div className="col-sm-10">
                    <label
                    htmlFor="inputEmail3"
                    className="form-label"
                    
                  >
                    Category Name
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      value={data.category_name}
                      onChange={(e)=>{setName(e.target.value)}}
                    />
                     <label htmlFor="formFile" className="form-label">
                      Category Image
                      </label>
                      <input
                        className="form-control bg-dark"
                        type="file"
                    //   value={data.category_image}
                    onChange={(e)=>{setFile(e.target.files[0])}}

                        
                      />
                      <img
                            src={
                              "http://127.0.0.1:8000/category_image/" +
                              data.category_image
                            }
                            alt=""
                            style={{ width: "300px" }}
                          />
                  </div>
                </div>
                
                <fieldset className="row mb-3">
               
                  <div className="col-sm-10">
                   
                  
                     
                   
                    
                  </div>
                </fieldset>
               
                <button onClick={addCategory} className="btn btn-primary">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}
export default Singlecategory;
