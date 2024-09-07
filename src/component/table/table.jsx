import React from "react";
import RangeSlider from '../rangeSlider/rangeSlider.jsx'
import './table.css'
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
const Table = () => {
    return <>
    <div className="filter">
        <div className="filterList">
            <div className="listLine">
                <h3>All</h3>
                <div className="underline"></div>
            </div>
            <h3>New</h3>
            <h3>Used</h3>
        </div>
        <div className="filterPart1">
            <CiSearch className="searchIcon"></CiSearch>
            <input type="text" placeholder="Search"></input>
            <select>
            <option>Model</option>
            </select>
            <select>
            <option>Brand</option>
            </select>
        </div>
        <div className="filterPart2">
            <IoLocationOutline className="locationIcon"></IoLocationOutline>
            <input type="text" placeholder="Location"></input>
            <RangeSlider></RangeSlider>
            <button className="searchBtn">Search</button>
        </div>
    </div>
    </>
}
export default Table