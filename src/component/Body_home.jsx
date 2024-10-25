import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Body_home.css';

const BodyHome = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/tmp');
    };

    return (
        <main className="main-container">
            {/* 검색창 */}
            <div className="home-search-bar"></div>
            <div className="title text-xl md:text-2xl">울산현대 아챔유니폼 ▲</div>

            {/* 달력, 안내 */}
            <div className="calendar-section">
                <div className="calendar">
                    <div className="calendar-title text-2xl md:text-4xl">10월</div>
                </div>
                <div className="icon-section">
                    {[...Array(4)].map((_, idx) => (
                        <div key={idx} className="icon"></div>
                    ))}
                </div>
                {[...Array(3)].map((_, index) => (
                    <div key={index} className="guide-section"></div>
                ))}
            </div>

            {/* 쇼핑 */}
            <div className="shopping-title text-xl md:text-3xl" onClick={handleNavigate}>
                아시아의 챔피언으로!
            </div>
            <div className="product-section">
                {[...Array(5)].map((_, idx) => (
                    <div key={idx} className="product-item">
                        <div className="product-img"></div>
                        <div className="product-title text-lg md:text-xl">울산 ACL 홈 유니폼</div>
                        <div className="product-price text-md md:text-xl">180,000 원</div>
                        <div className="product-sizes text-sm md:text-lg">S, M, L, XL, 2XL...</div>
                    </div>
                ))}
            </div>

            {/* 중고거래 */}
            <div className="secondhand-title">구하기 어려운 레트로 여기있어요!</div>
            <div className="product-section">
                {[...Array(5)].map((_, idx) => (
                    <div key={idx} className="product-item">
                        <div className="product-img"></div>
                        <div className="product-title text-lg md:text-xl">울산 ACL 홈 유니폼</div>
                        <div className="product-price text-md md:text-xl">180,000 원</div>
                        <div className="product-sizes text-sm md:text-lg">S, M, L, XL, 2XL...</div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default BodyHome;
