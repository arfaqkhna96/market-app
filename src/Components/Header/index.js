import { FaShoppingCart } from "react-icons/fa";

const Header =({size, setShow})=>{
   return  <div className="bg-green-300 flex justify-between py-4 px-3">
    <h1 className="font-bold cursor-pointer" onClick={()=>setShow(true)} >Fresh-Mart</h1>
   <div onClick={()=>setShow(false)} className="flex cursor-pointer justify-between align-middle bg-white gap-2 px-2 rounded-full">
   <button className="rounded-full "><FaShoppingCart /></button>
   <span>{size}</span>
   </div>
   </div>
}

export default Header