import React from 'react';
import "../Components/BgImage.css"

const ArtAndCraft = () => {
    return (
        <div style={
            {
                backgroundImage: 'url("https://i.ibb.co.com/6XDWPry/bg-03.jpg")'
            }
        } 
        className="w-full py-20 bg-cover bg-center"> 
            <h1 className='font-rancho text-6xl text-center text-[#F05A7E] opacity-100'>Art and Craft</h1>
            <p className="text-lg py-5 text-gray-700 text-center max-w-4xl mx-auto font-poppins">
            "Unleash your creativity with our Arts and Crafts collection! From painting and sculpting <br></br> to crafting and beyond, discover endless possibilities to express yourself and bring your imagination to life."
            </p>
        </div>
    );
};

export default ArtAndCraft;