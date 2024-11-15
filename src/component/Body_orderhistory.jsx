import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Body_orderhistory.css';

const OrderHistory = () => {
  const navigate = useNavigate();

  // 더미 데이터
  const orders = [
    {
      id: 'ORDER_20241115_001',
      date: '2024.11.15',
      status: '배송준비중',
      items: [
        {
          name: '울산 HD FC 2025 홈 유니폼',
          option: '사이즈: 2XL / 기본마킹',
          price: 150000,
          quantity: 1,
          image: '/images/product.png'
        }
      ]
    },
    {
      id: 'ORDER_20241110_002',
      date: '2024.11.10',
      status: '배송완료',
      items: [
        {
          name: '울산 HD FC 2024 어웨이 유니폼',
          option: '사이즈: XL / 네임마킹',
          price: 160000,
          quantity: 1,
          image: '/images/product2.png'
        }
      ]
    }
  ];

  return (
    <div className="order-history-container">
      <div className="order-history-header">
        <h1>구매내역</h1>
        <div className="period-buttons">
          <button className="active">1개월</button>
          <button>3개월</button>
          <button>6개월</button>
          <button>1년</button>
        </div>
      </div>

      <div className="order-list">
        {orders.map(order => (
          <div key={order.id} className="order-item">
            <div className="order-header">
              <div className="order-info">
                <span className="order-date">{order.date}</span>
                <span className="order-number">주문번호: {order.id}</span>
              </div>
              <div className="order-status">{order.status}</div>
            </div>
            
            {order.items.map((item, index) => (
              <div key={index} className="product-info">
                <div className="product-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="product-details">
                  <h3>{item.name}</h3>
                  <p className="option">{item.option}</p>
                  <p className="price">{item.price.toLocaleString()}원</p>
                </div>
                <div className="order-actions">
                  <button className="detail-button" 
                    onClick={() => navigate(`/order-detail/${order.id}`)}>
                    주문상세
                  </button>
                  {order.status === '배송완료' && (
                    <>
                      <button className="review-button">리뷰작성</button>
                      <button className="return-button">교환/반품</button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;