import React, { useEffect, useRef } from 'react';
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const Home = ({ categories, selectedCategory, products, handleAddClick,handleRemoveClick, cartItems }) => {

  const topRef = useRef(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedCategory]);

  const getCategoryContent = () => {
    const orderedCategories = selectedCategory
      ? [selectedCategory, ...categories.filter((cat) => cat !== selectedCategory)]
      : categories;

    return orderedCategories.map((category) => (
      <div key={category}>
        <h2>{category}</h2>
        <section className='overflow-x-auto'>
          <div className="products">
            {products ? (
              products
                .filter((product) => product.category === category) // Filter products by category
                .map((product) => {
                  const isInCart = cartItems.some((item) => item.id === product.id);

                  return (
                    <div key={product.id} className="product-card">
                      <img src={product.imageUrl} alt={product.name} />
                      {isInCart ? (
                        <button className='' onClick={() => handleRemoveClick(product)}>
                          <AiFillMinusCircle className='text-green-500 text-3xl' />
                        </button>
                      ) : (
                        <button className='' onClick={() => handleAddClick(product)}>
                          <AiFillPlusCircle className='text-green-500 text-3xl' />
                        </button>
                      )}
                      <h3>{product.name}</h3>
                      <p>${product.price}</p>
                    </div>
                  );
                })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </section>
      </div>
    ));

  }
  return (
    <div className="content overflow-y-auto">
      <div ref={topRef}></div>
      {getCategoryContent()}
    </div>
  );
};

export default Home;
