import { FaShoppingCart } from "react-icons/fa";

const Header = ({ size, setShow }) => {
   return <div className="bg-green-300 flex justify-between py-4 px-3">
      <h1 className="font-bold cursor-pointer" onClick={() => setShow(true)} >Fresh-Mart</h1>
      <div className="flex gap-3">
         <div className="flex gap-3">
            <button className="border border-black rounded-sm px-4 py-1 ">Login</button>
            <button className="border border-black rounded-sm px-4 py-1 ">Register</button>
         </div>
         <div onClick={() => setShow(false)} className="flex cursor-pointer justify-between items-center bg-white gap-2 px-2 rounded-full">
            <button className="rounded-full "><FaShoppingCart /></button>
            <p>{size}</p>
         </div>
      </div>
   </div>
}

export default Header