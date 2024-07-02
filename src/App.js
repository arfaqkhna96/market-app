import React, { useState} from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Header from './Components/Header'
import ProductsList from './ProductsList';
import Cart from './Components/Cart';
import './App.css'

const categories = [
  "Fruits",
  "Vegetables",
  "Dairy",
  "Bakery",
  "Meat",
  "Grains",
  "Beverages",
  "Spices",
  "Breakfast"
];


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("Fruits");
  const [show, setShow]  = useState(true);
  const [cart,  setCart]  = useState([]);


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleRemoveClick = (category) =>{
    const updatedCartItems = cart.filter((item) => item.id !== category.id);
    setCart(updatedCartItems)
  }

  
  const handleAddClick = (item) => {
    const isPresent = cart.some((product) => product.id === item.id);
    if (isPresent) {
      return;
    }
    setCart([...cart, item]);
  };

  return (
    <div className='h-screen'>
      <Header size = {cart.length} setShow={setShow} />
      {
        show ? <div className="flex">
          <Navbar
            categories={categories}
            selectedCategory={selectedCategory}
            handleCategoryClick={handleCategoryClick}
          />
          <Home
            categories={categories}
            selectedCategory={selectedCategory}
            products={ProductsList}
            handleAddClick={handleAddClick}
            cartItems={cart}
            handleRemoveClick={handleRemoveClick}
          />
      </div> : <Cart cart={cart} setCart={setCart} />
      }
    </div>
  );
};

export default App;
