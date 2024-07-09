import { MdOutlineDelete } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


const Cart = ({ cart, setCart, handleChange }) => {

    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let sumAmount = 0;
        cart.map(item => (
            sumAmount += item.price * item.quantity
        ))
        setPrice(sumAmount.toFixed(2))
    }

    useEffect(() => {
        handlePrice();
    })

    const handleRemove = (id) => {
        const cartFlt = cart.filter(item => item.id !== id)
        setCart(cartFlt);
    }


    return (
        <div className="flex flex-col relative justify-center items-center w-full" style={{height:"80vh"}}>
            <div>
            <Link to="/"><button className="absolute top-4 left-0 flex items-center gap-1 text-green-800 font-bold px-3"><FaArrowLeft />Continue Shopping</button></Link>
            </div>
            {cart.length === 0 ? (
                    <div className="flex flex-col justify-center items-center w-96 border shadow-xl rounded-md">
                        <div className="h-64 w-64">
                            <img src="https://img.freepik.com/free-vector/man-shopping-supermarket_74855-7612.jpg?t=st=1720095345~exp=1720098945~hmac=42ae1c98b9d97fc33f231b7a95da381b877cb902ed17906522b54c6468035959&w=1060" alt="empty-cart" className="h-full" />
                        </div>
                        <p className='text-emerald-900 font-bold py-9'>Cart is Empty</p>
                    </div>
            ) : (
                <div className="flex absolute top-16 pt-2 flex-col justify-center" style={{width:"60vw",height:"80vh"}}>
                    <ul className="flex flex-col gap-3 overflow-auto">
                        {cart.map((item, index) => (
                            <li key={index} className="flex justify-around items-center border-solid border-r-gray-400 border-b" >
                                <div className="flex gap-3 justify-around items-center">
                                    <div className="h-16 w-16">
                                        <img src={item.imageUrl} className="w-fit" style={{ height: "100%" }} alt={item.name} />
                                    </div>
                                    <p className="w-24">{item.name}</p>
                                </div>
                                <div className="flex gap-5">
                                    <button onClick={() => handleChange(item, -1)}><FaMinus /></button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleChange(item, +1)}><FaPlus /></button>
                                </div>
                                <p className="w-24">{item.quantity} x ${item.price}</p>
                                <p>${(item.price * item.quantity).toFixed(2)}</p>
                                <button onClick={() => (handleRemove(item.id))}><MdOutlineDelete className="text-2xl" /></button>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-end gap-14 px-8 py-2">
                        <p className="text-2xl">Total</p>
                        <p className="text-2xl">${price}</p>
                    </div>
                    <div className="flex justify-end px-8">
                
                    <button className="border px-4 py-2 bg-green-900 rounded-md hover:ring ring-green-600 text-white mt-4 ">CheckOut</button>
                    </div>
                </div>
                
            )}
            
        </div>

        
    );
};

export default Cart;
