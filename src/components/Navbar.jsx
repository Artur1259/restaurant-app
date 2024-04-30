import { useState } from "react";
import {
  AiFillTag,
  AiOutlineAmazon,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="max-w-[1640px] flex justify-between items-center p-4 mx-auto">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={25} onClick={handleClick} />
        </div>
        <h1 className="text-xl sm:text-2xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden md:flex items-center bg-gray-300 rounded-full p-1 text-sm">
          <p className="bg-black text-white rounded-full p-2 cursor-pointer">Delivery</p>
          <p className="p-2 cursor-pointer">Pickup</p>
        </div>
      </div>
      <div className="flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[350px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search Food"
          className="bg-transparent p-[10px] w-full focus:outline-none"
        />
      </div>
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-1" />
        Cart
      </button>

      
        <div className={open ? "bg-black/80 w-full h-screen fixed z-10 duration-700 delay-100 top-0 left-0" : "bg-black/80 w-full h-screen fixed z-10 duration-700 delay-200 top-0 left-[-100%]"}></div>
      

      {/* Sidebar */}

      
        <div className={open ? "fixed w-[230px] md:w-[300px] h-screen bg-white z-10 left-0 top-0 duration-700 " : "fixed w-[230px] md:w-[300px] h-screen bg-white z-10 left-[-100%] top-0 duration-[2000ms] "}>
          <AiOutlineClose
            onClick={handleClick}
            size={30}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <h2 className="text-2xl p-4">
            Best <span className="font-bold">Eats</span>
          </h2>
          <nav>
            <ul className="flex flex-col p-4 text-gray-800">
              <li className="flex py-1 text-xl items-center ">
                <TbTruckDelivery size={25} className="mr-4"/> Order
              </li>
              <li className="flex py-4 text-xl items-center">
                <MdFavorite size={25} className="mr-4"/> Favorites
              </li>
              <li className="flex py-4 text-xl items-center">
                <FaWallet size={25} className="mr-4"/> Wallet
              </li>
              <li className="flex py-4 text-xl items-center">
                <MdHelp size={25} className="mr-4"/> Help
              </li>
              <li className="flex py-4 text-xl items-center">
                <AiFillTag size={25} className="mr-4"/> Promotions
              </li>
              <li className="flex py-4 text-xl items-center">
                <BsFillSaveFill size={25} className="mr-4"/> Best One
              </li>
              <li className="flex py-4 text-xl items-center">
                <FaUserFriends size={25} className="mr-4"/> Invite Friends
              </li>
            </ul>
          </nav>
        </div>
    </div>
  );
};

export default Navbar;
