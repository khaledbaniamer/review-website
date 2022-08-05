import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";




function Singlecategory() {
    const {id} = useParams();
    const [data, setData] = useState({});
    const [category_name,setName]=useState();
    const [category_image,setFile]=useState('');
 
    useEffect(  ()=> {
        fetch(`http://127.0.0.1:8000/api/singlecategory/${id}`) 
      .then((response)=> response.json())
      .then(data => {setData(data);
        setName(data.category_name);
          // console.log(data);
          });
          },[]);

 console.log(data);
 const navigation=useNavigate()
         async function addCategory(e){
          e.preventDefault();
            console.warn(category_name,category_image)
            const formData=new FormData();
        
            formData.append('category_name',category_name)
            formData.append('category_image',category_image)
            let result=await fetch(`http://127.0.0.1:8000/api/updatecategory/${id}`,{
                method: 'POST',
                body:formData
            });
            alert('Edit category successfully')
             navigation('/categories');
          }
           
        //  console.log(data.category_name);
        //  console.log(category_name);

  return (
  
    <div className="content">
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <div class="col-sm-12 col-xl-12">
          <Link className="btn btn-primary mt-auto align-self-start" style={{backgroundColor: '#0b6d73', color:'white'}}   to='/categories'>           <i class="fa fa-arrow-circle-left" aria-hidden="true"> Back</i>
</Link> 
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
                      value={category_name}
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
                 Edit
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
