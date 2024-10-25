import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Search } from 'lucide-react';

const BodyMarket = () => {
  const [isTableExpanded, setIsTableExpanded] = useState(true);
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

  const toggleTable = () => {
    setIsTableExpanded(!isTableExpanded);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      {/* 검색 섹션 */}
      <section className="bg-white rounded-lg shadow-lg mb-8">
        <div className="flex items-center p-4 border-b">
          <button 
            onClick={toggleTable}
            className="mr-4 hover:bg-gray-100 p-2 rounded"
          >
            {isTableExpanded ? <ChevronUp /> : <ChevronDown />}
          </button>
          <h2 className="text-3xl font-bold">검색</h2>
        </div>

        {isTableExpanded && (
          <div className="p-4">
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

            {/* 연관검색어 */}
            <div className="mb-4">
              <span className="text-lg font-medium">연관검색어 : </span>
            </div>

            {/* 검색 필터 테이블 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-medium">종류</h3>
              </div>
              <div className="col-span-3 bg-white border p-4 rounded"></div>

              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-medium">현재가</h3>
              </div>
              <div className="col-span-3 bg-white border p-4 rounded"></div>

              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-medium">판매 기간</h3>
              </div>
              <div className="col-span-3 bg-white border p-4 rounded"></div>

              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-medium">경매 여부</h3>
              </div>
              <div className="col-span-3 bg-white border p-4 rounded"></div>

              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-medium">정렬 방식</h3>
              </div>
              <div className="col-span-3 bg-white border p-4 rounded"></div>

              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-medium">적용 필터</h3>
              </div>
              <div className="col-span-3 bg-white border p-4 rounded"></div>
            </div>
          </div>
        )}
      </section>

      {/* 상품 그리드 */}
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
    </main>
  );
};

export default BodyMarket;