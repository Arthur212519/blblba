import React from 'react';

function SearchBox() {
  return (
    <form action="" className="search-box">
      <input type="text" name="search" placeholder="search Movie" className="search-input" required />
      <button type="submit">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}

export default SearchBox;
