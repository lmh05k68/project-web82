import React, { useEffect, useRef } from 'react';
import Data from '../../data.js'; 
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

const CarChart = () => {
  const chartRef = useRef(null);
  Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

  // Chuẩn bị dữ liệu cho biểu đồ từ mảng Data
  const carNames = Data.map(car => car.name); // Lấy tên xe
  const carLikes = Data.map(car => car.likes); // Lấy lượt thích
  const carSales = Data.map(car => car.purchases); // Lấy số lần mua
  const carRates = Data.map(car => car.rate || 0); // Lấy rating, mặc định 0 nếu không có

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const carChart = new Chart(ctx, {
      type: 'bar', // Chọn loại biểu đồ
      data: {
        labels: carNames, // Gán nhãn cho trục X là tên các xe
        datasets: [
          {
            label: 'Likes', // Nhãn cho số lượt thích
            data: carLikes, // Gán dữ liệu là số lượt thích từ Data
            backgroundColor: 'rgba(75, 192, 192, 0.5)', // Màu nền cho cột biểu đồ
            borderColor: 'rgba(75, 192, 192, 1)', // Màu viền cho cột biểu đồ
            borderWidth: 1,
          },
          {
            label: 'Purchases', // Nhãn cho số lượt mua
            data: carSales, // Gán dữ liệu là số lượt mua từ Data
            backgroundColor: 'rgba(54, 162, 235, 0.5)', // Màu nền cho cột biểu đồ
            borderColor: 'rgba(54, 162, 235, 1)', // Màu viền cho cột biểu đồ
            borderWidth: 1,
          },
          {
            label: 'Rate', // Nhãn cho đánh giá
            data: carRates, // Gán dữ liệu là số rating từ Data
            backgroundColor: 'rgba(255, 159, 64, 0.5)', // Màu nền cho cột biểu đồ
            borderColor: 'rgba(255, 159, 64, 1)', // Màu viền cho cột biểu đồ
            borderWidth: 1,
          },
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
      carChart.destroy(); // Hủy biểu đồ trước khi tạo lại để tránh lỗi
    };
  }, [carNames, carLikes, carSales, carRates]);

  return (
    <>
      <div className="newHeader">
        <Header />
        <h1>Chart</h1>
      </div>
      <div style={{ width: '80%', marginLeft: '10%', marginTop: '1%', marginBottom: '1%' }}>
        <canvas ref={chartRef} id="carChart"></canvas>
      </div>
      <Footer />
    </>
  );
};

export default CarChart;