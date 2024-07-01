import React from 'react';

const Navbar = ({ categories, selectedCategory, handleCategoryClick}) => {
  return (
    <nav className="sidebar">
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={category === selectedCategory ? 'selected' : ''}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
