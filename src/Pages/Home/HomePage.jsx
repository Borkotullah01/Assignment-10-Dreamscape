import { useEffect, useState } from "react";
import Slider from "../../Components/Slider";
import { HashLoader } from "react-spinners";
import { FaCalendarAlt, FaEdit, FaStar } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { LuBadgeDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [AllData, setAllData] = useState()
  const [Loading, setLoading] = useState(true)
  const [DataLength, setDataLength] = useState(6)
  console.log(AllData);

  useEffect(()=>{
    fetch("http://localhost:3000/craft")
    .then(res=>res.json())
    .then(data=>{
      setAllData(data)
      setLoading(false)
    })
  },[])

  const HandleDataLength = (btn) => {
    if (btn == "all") {
      setDataLength(AllData.length)
    }
    else if (btn == "less") {
      setDataLength(6)
    } 
  }

    return (
    <>
      <div className="h-[300px] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]">
      <Slider/>
      </div>
     {/* Art And Craft section */}
      <div style={
            {
                backgroundImage: 'url("https://i.ibb.co.com/6XDWPry/bg-03.jpg")'
            }
        } 
        className="w-full py-20 bg-cover bg-center"> 
            <h1 className='font-rancho text-4xl md:text-5xl lg:text-6xl text-center text-[#F05A7E] opacity-100'>Art and Craft</h1>
            <p className="text-sm lg:text-lg py-5 text-gray-700 text-center max-w-4xl mx-auto font-poppins">
            "Unleash your creativity with our Arts and Crafts collection! From painting and sculpting <br></br> to crafting and beyond, discover endless possibilities to express yourself and bring your imagination to life."
            </p>
            
              {
                Loading ? <HashLoader color="#F05A7E" size={150} className="flex justify-center items-center mx-auto" />:<>
                <div className="max-w-7xl py-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center mx-auto">
                  {
                    AllData.slice(0, DataLength).map(data=>(
                      <div className="card bg-base-100 shadow-xl">
                        <figure>
                          <img
                            src={data.photo}
                            alt="Painting and craft" />
                        </figure>
                        <div className="card-body">
                          <p className="text-sm font-poppins text-[#fe8a46]">{data.category}</p>
                          <h2 className="text-4xl font-rancho">{data.name}</h2>
                          <p className="font-poppins text-justify">{data.description.slice(0,150)}</p>
                          <div className="flex justify-between">
                            <div className="font-poppins">
                              <p className="flex gap-2 items-center"><FaStar className="text-[#fe8a46]" /> {data.rating}</p>
                              <p className="flex gap-2 items-center"><FaEdit /> {data.customization}</p>
                            </div>
                            <div className="font-poppins text-end">
                              <p className="flex gap-2 items-center"><AiOutlineStock /> {data.stock}</p>
                              <p className="flex gap-2 items-center"><LuBadgeDollarSign /> {data.price} $</p>
                            </div>
                          </div>
                          <div className="card-actions justify-end">
                            <Link to={`/details/${data._id}`} className="btn btn-block bg-[#125B9A] text-white">View Details</Link>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
                <div className="flex justify-center items-center">
                {
                  DataLength > 6 ?
                  <button onClick={()=>HandleDataLength("less")} className="btn bg-[#125B9A] text-white">Show Less</button> : <button onClick={()=>HandleDataLength("all")} className="btn bg-[#125B9A] text-white">Show All</button>
                }
              </div>
                </>
                
              }

              {/* ----------------Exhibitions & Events------------ */}
              <div className="my-24">
                <h1 className='font-rancho text-4xl md:text-5xl lg:text-6xl text-center text-[#F05A7E] opacity-100'>Exhibitions & Events</h1>
                <p className="text-sm md:text-lg py-5 text-gray-700 text-center max-w-4xl mx-auto font-poppins">
                "Experience the extraordinary with our Exhibitions & Events! Explore captivating displays, immerse yourself in cultural wonders, and engage with thought-provoking experiences that inspire, educate, and entertain."
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-10 justify-center items-center">
                  <div className="h-96 flex justify-start items-start p-6 md:p-2">
                    <div style={
                      {
                        backgroundImage: 'url("https://i.ibb.co.com/n6kkdyY/Exhibitions.webp")'
                      }
                    } className="relative bg-cover bg-center w-full h-[95%] rounded-lg">
                      <p className="absolute rounded-tr-xl rounded-br-sm rounded-tl-sm rounded-bl-xl bottom-[-20px] right-[-20px] py-2 px-10 text-white font-rancho text-2xl bg-[#F05A7E]">You Are Invited.</p>
                    </div>
                  </div>
                  <div className="space-y-6 p-10 bg-gray-50 rounded-lg">
                    <div className="space-y-2">
                      <h1 className="text-4xl text-[#F05A7E] font-rancho">Canvas Creations</h1>
                      <p className="text-base lg:text-lg flex gap-4 items-center text-[#125B9A]"><FaCalendarAlt /> 10 January - 20 January</p>
                      <p className="text-gray-600 text-sm lg:text-lg text-justify">Canvas Creations stands as a beacon of creativity and cultural exchange in the heart of our city. Our Exhibitions & Events offer an immersive journey into the world of contemporary art, where every piece tells a story and every event sparks conversations.</p>
                    </div>
                    <div className="space-y-2">
                      <h1 className="text-4xl text-[#F05A7E] font-rancho">Jawad Art Gallery</h1>
                      <p className="text-base lg:text-lg flex gap-4 items-center text-[#125B9A]"><FaCalendarAlt /> 14 February - 20 February</p>
                      <p className="text-gray-600 text-sm lg:text-lg text-justify">Jawad Art Gallery stands as a beacon of creativity and cultural exchange in the heart of our city. Our Exhibitions & Events offer an immersive journey into the world of contemporary art, where every piece tells a story and every event sparks conversations.</p>
                    </div>
                    <div className="space-y-2">
                      <h1 className="text-4xl text-[#F05A7E] font-rancho">Bashar Art Gallery</h1>
                      <p className="text-base lg:text-lg flex gap-4 items-center text-[#125B9A]"><FaCalendarAlt /> 20 May - 25 May</p>
                      <p className="text-gray-600 text-sm lg:text-lg text-justify">Step into our gallery space and be greeted by a dynamic atmosphere pulsating with creativity. Our exhibitions are meticulously curated to showcase the diverse talents of both established artists and emerging voices. From avant-garde installations to captivating paintings, sculptures, and multimedia artworks, each display is a testament to the boundless possibilities of artistic expression.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Art Gallery section */}
              <div className="max-w-7xl mx-auto">
                <h1 className='font-rancho text-4xl md:text-5xl lg:text-6xl text-center text-[#F05A7E] opacity-100'>Art Gallery</h1>
                <p className="text-sm lg:text-lg py-5 text-gray-700 text-center max-w-4xl mx-auto font-poppins">
                "Step into a world of artistic wonder at our Art Gallery! Discover a diverse array of masterpieces, from contemporary works to timeless classics, and immerse yourself in the beauty and expression of visual artistry."
                </p>
                <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
                    {
                      AllData?.map(data=><img src={data.photo} alt="" className="md:w-96 md:h-72 rounded-xl" />)
                    }
                </div>
              </div>
        </div>
    </>
    );
};

export default HomePage;