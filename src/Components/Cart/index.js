import { MdOutlineDelete } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState, useEffect } from "react";

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
        <div className="flex flex-col justify-center items-center w-full" style={{height:"82vh"}}>
            {cart.length === 0 ? (
                    <div className="flex flex-col justify-center items-center w-96 border shadow-xl rounded-md">
                        <div className="h-64 w-64">
                            <img src="https://img.freepik.com/free-vector/man-shopping-supermarket_74855-7612.jpg?t=st=1720095345~exp=1720098945~hmac=42ae1c98b9d97fc33f231b7a95da381b877cb902ed17906522b54c6468035959&w=1060" alt="empty-cart" className="h-full" />
                        </div>
                        <p className='text-emerald-900'>Cart is Empty</p>
                    </div>
            ) : (
                <div className="flex flex-col justify-center" style={{width:"60vw"}}>
                    <ul className="flex flex-col gap-3">
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
                </div>

            )}
        </div>
    );
};

export default Cart;
