import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../../Firebase.config';
import Swal from 'sweetalert2';

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const FirstName = form.firstName.value;
        const LastName = form.lastName.value;
        const Email = form.email.value;
        const Photo = form.photo.value;
        const Password = form.password.value;
        const user = {FirstName, LastName, Email, Photo, Password};
        createUser(Email, Password)
        .then(currentuser=>{
            console.log(currentuser);
            updateProfile(auth.currentUser, {
                displayName: LastName, photoURL: Photo
              }).then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Congratulation",
                    text: "You are successfully registered..",
                  });
                  navigate("/user-profile")
              }).catch((error) => {
                alert(error.code)
              });
        })
        .catch(error=>console.log(error.code))
    }

    return (
        <div className='bg-white py-10'>
            <div className="max-w-xl mx-auto border-2 rounded-xl p-14 border-[#F05A7E]">
                <h1 className='text-[#F05A7E] text-6xl text-center font-rancho pb-10'>Register Now</h1>
                <form onSubmit={handleRegister} className='space-y-10 my-5 font-poppins'>
                    <div>
                        <input type="text" name='firstName' placeholder="First Name" className="text-base bg-transparent outline-none border-b-2 w-full" />
                    </div>
                    <div>
                        <input type="text" name='lastName' placeholder="Last Name" className="text-base bg-transparent outline-none border-b-2 w-full" />
                    </div>
                    <div>
                        <input type="email" name='email' placeholder="Email" className="text-base bg-transparent outline-none border-b-2 w-full" />
                    </div>
                    <div>
                        <input type="text" name='photo' placeholder="Photo URL" className="text-base bg-transparent outline-none border-b-2 w-full" />
                    </div>
                    <div>
                        <input type="password" name='password' placeholder="Password" className="text-base bg-transparent outline-none border-b-2 w-full" />
                    </div>
                    <div className='flex justify-between text-base'>
                        <div className="flex gap-2 items-center">
                        <input type="checkbox"  className="checkbox checkbox-info" /><span>Remember Me</span>
                        </div>
                        <p className="text-[#F05A7E] cursor-pointer hover:link">Forgot Password?</p>
                    </div>
                    <div className='text-base space-y-4'>
                        <button className='btn bg-[#fa4771] hover:bg-[#F05A7E] btn-block text-white'>Sign up</button>
                        <p className='text-center'>Already have an account? <Link to={"/login"} className='text-[#fa4771] cursor-pointer hover:link'>Login Now</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;