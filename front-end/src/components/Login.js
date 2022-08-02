
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";

function Login() {
    
    const [user_email,setEmail] =useState("");
    const [user_password,setPassword] = useState("");

    const navigate = useNavigate()

    function refreshPage() {
        window.location.reload(false);
      }


    useEffect(() => {
        if(localStorage.getItem('user-info')){
            navigate('/');
        }
    })

    async function login() {
        let user = {user_email,user_password}
        let result =await fetch("http://127.0.0.1:8000/api/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(user)
        })
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
       
        navigate('/');
        refreshPage();
    }
    return ( 
        <>
        <section className="banner_area">
                <div className="banner_inner d-flex align-items-center">
                    <div className="container">
                    <div className="banner_content d-md-flex justify-content-between align-items-center">
                        <div className="mb-3 mb-md-0">
                        <h1>Login</h1>
                        <h2><p>Signin into our website</p></h2>
                        </div>
                       
                    </div>
                    </div>
                </div>
            </section>


           <div className="m-5 col-lg-5 mx-auto">
                    <div className="mt-10">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email Address" required className="single-input" id="email"/>
                    </div>
                    <div className="mt-10">
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required className="single-input" id="password"/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button onClick={login} className="main_btn col-lg-3 mt-3" type="">Login</button>
                   </div>
           </div>
            </>

     );
}

export default Login;