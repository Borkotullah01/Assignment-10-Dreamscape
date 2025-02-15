import React, { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import TypedAnim from '../Components/TypedAnim';
import { Link } from 'react-router-dom';

const AllCategories = () => {
    const [Loading, setLoading] = useState(true);
    const [AllCategory, setCategory] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/category')
        .then(res=>res.json())
        .then(data=>{
            setCategory(data)
            console.log(data);
            setLoading(false)
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
                            AllCategory?.map(item=>(
                                <div className="card bg-base-100 shadow-xl">
                                <figure className='h-52'>
                                  <img
                                    src={item?.category_image}
                                    alt="Painting and craft" />
                                </figure>
                                <div className="card-body">
                                  <p className="font-poppins text-[#fe8a46]">Category</p>
                                  <h2 className="text-4xl font-rancho text-[#F05A7E]">{item.category_name}</h2>
                                  <p className="font-poppins text-justify">{item.description}</p>
                                  <div className="card-actions justify-end">
                                    <Link state={item?.category_name} to={"/categories"} className="btn btn-block bg-[#125B9A] text-white">View All {item?.category_name}</Link>
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

export default AllCategories;