import {useState, useEffect} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = ({ size,handleProfile }) => { 
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   const token = localStorage.getItem("token");
  useEffect(() => {
   if (token) {
     setIsLoggedIn(true);
   } else {
     setIsLoggedIn(false);
   }
 }, [token]);
  
   return <div className="bg-green-300 flex justify-between py-4 px-3 relative">
      <Link to="/"><h1 className="font-bold cursor-pointer" >Fresh-Mart</h1></Link>

      <div className="flex items-center gap-3">
         {!isLoggedIn ? <div className="flex gap-3">
            <Link to="/login"><button className="border border-black rounded-sm px-4 py-1 " >Login</button></Link>
            <Link to="/register"><button className="border border-black rounded-sm px-4 py-1 ">Register</button>            </Link>
         </div> : <CgProfile className="text-2xl cursor-pointer" onClick={handleProfile} />      }
         <Link to="/cart"><div className="flex cursor-pointer justify-between items-center bg-white gap-2 px-2 rounded-full">
            <button className="rounded-full "><FaShoppingCart /></button>
            <p>{size}</p>
         </div></Link>
      </div>
   </div>
}

export default Header