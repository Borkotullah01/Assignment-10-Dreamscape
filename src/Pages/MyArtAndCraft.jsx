import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import TypedAnim from '../Components/TypedAnim'
import { Link } from 'react-router-dom'
import { TiEye } from 'react-icons/ti'
import { FaPen } from 'react-icons/fa6'
import { MdDelete } from 'react-icons/md'
import { HashLoader } from 'react-spinners'

import NoData from "./../../public/NoData.json";
import Lottie from 'lottie-react'
import Swal from 'sweetalert2'

const MyArtAndCraft = () => {

    const [myCraft, setMyCraft] = useState([])
    const [loading, setLoading] = useState(true)
    const { user } = useContext(AuthContext)
    const email = user.email;

    useEffect(()=>{
        fetch(`http://localhost:3000/myCraft/${email}`)
        .then(res=>res.json())
        .then(data=>{
            setMyCraft(data)
            setLoading(false)
            
        })
    },[myCraft])

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/delete/${id}`,{
                    method: "DELETE"
                })
                .then(res=>res.json())
                .then(data=>{
                    if (data.deletedCount === 1) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                        const remaining = myCraft.filter(item=>item._id != id);
                        setMyCraft(remaining)
                    }
                })
            }
          });

    }


  return (
    <div className='bg-white'>
        <div
            style={{
                backgroundImage:"url('https://i.ibb.co.com/kDjHFsf/bg-02.jpg')"
            }}
            className='h-40 md:h-60 lg:h-80 bg-center bg-cover relative'
            >
            <div className="absolute top-0 right-0 bottom-0 left-0 flex bg-gradient-to-tr from-[#125B9A] to-[#125b9ae4] justify-center items-center font-rancho text-6xl md:text-8xl lg:text-9xl text-[#F05A7E]">
                <TypedAnim cursorChar={"_"} data={["Your Added Craft", "You can do", "Update", "Delete", "View Details"]}/>
            </div>
        </div>
            {
                loading ? <div className="flex justify-center items-center h-screen">
                            <HashLoader></HashLoader>
                        </div> : <div className="mx-auto">
                    { myCraft.length == 0 ?  <div className="flex justify-center items-center">
                    <Lottie 
                        animationData={NoData} 
                        loop={true} 
                        autoPlay={true}
                        style={{width: "600px"}}
                        >

                        </Lottie>
               </div> : <div className="grid gap-10 grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto my-10">
                    {
                     myCraft.map(item=>(
                        <Link to={`/details/${item?._id}`} className="grid grid-cols-5 gap-4 justify-between items-center text-center p-4 md:p-8 bg-[#F5F4F1] rounded-lg">
                        <div className="col-span-2">
                            <img className='h-[100px] md:h-[150px]' src={item?.photo} alt="" />
                        </div>
                        <div className="text-sm col-span-2 text-start text-[#1B1A1A]">
                            <p>Name: <span className="text-[#5C5B5B]">{item?.name}</span></p>
                            <p>Stock: <span className="text-[#5C5B5B]">{item?.stock}</span></p>
                            <p>Rating: <span className="text-[#5C5B5B]">{item?.rating}</span></p>
                            <p className='hidden md:block'>Category: <span className="text-[#5C5B5B]">{item?.category}</span></p>
                            <p>Customization: <span className="text-[#5C5B5B]">{item?.customization}</span></p>
                            <p>Price: <span className="text-[#5C5B5B]">{item?.price} $</span></p>
                        </div>
                        <div className="">
                            <div className="join join-vertical gap-2">
                              <Link to={`/details/${item?._id}`} className="btn btn-sm rounded-md text-white bg-[#D2B48C]"><TiEye /></Link>
                              <Link state={item?._id} to={`/update`} className="btn btn-sm rounded-md text-white bg-[#3C393B]"><FaPen /></Link>
                              <Link onClick={()=>handleDelete(item._id)} className="btn btn-sm rounded-md text-white bg-[#EA4744]"><MdDelete /></Link>
                            </div>
                        </div>
                    </Link>
                     ))
                    }
                    </div>
                    }
                </div>
            }
    </div>
  )
}

export default MyArtAndCraft