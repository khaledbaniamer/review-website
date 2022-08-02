import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../Store/Slices/categorySlice";
import { addBusiness, update_role } from "../Store/Slices/businessSlice";
import { useNavigate } from "react-router-dom";

function BussnisRegister() {
    const user_id = JSON.parse(localStorage.getItem('user-info')).id;
    const dispatch = useDispatch();
    const Navigate = useNavigate()
    const errors = useSelector(state=>state.business.errors)
    // console.log(user_id)
    useEffect(() => {
    
    dispatch(getCategory())
      
    }, [dispatch])
    
    const categories = useSelector(state=>state.category);
 
    const allCategories = categories.categories.map(category=>{
        return(
            <option key={category.id} value={category.id}>{category.category_name}</option>
        )
    })
    const [business , setBusiness] = useState({

    });
    const handleChangeImage1=(e)=>{
        setBusiness(
           { ...business,
            credential_photo: e.target.files[0]}
        )
    }
    const handleChangeImage2=(e)=>{
        setBusiness(
           { ...business,
            profile_photo: e.target.files[0]}
        )
    }

    const handleChange = (e)=>{
        e.preventDefault()
        let value = e.target.value
        setBusiness({
            ...business,
            [e.target.name]:value
    })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const value = e.target.value;
        setBusiness({
            ...business,
        })
        // console.log(business);
        const formData = new FormData();
        formData.append('owner_name', business.owner_name?business.owner_name:"")
        formData.append('owner_email', business.owner_email?business.owner_email:"")
        formData.append('description', business.description?business.description:"")
        formData.append('password', business.password?business.password:"")
        formData.append('address', business.address?business.address:"")
        formData.append('credential_photo', business.credential_photo);
        formData.append('profile_photo', business.profile_photo);
        formData.append('category_id',parseInt(business.category_id)?parseInt(business.category_id):"");

        dispatch(addBusiness(formData));

        dispatch(update_role(user_id));

        Navigate('/business')
    }
    // console.log(business)

    return ( 
        <>
        <section className="banner_area">
                <div className="banner_inner d-flex align-items-center">
                    <div className="container">
                    <div className="banner_content d-md-flex justify-content-between align-items-center">
                        <div className="mb-3 mb-md-0">
                        <h1 >Register </h1>
                        <h2><p>Create an account in our website</p></h2>
                        </div>
                        <div className="page_link">
                       
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <div className="m-5 col-lg-5 mx-auto">
            <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                    <label for="" className="form-label">Full Name</label>
                        <input 
                        type="text" 
                        name="owner_name" 
                        placeholder="Enter Your Name" 
                         
                        className="single-input" 
                        value={business.owner_name}
                        onChange={handleChange}
                        />
                        <span className="text-danger">{errors && errors.owner_name}</span>
                    </div>
                    <div className="mt-4">
                    <label >Select category:</label>
                      <select name="category_id"
                        className="single-input p-3"
                        onChange={handleChange}
                      >
                        <option >Select category</option>
                            {allCategories}
                      </select>
                      <span className="text-danger">{errors && errors.category_id}</span>
                    </div>
                    <div className="mt-4">
                    <label for="" className="form-label">Email</label>

                        <input 
                        type="email" 
                        name="owner_email" 
                        placeholder="Enter Your Email" 
                         
                        className="single-input" 
                        value={business.owner_email}
                        onChange={handleChange}
                        />
                        <span className="text-danger">{errors && errors.owner_email}</span>
                    </div>
                    <div className="mt-4">
                    <label for="" className="form-label">Password</label>

                        <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter Your Password" 
                         
                        className="single-input" 
                        value={business.password}
                        onChange={handleChange}
                        />
                        <span className="text-danger">{errors && errors.password}</span>
                    </div>
                    <div className="mt-4">
                    <label for="" className="form-label">Address</label>

                        <input 
                        type="text" 
                        name="address" 
                        placeholder="Enter Your Address" 
                         
                        className="single-input"
                        value={business.address}
                        onChange={handleChange}
                        />
                        <span className="text-danger">{errors && errors.address}</span>
                    </div>
                    <div className="mt-4">
                    <label for="" className="form-label">Credential Photo</label>

                        <input 
                        type="file" 
                        name="credential_photo" 
                        placeholder="Enter Your Address" 
                         
                        className="single-input"
                        // value={business}
                        onChange={handleChangeImage1}
                        />
                    </div>
                    <span className="text-danger">{errors && errors.credential_photo}</span>
                    <div className="mt-4">
                    <label for="" className="form-label">Profile Photo</label>

                        <input 
                        type="file" 
                        name="profile_photo" 
                        placeholder="Enter Your Address" 
                         
                        className="single-input" 
                        // value={business}
                        onChange={handleChangeImage2}
                        />
                        <span className="text-danger">{errors && errors.profile_photo}</span>
                    </div>

                    <div className="mt-4">
                    <label for="" className="form-label">Business Description</label>

                <textarea 
                name="description" 
                className="d-flex justify-content-center single-input"
                value={business.description}
                onChange={handleChange}
                ></textarea>
                <span className="text-danger">{errors && errors.description}</span>
                    </div>
                   <div className="d-flex justify-content-start">
                   <button href="#" className="main_btn col-lg-3 mt-3">Register</button>
                   </div>
                </form>
           </div>

        </>

     );
}

export default BussnisRegister;