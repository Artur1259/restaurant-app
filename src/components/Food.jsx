import { data } from "../data/data.js";
import React, { useState } from "react";

const Food = () => {
  const [foods, setFoods] = useState(data);

  const filterType = (category) =>{
   setFoods(
      data.filter((item) => item.category === category)
    );
  };

  const filterPrice = (price) =>{
   setFoods(
      data.filter((item) => item.price === price)
    );
  };

  return (
    <div className="max-w-[1640px] px-4 py-12 m-auto">
      <h1 className="text-orange-600 font-bold text-2xl md:text-3xl lg:text-4xl text-center">
        Top Rated Items
      </h1>
      <div className="pt-5 flex flex-col lg:flex-row  justify-between gap-4">
        <div className="">
          <p className="font-bold text-lg text-gray-700 pl-2">Filter Type</p>
          <div className="flex flex-wrap">
            <button onClick={()=>setFoods(data)} className="rounded-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 duration-500 hover:scale-110 ease-in-out">
              All
            </button>
            <button onClick={()=>filterType('burger')} className="rounded-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 duration-500 hover:scale-110 ease-in-out">
              Burgers
            </button>
            <button onClick={()=>filterType('pizza')} className="rounded-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 duration-500 hover:scale-110 ease-in-out">
              Pizza
            </button>
            <button onClick={()=>filterType('salad')} className="rounded-full border-orange-600 text-orange-600 hover:bg-orange-600 duration-500 hover:text-white hover:scale-110 m-1 ease-in-out">
              Salads
            </button>
            <button onClick={()=>filterType('chicken')} className="rounded-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 duration-500 hover:scale-110 ease-in-out">
              Chicken
            </button>
          </div>
        </div>

        <div>
          <p className="font-bold text-lg text-gray-700 pl-2">Filter Price</p>
          <div className="flex justify-between w-full max-w-[300px]">
            <button onClick={()=>filterPrice('$')} className="border-orange-600 text-orange-600 rounded-full m-1 hover:bg-orange-600 hover:text-white duration-500 hover:scale-110 ease-in">
              $
            </button>
            <button onClick={()=>filterPrice('$$')} className="border-orange-600 text-orange-600 rounded-full m-1 hover:bg-orange-600 hover:text-white duration-500 hover:scale-110 ease-in">
              $$
            </button>
            <button onClick={()=>filterPrice('$$$')} className="border-orange-600 text-orange-600 rounded-full m-1 hover:bg-orange-600 hover:text-white duration-500 hover:scale-110 ease-in">
              $$$
            </button>
            <button onClick={()=>filterPrice('$$$$')} className="border-orange-600 text-orange-600 rounded-full m-1 hover:bg-orange-600 hover:text-white duration-500 hover:scale-110 ease-in">
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Display foods */}

      <div className="grid grid-cols-2 lg:grid-cols-4 pt-4 gap-5 rounded-lg">
        {foods.map((item, index) => (
          <div key={index} className="border shadow-lg hover:scale-95 hover:shadow-2xl duration-300 rounded-lg">
            <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-t-lg"/>
            <div className="flex justify-between px-2 py-3 "> 
              <p className="font-bold">{item.name}</p>
              <p><span className="bg-orange-600 rounded-full text-white p-1 cursor-pointer">{item.price}</span></p>
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default Food;
