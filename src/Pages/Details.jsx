import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TypedAnim from '../Components/TypedAnim';

const Details = () => {
    const LoadData = useLoaderData();
    const {category, customization, description, name, photo, price, processing, rating, stock, posted_by, posted_at} = LoadData;
    return (
        <div className=' bg-white'>
            <div
                style={{
                    backgroundImage:"url('https://i.ibb.co.com/kDjHFsf/bg-02.jpg')"
                }}
                className='h-40 md:h-60 lg:h-80 bg-center bg-cover relative'
                >
                <div className="absolute top-0 right-0 bottom-0 left-0 flex bg-gradient-to-tr from-[#125B9A] to-[#125b9ae4] justify-center items-center font-rancho text-6xl md:text-8xl lg:text-9xl text-[#F05A7E]">
                    <TypedAnim cursorChar={"_"} data={["Best Art", "Best collections", "Best services", "Various Collection", "Customizable"]}/>
                </div>
            </div>
            <div className='flex gap-10 items-center flex-col lg:flex-row max-w-7xl mx-auto border-2 my-8 p-8 border-[#F05A7E] rounded-xl'>
                <div className="lg:w-2/4">
                    <img className='rounded-lg' src={photo} alt="" />
                </div>
                <div className="lg:w-2/4 space-y-5">
                    <h1 className='font-rancho text-4xl md:text-5xl lg:text-6xl text-[#F05A7E]'>{name}</h1>
                    <h1 className='text-sm md:text-base font-poppins text-justify text-gray-600'>{description}</h1>
                    <hr className='border-gray-400'></hr>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="space-y-2 text-sm md:text-base font-semibold font-poppins text-[#125B9A]">
                            <p>Category: <span className="font-light text-[#f92355]">{category}</span></p>
                            <p>Rating: <span className="font-light text-[#f92355]">{rating}</span></p>
                            <p>Posted By: <span className="font-light text-[#f92355]">{posted_by}</span></p>
                            <p>Price: <span className="font-light text-[#f92355]">{price}</span> $</p>
                        </div>
                        <div className="space-y-2 text-base font-semibold font-poppins text-[#125B9A]">
                            <p>Customizable: <span className="font-light text-[#f92355]">{customization}</span></p>
                            <p>Stock: <span className="font-light text-[#f92355]">{stock}</span></p>
                            <p>Posted At: <span className="font-light text-[#f92355]">{posted_at.slice(0, 17)}</span></p>
                            <p>Making Time: <span className="font-light text-[#f92355]">{processing}</span></p>
                        </div>
                    </div>
                    <hr className='border-gray-400'></hr>
                    <button className='btn btn-block bg-[#125B9A] hover:bg-[#3a95e4] text-white font-poppins'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Details;