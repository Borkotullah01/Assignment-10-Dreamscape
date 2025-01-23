import { useEffect, useState } from "react";
import Slider from "../../Components/Slider";
import { HashLoader } from "react-spinners";

const HomePage = () => {
  const [AllData, setAllData] = useState()
  const [Loading, setLoading] = useState(true)
  const [DataLength, setDataLength] = useState(6)

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
            <h1 className='font-rancho text-6xl text-center text-[#F05A7E] opacity-100'>Art and Craft</h1>
            <p className="text-lg py-5 text-gray-700 text-center max-w-4xl mx-auto font-poppins">
            "Unleash your creativity with our Arts and Crafts collection! From painting and sculpting <br></br> to crafting and beyond, discover endless possibilities to express yourself and bring your imagination to life."
            </p>
            
              {
                Loading ? <HashLoader className="flex justify-center items-center mx-auto" />:<div className="max-w-7xl py-10 grid gap-10 grid-cols-3 justify-center items-center mx-auto">
                  {
                    AllData.slice(0, DataLength).map(data=>(
                      <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                          <img
                            src={data.photo}
                            alt="Shoes"
                            className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                          <h2 className="card-title">{data.name}</h2>
                          <p>{data.description}</p>
                          <div className="card-actions">
                            <button className="btn btn-primary">{data.processing}</button>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
                
              }
              <div className="flex justify-center items-center">
                {
                  DataLength > 6 ?
                  <button onClick={()=>HandleDataLength("less")} className="btn btn-primary">Show Less</button> : <button onClick={()=>HandleDataLength("all")} className="btn btn-primary">Show All</button>
                }
              </div>
            
        </div>
    </>
    );
};

export default HomePage;