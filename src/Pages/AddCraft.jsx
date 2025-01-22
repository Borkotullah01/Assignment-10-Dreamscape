import React from 'react';

const AddCraft = () => {

  const handleAddItem = (e) => {
    e.preventDefault();
    const Form = e.target;
    const name = Form.name.value;
    const rating = Form.rating.value;
    const category = Form.category.value;
    const customization = Form.customization.value;
    const description = Form.description.value;
    const processing = Form.processing.value;
    const price = Form.price.value;
    const stock = Form.stock.value;
    const photo = Form.photo.value;
    
    const ItemInfo = {name, rating, category, customization, description, processing, price, stock, photo};
    console.log(ItemInfo);
    
  }

  return (
    <div 
    style={{
      backgroundImage: "url('https://i.ibb.co.com/kDjHFsf/bg-02.jpg')"
    }}
    className="p-4 bg-cover bg-center]">
      <div className="max-w-7xl bg-gradient-to-tr from-[#ffffffb9] to-[#ffffffc1] p-8 md:p-16 lg:p-24 mx-auto border rounded-lg border-[#F05A7E]">
        <h1 className='text-center pb-10 text-5xl font-rancho text-[#F05A7E]'>Add new Craft item</h1>
        <form onSubmit={handleAddItem} className='space-y-6'>
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="form-control w-full font-poppins">
            <label className="label">
              <span className="text-xl">Item name</span>
            </label>
            <input type="text" name='name' placeholder="Enter your item name" className="input input-bordered w-full" />
          </div>
          <div className="form-control w-full font-poppins">
            <label className="label">
              <span className="text-xl">Rating</span>
            </label>
            <input type="text" name='rating' placeholder="Enter item rating" className="input input-bordered w-full" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="form-control w-full font-poppins">
            <label className="label">
              <span className="text-xl">Category</span>
            </label>
            <select name='category' className="select select-bordered w-full">
              <option disabled selected>Choose Category</option>
              <option>Landscape Painting</option>
              <option>Protrait Drawing</option>
              <option>Water color Painting</option>
              <option>Oil Painting</option>
              <option>Charcoal Skretching</option>
              <option>Cartoon Drawing</option>
            </select>
          </div>
          <div className="form-control w-full font-poppins">
            <label className="label">
              <span className="text-xl">Customizable</span>
            </label>
            <select name='customization' className="select select-bordered w-full">
              <option disabled selected>Select Customization</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="form-control w-full font-poppins">
            <label className="label">
              <span className="text-xl">Description</span>
            </label>
            <input type="text" name='description' placeholder="Enter Item description" className="input input-bordered w-full" />
          </div>
          <div className="form-control w-full font-poppins">
            <label className="label">
              <span className="text-xl">Processing Time</span>
            </label>
            <select name='processing' className="select select-bordered w-full">
              <option disabled selected>Select weeks</option>
              <option>0 - 1 Weeks</option>
              <option>1 - 2 Weeks</option>
              <option>2 - 3 Weeks</option>
              <option>3 - 4 Weeks</option>
              <option>4 - 5 Weeks</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="form-control w-full font-poppins">
            <label className="label">
              <span className="text-xl">Price</span>
            </label>
            <input type="number" name='price' placeholder="Enter Item Price" className="input input-bordered w-full" />
          </div>
          <div className="form-control w-full font-poppins">
            <label className="label">
              <span className="text-xl">Stock</span>
            </label>
            <select name='stock' className="select select-bordered w-full">
              <option disabled selected>Select Stock</option>
              <option>In Stock</option>
              <option>Out of Stock</option>
            </select>
          </div>
        </div>
        <div className="form-control w-full font-poppins">
            <label className="label">
              <span className="text-xl">Item Photo URL</span>
            </label>
            <input type="text" name='photo' placeholder="Enter Photo URL" className="input input-bordered w-full" />
          </div>
          <div className="">
          <button className="mt-6 text-white text-lg btn btn-block bg-[#F05A7E] hover:bg-[#fa7191]">Add Item</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCraft;