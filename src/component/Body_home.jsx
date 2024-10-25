import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronUp, ChevronDown, Search } from 'lucide-react';
import '../styles/Body_home.css';

const BodyHome = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/tmp');
    };

    const [products] = useState([
        {
          id: 1,
          title: "울산 ACL 홈 유니폼",
          price: 180000,
          sizes: "S, M, L, XL, 2XL",
          image: "/api/placeholder/350/350"
        },
        {
          id: 2,
          title: "울산 ACL 홈 유니폼",
          price: 180000,
          sizes: "S, M, L, XL, 2XL",
          image: "/api/placeholder/350/350"
        },
        {
          id: 3,
          title: "울산 ACL 홈 유니폼",
          price: 180000,
          sizes: "S, M, L, XL, 2XL",
          image: "/api/placeholder/350/350"
        },
        {
          id: 4,
          title: "울산 ACL 홈 유니폼",
          price: 180000,
          sizes: "S, M, L, XL, 2XL",
          image: "/api/placeholder/350/350"
        },
        {
          id: 5,
          title: "울산 ACL 홈 유니폼",
          price: 180000,
          sizes: "S, M, L, XL, 2XL",
          image: "/api/placeholder/350/350"
        },
        // 추가 상품 데이터...
      ]);

    return (
        <main className="main-container">
            {/* 검색창 */}
            <div className="relative mb-6">
              <div className="flex items-center bg-gray-200 rounded-full p-4">
                <Search className="w-6 h-6 text-gray-500 mr-2" />
                <input 
                  type="text" 
                  className="w-full bg-transparent outline-none"
                  placeholder="검색어를 입력하세요"
                />
              </div>
            </div>
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
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {products.map((product) => (
                <div key={product.id} className="flex flex-col">
                    <div className="bg-gray-200 rounded-lg mb-4 aspect-square">
                    <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-lg mb-2">{product.price.toLocaleString()} 원</p>
                    <p className="text-gray-600">{product.sizes}</p>
                </div>
                ))}
            </section>

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
