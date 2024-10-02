import Header from '../../component/header/header.jsx'
import Footer from '../../component/footer/footer.jsx'
import './cmp.css'
import React, { useState } from 'react';
import Data from '../../data.js'
import CmpCard from '../../component/card/cmpCard.jsx'
const Cmp = () => {
  const [selectedCar1, setSelectedCar1] = useState(null);
  const [selectedCar2, setSelectedCar2] = useState(null);
  const [betterCar, setBetterCar] = useState(null);
  const compareCars = () => {
    const car1 = selectedCar1;
    const car2 = selectedCar2;
    const car1Wins = {
      price: parseInt(car1.price.replace(/[^0-9]/g, "")) < parseInt(car2.price.replace(/[^0-9]/g, "")),
      year: car1.year > car2.year,
      power: parseInt(car1.power) > parseInt(car2.power),
      mileage: parseInt(car1.mileage.replace(/[^0-9]/g, "")) < parseInt(car2.mileage.replace(/[^0-9]/g, "")),
      cargoVolume: parseInt(car1.cargoVolume.replace(/[^0-9]/g, "")) > parseInt(car2.cargoVolume.replace(/[^0-9]/g, "")),
    };
    const car2Wins = {
      price: !car1Wins.price,
      year: !car1Wins.year,
      power: !car1Wins.power,
      mileage: !car1Wins.mileage,
      cargoVolume: !car1Wins.cargoVolume,
    };
    const car1Score = Object.values(car1Wins).filter(Boolean).length;
    const car2Score = Object.values(car2Wins).filter(Boolean).length;
    if (car1Score > car2Score) {
      setBetterCar(car1);
    } else {
      setBetterCar(car2);
    }
  };
  const resetComparison = () => {
    setSelectedCar1(null);
    setSelectedCar2(null);
    setBetterCar(null);
  };
  const comparisonTable = () => {
    if (!selectedCar1 || !selectedCar2) return null;

    const comparisonCriteria = [
      { label: "Price", car1Value: selectedCar1.price, car2Value: selectedCar2.price },
      { label: "Year", car1Value: selectedCar1.year, car2Value: selectedCar2.year },
      { label: "Power", car1Value: selectedCar1.power, car2Value: selectedCar2.power },
      { label: "Mileage", car1Value: selectedCar1.mileage, car2Value: selectedCar2.mileage },
      { label: "Cargo Volume", car1Value: selectedCar1.cargoVolume, car2Value: selectedCar2.cargoVolume }
    ];

    return (
      <table className="comparisonTable">
        <thead>
          <tr>
            <th>Criteria</th>
            <th>{selectedCar1.name}</th>
            <th>{selectedCar2.name}</th>
          </tr>
        </thead>
        <tbody >
          {comparisonCriteria.map((criteria, index) => (
            <tr key={index}>
              <td>{criteria.label}</td>
              <td>{criteria.car1Value}</td>
              <td>{criteria.car2Value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
    return <>
    <div className="newHeader">
        <Header></Header>
        <div className="newHeaderh1">
            <h1>Compare Cars</h1>
            <p>Homepage - Compare Cars</p>
        </div>
    </div>
    <div className="cmpCardContainer">
      <div className="twoCard">
        <div className="cmpCard">
          <select onChange={(e) => setSelectedCar1(Data.find(car => car.name === e.target.value))}>
            <option value="">Select Car 1</option>
            {Data.map(car => (
              <option key={car.id} value={car.name}>{car.name}</option>
            ))}
          </select>
          <div className="cmpCardChild">
            {selectedCar1 && <CmpCard car={selectedCar1} />}
          </div>
        </div>
        <div className="cmpCard">
          <select onChange={(e) => setSelectedCar2(Data.find(car => car.name === e.target.value))}>
              <option value="">Select Car 2</option>
              {Data.map(car => (
                <option key={car.id} value={car.name}>{car.name}</option>
              ))}
          </select>
          <div className="cmpCardChild">
            {selectedCar2 && <CmpCard car={selectedCar2} />}
          </div>
        </div>
      </div>
    </div>
    <div className="cmpBtn">
      <button onClick={compareCars} disabled={!selectedCar1 || !selectedCar2}>Compare</button>
      <button onClick={resetComparison} style={{backgroundColor:"#9B59B6"}}>
        Reset
      </button>
    </div>
      {betterCar && (
        <div className="better">
          <h2 style={{marginLeft:"10%"}}>Better Car</h2>
          <div className="table-card">
            <div className="better-card">
              <CmpCard car={betterCar}/>
            </div>
            {comparisonTable()}
          </div>
        </div>
      )}
    <Footer></Footer>
    </>
}
export default Cmp