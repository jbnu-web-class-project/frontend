import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Body_market.css';

const BodyMarket = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/tmp');
  };

  return (
    <main className="main">
      {/* 검색창 */}
      <div className="search-bar"></div>

      {/* 검색 결과 및 옵션 필터 */}
      <div className="filter-section">
        <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
          {/* 좌측 옵션 */}
          <div className="option-group">
            {["종류", "현재가", "판매 기간", "경매 여부", "정렬 방식", "적용 필터"].map((option, index) => (
              <button key={index} className="filter-option">
                {option}
              </button>
            ))}
          </div>

          {/* 우측 콘텐츠 */}
          <div className="result-group">
            {[1, 2, 3, 4].map((result, idx) => (
              <div key={idx} className="result-card">
                검색결과 {result}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 중고거래 */}
      <section className="market-section">
        <div className="card-group">
          {/* 상품 카드 */}
          {[...Array(5)].map((_, idx) => (
            <div key={idx} className="card" onClick={handleNavigate}>
              <div className="card-image"></div>
              <div className="card-title text-sm md:text-xl">울산 ACL 홈 유니폼</div>
              <div className="card-price text-sm md:text-xl">180,000 원</div>
              <div className="card-sizes text-xs md:text-lg">S, M, L, XL, 2XL...</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BodyMarket;
