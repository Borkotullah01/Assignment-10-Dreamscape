import React, { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import TypedAnim from '../Components/TypedAnim';
import { Link } from 'react-router-dom';

const ArtAndCraftList = () => {
    const [Loading, setLoading] = useState(true);
    const [filterData, setFilterData] = useState([]);
    const [display, setDisplay] = useState([])
    const [allData, setAllData] = useState([]);
    console.log(allData);
    useEffect(()=>{
        fetch('http://localhost:3000/craft')
        .then(res=>res.json())
        .then(data=>{
            setAllData(data);
            setLoading(false);
        })
    },[])



    const handleFilter = (e) => {
      console.log(e.target.value);
      const filterText = e.target.value;
      if (filterText == "Customization Yes") {
        const filterData = allData.filter(data=>data.customization == "Yes");
        setDisplay(filterData)
      }
      else if (filterText == "Customization No") {
        const filterData = allData.filter(data=>data.customization == "No");
        setDisplay(filterData)
      }
      else if (filterText == "Default") {
        setDisplay(allData)
      }
    }
    useEffect(()=>{
      setDisplay(allData)
    },[allData])
    useEffect(()=>{
      setDisplay(filterData)
    },[filterData])
    return (
        <div className='bg-white'>
            {
                Loading ? <div className="h-screen flex justify-center items-center"><HashLoader color="#F05A7E" size={150} className="flex justify-center items-center mx-auto" /></div> :
                <div className="">
                    <div
                        style={{
                            backgroundImage:"url('https://i.ibb.co.com/kDjHFsf/bg-02.jpg')"
                        }}
                        className='h-40 md:h-60 lg:h-80 bg-center bg-cover relative'
                        >
                        <div className="absolute top-0 right-0 bottom-0 left-0 flex bg-gradient-to-tr from-[#125B9A] to-[#125b9ae4] justify-center items-center font-rancho text-6xl md:text-8xl lg:text-9xl text-[#F05A7E]">
                            <TypedAnim cursorChar={"_"} data={["All Craft", "View More", "Hit Details"]}/>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto my-10 overflow-x-auto">
                      {/* select list filter */}
                      <div className="flex justify-end px-4 pb-20">
                      <label className="form-control w-full max-w-xs text-base font-poppins">
                        <div className="label">
                          <span className="text-base font-poppins text-gray-600">Filter By Customization</span>
                        </div>
                        <select onChange={handleFilter} className="select select-bordered">
                          <option disabled selected>Select Customization</option>
                          <option>Default</option>
                          <option>Customization Yes</option>
                          <option>Customization No</option>
                        </select>
                      </label>
                      </div>
                      {/* select list filter */}
                <table className="table font-poppins">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Art & Craft Name</th>
                      <th className='hidden md:block'>Description</th>
                      <th>Customization</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {
                      display?.map(data=>(
                        <tr className='font-poppins'>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle h-12 w-12">
                                <img
                                  src={data.photo}
                                  alt="No Image" />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">{data.name}</div>
                              <div className="text-sm opacity-50">Author : {data.posted_by}</div>
                            </div>
                          </div>
                        </td>
                        <td className='hidden md:block space-x-1'>
                          {data.description}
                          <br />
                          <span className="badge badge-ghost badge-sm">{data.category.slice(0, 200)}</span>
                          <span className="badge badge-ghost badge-sm">{data.stock}</span>
                          <span className="badge badge-ghost badge-sm">Price: {data.price} $</span>
                        </td>
                        <td>{data.customization}</td>
                        <th>
                          <Link to={`/details/${data._id}`} className="btn bg-[#125B9A] text-white btn-sm">Details</Link>
                        </th>
                      </tr>
                      ))
                    }
                  </tbody>
                </table>
                </div>

                </div>
            }
        </div>
    );
};

export default ArtAndCraftList;