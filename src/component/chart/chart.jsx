import React, { useEffect, useRef } from 'react';
import Data from '../../data.js'; 
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

const CarChart = () => {
  const likesPurchasesRef = useRef(null);
  const rateRef = useRef(null);
  
  Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

  // Chuẩn bị dữ liệu cho biểu đồ từ mảng Data
  const carNames = Data.map(car => car.name); // Lấy tên xe
  const carLikes = Data.map(car => car.likes); // Lấy lượt thích
  const carSales = Data.map(car => car.purchases); // Lấy số lần mua
  const carRates = Data.map(car => car.rate || 0); // Lấy rating, mặc định 0 nếu không có

  useEffect(() => {
    // Biểu đồ cho Likes và Purchases
    const ctx1 = likesPurchasesRef.current.getContext('2d');
    const likesPurchasesChart = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: carNames,
        datasets: [
          {
            label: 'Likes',
            data: carLikes,
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            label: 'Purchases',
            data: carSales,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              autoSkip: false,
              maxRotation: 90,
              minRotation: 90
            }
          },
          y: {
            beginAtZero: true,
          }
        }
      }
    });

    // Biểu đồ cho Rate
    const ctx2 = rateRef.current.getContext('2d');
    const rateChart = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: carNames,
        datasets: [
          {
            label: 'Rate',
            data: carRates,
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              autoSkip: false,
              maxRotation: 90,
              minRotation: 90
            }
          },
          y: {
            beginAtZero: true,
          }
        }
      }
    });

    return () => {
      likesPurchasesChart.destroy();
      rateChart.destroy();
    };
  }, [carNames, carLikes, carSales, carRates]);

  return (
    <>
      <div className="newHeader">
        <Header></Header>
        <div className="newHeaderh1">
            <h1>Car Chart</h1>
            <p>Homepage - Car Chart</p>
        </div>
    </div>
      <div style={{ width: '80%', marginLeft: '10%', marginTop: '1%', marginBottom: '1%' }}>
        <h2>Likes and Purchases Chart</h2>
        <canvas ref={likesPurchasesRef} id="likesPurchasesChart"></canvas>
      </div>
      <div style={{ width: '80%', marginLeft: '10%', marginTop: '2%', marginBottom: '1%' }}>
        <h2>Rate Chart</h2>
        <canvas ref={rateRef} id="rateChart"></canvas>
      </div>
      <Footer />
    </>
  );
};

export default CarChart;