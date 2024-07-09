import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Header from './Components/Header'
import ProductsList from './ProductsList';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Register from './Components/RegisterPage';
import Profile from './Components/Profile';
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
  const [cart, setCart] = useState([]);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUserName] = useState('')

  const handleChange = (item, d) => {
    
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) {
        ind = index;
      }

    });
    const tempArr = cart;
    tempArr[ind].quantity += d;
    if (tempArr[ind].quantity === 0) {
      tempArr[ind].quantity = 1;  
    }
    setCart([...tempArr])
  }


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleRemoveClick = (category) => {
    const updatedCartItems = cart.filter((item) => item.id !== category.id);
    setCart(updatedCartItems)
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5500/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User logged in:', data);
        setUserName(data.user.fullName);
        localStorage.setItem("token",data.token);
        setShowModal(true);
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred during login');
    }
  };

  const handleProfile = () =>{
      setShowProfile(true)
  }

  const handleLogout =()=>{
    setShowProfile(false);
    localStorage.removeItem("token");
    setShowModal(false);
  }


  const handleAddClick = (item) => {
    const isPresent = cart.some((product) => product.id === item.id);
    if (isPresent) {
      return;
    }
    setCart([...cart, item]);
  };

  return (
    <Router>
      <div className='h-screen flex flex-col '>
      <Header size={cart.length} handleProfile={handleProfile} />
      {showProfile ? <Profile username={username} handleLogout={handleLogout} /> : ""}
      <Routes>
        <Route path="/" element={<div className="flex">
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
        </div>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
      <Route path="/login" element={<Login handleLogin={handleLogin} error={error} showModal={showModal} email={email} password={password} setEmail={setEmail} setPassword={setPassword} />} />
      <Route path='/register' element={<Register />} />
      </Routes>
    </div>
    </Router>
  );
};

export default App;
