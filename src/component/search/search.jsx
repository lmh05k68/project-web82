import './search.css'
import Data from '../../data.js'
import React, { useState } from 'react';
const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredCars = Data.filter(car => 
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return <>
    <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
  </>
}
export default Search