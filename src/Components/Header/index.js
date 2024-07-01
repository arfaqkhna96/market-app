import { FaShoppingCart } from "react-icons/fa";

const Header =({size})=>{
   return  <div className="bg-yellow-300 flex justify-between py-4 px-3">
    <h1 className="font-bold">E-Commerce</h1>
    <button className=" flex justify-between align-middle px-3 rounded-full bg-white"><FaShoppingCart /> <span>{size}</span> </button>
   </div>
}

export default Header