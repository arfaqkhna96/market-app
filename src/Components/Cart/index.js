import { MdOutlineDelete } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState, useEffect } from "react";

const Cart = ({ cart,setCart }) => {

    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let sumAmount = 0;
        cart.map(item => (
            sumAmount += item.price
        ))
        setPrice(sumAmount)
    }

    useEffect(() => {
        handlePrice();
    })

    const handleRemove = (id) =>{
        const cartFlt = cart.filter(item => item.id !== id)
        setCart(cartFlt);
    }


    return (
        <div className="p-32">
            {cart.length === 0 ? (
                <p className='text-emerald-900'>Cart is Empty</p>
            ) : (
                <div>
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
                                    <button><FaMinus /></button>
                                    <span>1</span>
                                    <button><FaPlus /></button>
                                </div>
                                <p className="w-24">{item.quantity} x ${item.price}</p>
                                <p>${item.price}</p>
                                <button onClick={()=>(handleRemove(item.id))}><MdOutlineDelete className="text-2xl" /></button>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center gap-14 w-60">
                        <p>Total</p>
                        <p>${price}</p>
                    </div>
                </div>

            )}
        </div>
    );
};

export default Cart;
