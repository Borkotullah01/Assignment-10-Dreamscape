import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider'
import Swal from 'sweetalert2';

const UserProfile = () => {
    
    const { user, UpdateProfile, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        UpdateProfile(name, photo)
        setLoading(true)
        Swal.fire({
          title: "Congratulation",
          text: "Your Profile is Updated.",
          icon: "success",
        });
        setLoading(false)
        navigate("/user-profile");
    }


  return (
    <div className='bg-white'>
    <div className="card mx-auto bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        
      <form onSubmit={handleUpdateProfile} className="p-14">
      <h1 className='text-center mb-6 text-5xl font-rancho text-[#F05A7E]'>Update Your Profile</h1>
        <div className="flex justify-center">
            <div className="avatar mx-auto">
              <div className="w-40 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
        </div>

        <div className="form-control mt-8">
            <label className="label font-poppins font-semibold pl-0">
              <span className="text-base text-[#125B9A]">Name</span>
            </label>
            <input type="text" name='name' defaultValue={user?.displayName} placeholder={user?.displayName} className="text-gray-600 text-base bg-transparent outline-none border-b-2 w-full" />
        </div>
        <div className="form-control mt-8">
            <label className="label font-poppins font-semibold pl-0">
              <span className="text-base text-[#125B9A]">Email <span className='text-sm font-normal text-red-600'>(Not Changeable)</span></span>
            </label>
            <input type="email" name='email' placeholder={user?.email} disabled className="text-gray-600 cursor-not-allowed text-base bg-transparent outline-none border-b-2 w-full" />
        </div>
        <div className="form-control mt-8">
            <label className="label font-poppins font-semibold pl-0">
              <span className="text-base text-[#125B9A]">Photo URL</span>
            </label>
            <input type="text" name='photo' defaultValue={user?.photoURL} placeholder={user?.photoURL} className="text-gray-600 text-base bg-transparent outline-none border-b-2 w-full" />
        </div>
        <div className="form-control mt-8">
          <button className="text-white btn bg-[#fa4771] hover:bg-[#F05A7E]">Update Now</button>
        </div>
      </form>
    </div>
</div>
  )
}

export default UserProfile