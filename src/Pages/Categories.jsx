import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TypedAnim from '../Components/TypedAnim';
import { HashLoader } from 'react-spinners';
import { FaEdit, FaStar } from 'react-icons/fa';
import { AiOutlineStock } from 'react-icons/ai';
import { LuBadgeDollarSign } from 'react-icons/lu';

const Categories = () => {
    const Location = useLocation();
    const [Category, setCategory] = useState([]);
    const [Loading, setLoading] = useState(true);
    console.log(Location);
    useEffect(()=>{
        fetch(`http://localhost:3000/category/${Location.state}`)
        .then(res=>res.json())
        .then(data=>{
            setCategory(data);
            console.log(data);
            setLoading(false);
        })
    },[])
    return (
        <div>
        {
            Loading ? <HashLoader color="#F05A7E" size={150} className="flex justify-center items-center mx-auto" /> : 
            <div className=' bg-white'>
                <div
                    style={{
                        backgroundImage:"url('https://i.ibb.co.com/kDjHFsf/bg-02.jpg')"
                    }}
                    className='h-40 md:h-60 lg:h-80 bg-center bg-cover relative'
                    >
                    <div className="absolute top-0 right-0 bottom-0 left-0 flex bg-gradient-to-tr from-[#125B9A] to-[#125b9ae4] justify-center items-center font-rancho text-6xl md:text-8xl lg:text-9xl text-[#F05A7E]">
                        <TypedAnim cursorChar={"_"} data={["All Categories", "View More", "Hit Details"]}/>
                    </div>
                </div>
                <div className="grid gap-8 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-7xl mx-auto">
                    {
                        Category?.map(item=>(
                            <div className="card bg-base-100 shadow-xl">
                              <figure>
                                <img
                                  src={item.photo}
                                  alt="Painting and craft" />
                              </figure>
                              <div className="card-body">
                                <p className="font-poppins text-[#fe8a46]">{item.category}</p>
                                <h2 className="text-4xl font-rancho">{item.name}</h2>
                                <p className="font-poppins text-justify">{item.description.slice(0, 150)}</p>
                                <div className="flex justify-between">
                                  <div className="font-poppins">
                                    <p className="flex gap-2 items-center"><FaStar className="text-[#fe8a46]" /> {item.rating}</p>
                                    <p className="flex gap-2 items-center"><FaEdit /> {item.customization}</p>
                                  </div>
                                  <div className="font-poppins text-end">
                                    <p className="flex gap-2 items-center"><AiOutlineStock /> {item.stock}</p>
                                    <p className="flex gap-2 items-center"><LuBadgeDollarSign /> {item.price} $</p>
                                  </div>
                                </div>
                                <div className="card-actions justify-end">
                                  <Link to={`/details/${item._id}`} className="btn btn-block bg-[#125B9A] text-white">View Details</Link>
                                </div>
                              </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        }
    </div>
    );
};

export default Categories;