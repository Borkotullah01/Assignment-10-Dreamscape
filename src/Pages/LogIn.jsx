import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';

const LogIn = () => {

    const { LogInUser, GoogleLogIn, GithubLogIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        LogInUser(email, password)
        .then(currentUser=>{
            console.log(currentUser)
            navigate(location.state ? location.state : "/")
            Swal.fire({
                icon: "success",
                title: "Congratulation",
                text: "You are successfully Logged In.",
              });
            
        })
        .catch(error=>{
            console.log(error.code)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Incorrect username or password.",
              });
        })
    }

    const SocialLogin = (LoginProvider) => {
        LoginProvider()
        .then(result=>{
            console.log(result.user)
            navigate(location.state)
            Swal.fire({
                icon: "success",
                title: "Congratulation",
                text: "You are successfully Logged In.",
              });
        })
        .catch(error=>{
            console.log(error.code)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Incorrect username or password.",
              });
        })
    }

    return (
        <div className='py-10 bg-white'>
            <div className="card mx-auto bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                
              <form onSubmit={handleLogin} className="card-body">
              <h1 className='text-center mb-6 text-5xl font-rancho'>Login Now</h1>
                <div className="form-control mt-8">
                    <input type="email" name='email' placeholder="Username or Email" className="text-base bg-transparent outline-none border-b-2 w-full" required />
                </div>
                <div className="form-control mt-8">
                    <input type="password" name='password' placeholder="Password" className="text-base bg-transparent outline-none border-b-2 w-full" required />
                </div>
                <div className="form-control mt-8">
                  <button className="text-white btn bg-[#fa4771] hover:bg-[#F05A7E]">Login</button>
                </div>
                <div className="font-poppins text-base">
                    <p className="text-center">Don't have an account? <Link to={"/registration"} className='hover:link text-[#fa4771]'>Create an account</Link></p>
                </div>
                <div className='flex gap-2 items-center font-poppins py-4 text-base'>
                    <hr className='border w-full'></hr>
                    OR
                    <hr className='border w-full'></hr>
                </div>
                <div className="flex gap-4 justify-center">
                <Link onClick={()=>SocialLogin(GoogleLogIn)} className="text-4xl">
                    <FcGoogle />
                </Link>
                <Link onClick={()=>SocialLogin()} className="text-4xl text-[#362FD9]">
                    <FaFacebook/>
                </Link>
                <Link onClick={()=>SocialLogin(GithubLogIn)} className="text-4xl">
                    <FaGithub />
                </Link>
                <Link onClick={()=>SocialLogin()} className="text-4xl text-[#0D92F4]">
                    <FaTwitter />
                </Link>
                </div>
              </form>
            </div>
        </div>
    );
};

export default LogIn;