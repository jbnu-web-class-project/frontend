import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/Body_product.css';

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  

  const navigate = useNavigate();

  const handlePurchase = () => {
    if (!selectedSize) {
      alert('사이즈를 선택해주세요.');
      return;
    }
  
    const productInfo = {
      id: 'ulsan-2025-home',
      name: '울산 HD FC 2025 홈 유니폼',
      price: 150000,
      size: selectedSize,
      option: selectedOption,
      quantity: 1,
      image: '/images/product.png',
      delivery: '무료'
    };
  
    localStorage.setItem('paymentProduct', JSON.stringify(productInfo));
    
    navigate('/payments');
  };

  return (
    <div className="product-container">
      <div className="product-section">
        {/* 왼쪽 이미지 섹션 */}
        <div className="image-section">
          <img 
            src="/images/product.png" 
            alt="울산 HD FC 유니폼" 
            className="product-image"
          />
          <div className="marking-badge">
            기본마킹
          </div>
        </div>

        {/* 오른쪽 상품 정보 섹션 */}
        <div className="info-section">
          <h1 className="product-title">울산 HD FC 2025 홈 유니폼</h1>
          <p className="product-price">150,000원</p>
          <p className="shipping-info">배송비 : 무료</p>

          {/* 선택 옵션들 */}
          <div className="select-group">
            <div className="select-wrapper">
              <select 
                className="select-box"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="">사이즈</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="2XL">2XL</option>
                <option value="3XL">3XL</option>
              </select>
            </div>
            <div className="select-wrapper">
              <select 
                className="select-box"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="">옵션 선택</option>
                <option value="basic">기본</option>
                <option value="custom">커스텀</option>
              </select>
            </div>
          </div>

          {/* 버튼 그룹 */}
          <div className="button-group">
            <button 
              onClick={handlePurchase}
              className="purchase-button"
            >
              구매하기
            </button>
            <button className="cart-button">
              장바구니
            </button>
            <button className="icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                <polyline points="16 6 12 2 8 6"/>
                <line x1="12" y1="2" x2="12" y2="15"/>
              </svg>
            </button>
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className="icon-button"
            >
              <svg 
                className={`heart-icon ${isLiked ? 'filled' : 'empty'}`}
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
          </div>

          <p className="warning-text">*주의사항 : 마킹이 안된 상품입니다.</p>
        </div>
      </div>

      {/* 상품 설명 탭 */}
      <div className="tab-section">
        <div className="tab-buttons">
          <button className="tab-button active">상품 설명</button>
          <button className="tab-button">질문</button>
        </div>
        <div className="tab-content">
          <div className="description-placeholder"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;