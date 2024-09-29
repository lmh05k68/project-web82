import React,{useState} from "react";
import RangeSlider from '../../rangeSlider/rangeSlider.jsx'
import './table.css'
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import Data from '../../../data.js'
import Modal from '../../modal/modal.jsx'
const Table = () => {
  const [selectedCategory, setSelectedCategory] = useState('new');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 3000000]);
  const [location, setLocation] = useState('');
  const [filteredData, setFilteredData] = useState(Data);
  const [selectedCar, setSelectedCar] = useState(null); // Trạng thái để lưu xe được chọn
  const categories = ['new', 'used', 'all'];


    const handleSearch = () => {
      const filtered = Data.filter(item => {
          const matchesCategory = selectedCategory === 'all' || item.state.toLowerCase() === selectedCategory;
          const itemPrice = parseFloat(item.price.replace(/[$,]/g, ''));
          const matchesPrice = itemPrice >= priceRange[0] && itemPrice <= priceRange[1];
          const matchesLocation = location ? item.place.toLowerCase().includes(location.toLowerCase()) : true;
          const matchesName = searchTerm ? item.name.toLowerCase().includes(searchTerm.toLowerCase()) : true; // Nếu không nhập tên, bỏ qua điều kiện này

  
          return matchesCategory && matchesPrice && matchesLocation && matchesName;
      });
  
      if (filtered.length > 0) {
        setFilteredData(filtered); // Lưu lại danh sách đã lọc
        setSelectedCar(filtered[0]); // Hiển thị xe đầu tiên trong danh sách lọc
    } else {
        alert("Không tìm thấy xe nào."); // Thông báo khi không tìm thấy xe
        setFilteredData([]); // Đặt lại danh sách lọc nếu không tìm thấy
        setSelectedCar(null); // Đóng modal nếu không tìm thấy
    }
  };
  

    const closeModal = () => {
        setSelectedCar(null); // Đóng modal
    };
    return <>
    <div className="filter">
        
        <div className="filterList">
      {categories.map((category) => (
        <h3
          key={category}
          className={`listLine ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => setSelectedCategory(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h3>
      ))}
      
    </div>
        <div className="filterPart1">
            <CiSearch className="searchIcon"></CiSearch>
            <input 
                        type="text" 
                        placeholder="Search by name" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select>
            <option>Model</option>
            </select>
            <select>
            <option>Brand</option>
            </select>
        </div>
        <div className="filterPart2">
            <IoLocationOutline className="locationIcon"></IoLocationOutline>
            <input 
                        type="text" 
                        placeholder="Location" 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
            />
            <RangeSlider 
                        onChange={setPriceRange} 
                        value={priceRange}
              />
            <button className="searchBtn" onClick={handleSearch}>Search</button>
        </div>
    </div>
    {selectedCar && <Modal car={selectedCar} onClose={closeModal} />}
    </>
}
export default Table