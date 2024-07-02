import React, { useEffect, useRef } from 'react';
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import RatingStar from './RatingStar';

const Home = ({ categories, selectedCategory, products, handleAddClick, handleRemoveClick, cartItems }) => {

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
      <div key={category} className='flex flex-col gap-2'>
        <h2 className='font-bold text-lg'>{category}</h2>
        <section className='overflow-x-auto p-2'>
          <div className="products flex gap-3 my-3">
            {products ? (
              products
                .filter((product) => product.category === category) // Filter products by category
                .map((product) => {
                  const isInCart = cartItems.some((item) => item.id === product.id);

                  return (
                    <div key={product.id} className="box-border hover:scale-105 bg-white flex flex-col gap-3 p-3 justify-between shadow-xl">
                      <div className='p-3 w-32 h-32'>
                        <img className='w-fit' style={{ height: "100%" }} src={product.imageUrl} alt={product.name} />
                      </div>
                      <div>
                        {isInCart ? (
                          <button className='' onClick={() => handleRemoveClick(product)}>
                            <AiFillMinusCircle className='text-green-500 text-3xl' />
                          </button>
                        ) : (
                          <button className='' onClick={() => handleAddClick(product)}>
                            <AiFillPlusCircle className='text-green-500 text-3xl' />
                          </button>
                        )}
                        <div><RatingStar value={product.rating} /></div>
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                      </div>
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
    <div className="content overflow-y-auto bg-gray-100 p-3">
      <div ref={topRef}></div>
      {getCategoryContent()}
    </div>
  );
};

export default Home;
