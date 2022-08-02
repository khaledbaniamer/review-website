import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom';
 import Swal from 'sweetalert2';

function Register() {


    function refreshPage() {
        window.location.reload(false);
      }

      
    const [user_name,setName] = useState("");
    const [user_email,setEmail] = useState("");
    const [user_password,setPassword] = useState("");

    const navigate = useNavigate()

    async function signUp() {
        let user = {user_name,user_email,user_password};

        let result = await fetch("http://127.0.0.1:8000/api/register", {
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
        if(user_name.length===0){
            Swal.fire({
                icon: 'error',
                text: 'Confirm your name',
                confirmButtonText: 'OK',
                confirmButtonColor: '#71cd14',
            })
        }
        else if(user_email.length===0){
            Swal.fire({
                icon: 'error',
                text: 'Confirm your email',
                confirmButtonText: 'OK',
                confirmButtonColor: '#71cd14',
            })
        }
        else if(user_password.length===0){
            Swal.fire({
                icon: 'error',
                text: 'Confirm your password',
                confirmButtonText: 'OK',
                confirmButtonColor: '#71cd14',
            })
        } else {
            navigate('/');
            refreshPage();
        }
       
       
        
    }

    return ( 
        <>
        <section className="banner_area">
                <div className="banner_inner d-flex align-items-center">
                    <div className="container">
                    <div className="banner_content d-md-flex justify-content-between align-items-center">
                        <div className="mb-3 mb-md-0">
                        <h1 >Register</h1>
                        <h2><p>Create an account in our website</p></h2>
                        </div>
                       
                    </div>
                    </div>
                </div>
            </section>

            <div className="m-5 col-lg-5 mx-auto">
      
                    <div className="mt-4">
                        <input type="text" value={user_name} onChange={(e) => setName(e.target.value)} name="user_name" placeholder="Enter Your Full Name" required className="single-input" id='name' />
                    </div>

                    <div className="mt-4">
                        <input type="text" value={user_email} onChange={(e) => setEmail(e.target.value)} name="user_email" placeholder="Enter Your Email" required className="single-input" id='email'/>
                    </div>

                    <div className="mt-4">
                        <input type="password" value={user_password} onChange={(e) => (setPassword(e.target.value))} name="user_password" placeholder="Enter Your Password" required className="single-input" id='password' />
                    </div>

                   <div className="d-flex justify-content-center">
                   <button onClick={signUp} className="main_btn col-lg-3 mt-3">Register</button>
                   </div>


           </div>
        </>

     );
}

export default Register;