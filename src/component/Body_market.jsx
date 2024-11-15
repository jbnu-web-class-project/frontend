import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BodyMarket = () => {

  const navigate = useNavigate();

  const [products] = useState([
    {
      id: 1,
      title: "울산 ACL 홈 유니폼",
      price: 180000,
      sizes: ["S", "M", "L", "XL", "2XL"],
      image: "../images/tmp1.png",
      kind: "1",
      subKind: "home",
      createdAt: "2024-10-30"
    },
    {
      id: 2,
      title: "울산 ACL 홈 유니폼",
      price: 180000,
      sizes: ["S", "M", "L", "XL", "2XL"],
      image: "../images/tmp1.png",
      kind: "1",
      subKind: "home",
      createdAt: "2024-10-30"
    },
    {
      id: 3,
      title: "울산 ACL 홈 유니폼",
      price: 180000,
      sizes: ["S", "M", "L", "XL", "2XL"],
      image: "../images/tmp1.png",
      kind: "1",
      subKind: "home",
      createdAt: "2024-10-30"
    },
    {
      id: 4,
      title: "울산 ACL 홈 유니폼",
      price: 180000,
      sizes: ["S", "M", "L", "XL", "2XL"],
      image: "../images/tmp1.png",
      kind: "1",
      subKind: "home",
      createdAt: "2024-10-30"
    },
  ]);

  const [isTableExpanded, setIsTableExpanded] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // 필터 상태 관리
  const [filters, setFilters] = useState({
    kind: [],           // 종류
    subKind: [],        // 세부종류
    sizes: [],          // 사이즈
    priceRange: '',     // 가격대
    sortBy: 'newest',   // 정렬 방식
  });

  // 필터 옵션 데이터
  const filterOptions = {
    kind: [
      { id: '1', label: '유니폼' },
      { id: '2', label: '의류' },
      { id: '3', label: '모자' },
      { id: '4', label: '응원도구' }
    ],
    subKind: {
      '1': [  // 유니폼 세부종류
        { id: 'home', label: '홈' },
        { id: 'away', label: '어웨이' },
        { id: 'third', label: 'ACL' }
      ],
      '2': [  // 의류 세부종류
        { id: 'shirt', label: '티셔츠' },
        { id: 'pants', label: '바지' },
        { id: 'jacket', label: '자켓' }
      ]
    },
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    priceRanges: [
      { id: '1', label: '5만원 이하', value: '0-50000' },
      { id: '2', label: '5-10만원', value: '50000-100000' },
      { id: '3', label: '10-15만원', value: '100000-150000' },
      { id: '4', label: '15만원 이상', value: '150000-' }
    ],
    sortOptions: [
      { id: 'newest', label: '최신순' },
      { id: 'priceAsc', label: '가격 낮은순' },
      { id: 'priceDesc', label: '가격 높은순' },
      { id: 'popular', label: '인기순' }
    ]
  };

  const toggleTable = () => {
    setIsTableExpanded(!isTableExpanded);
  };

  // 필터링 로직
  const applyFilters = () => {
      let result = [...products];
      
      // 종류 필터
      if (filters.kind.length > 0) {
          result = result.filter(product => 
              filters.kind.includes(product.kind)
          );
      }

      // 세부종류 필터
      if (filters.subKind.length > 0) {
          result = result.filter(product => 
              filters.subKind.includes(product.subKind)
          );
      }

      // 사이즈 필터
      if (filters.sizes.length > 0) {
          result = result.filter(product => 
              filters.sizes.some(size => product.sizes.includes(size))
          );
      }

      // 가격대 필터
      if (filters.priceRange) {
          const [min, max] = filters.priceRange.split('-').map(Number);
          result = result.filter(product => 
              product.price >= min && (!max || product.price <= max)
          );
      }

      // 정렬
      switch (filters.sortBy) {
          case 'priceAsc':
              result.sort((a, b) => a.price - b.price);
              break;
          case 'priceDesc':
              result.sort((a, b) => b.price - a.price);
              break;
          case 'popular':
              // 인기순 정렬 로직
              break;
      }

      setFilteredProducts(result);
  };

  // 필터 변경시 적용
  useEffect(() => {
      applyFilters();
  }, [filters]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
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
              {/* 종류 */}
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-medium">종류</h3>
              </div>
              <div className="col-span-3 bg-white border p-4 rounded flex flex-wrap gap-3">
                {filterOptions.kind.map(option => (
                  <label key={option.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.kind.includes(option.id)}
                      onChange={(e) => {
                        const newKind = e.target.checked
                          ? [...filters.kind, option.id]
                          : filters.kind.filter(k => k !== option.id);
                        setFilters(prev => ({ ...prev, kind: newKind }));
                      }}
                      className="rounded"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>

              {/* 세부종류 - 선택된 종류에 따라 동적으로 표시 */}
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-medium">세부종류</h3>
              </div>
              <div className="col-span-3 bg-white border p-4 rounded flex flex-wrap gap-3">
                {filters.kind.map(kindId => 
                  filterOptions.subKind[kindId]?.map(option => (
                    <label key={option.id} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={filters.subKind.includes(option.id)}
                        onChange={(e) => {
                          const newSubKind = e.target.checked
                            ? [...filters.subKind, option.id]
                            : filters.subKind.filter(sk => sk !== option.id);
                          setFilters(prev => ({ ...prev, subKind: newSubKind }));
                        }}
                        className="rounded"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))
                )}
              </div>

              {/* 사이즈 */}
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-medium">사이즈</h3>
              </div>
              <div className="col-span-3 bg-white border p-4 rounded flex flex-wrap gap-3">
                {filterOptions.sizes.map(size => (
                  <label key={size} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.sizes.includes(size)}
                      onChange={(e) => {
                        const newSizes = e.target.checked
                          ? [...filters.sizes, size]
                          : filters.sizes.filter(s => s !== size);
                        setFilters(prev => ({ ...prev, sizes: newSizes }));
                      }}
                      className="rounded"
                    />
                    <span>{size}</span>
                  </label>
                ))}
              </div>

              {/* 가격대 */}
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-medium">가격대</h3>
              </div>
              <div className="col-span-3 bg-white border p-4 rounded flex flex-wrap gap-3">
                {filterOptions.priceRanges.map(range => (
                  <label key={range.id} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="priceRange"
                      value={range.value}
                      checked={filters.priceRange === range.value}
                      onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
                      className="rounded"
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>

              {/* 정렬 방식 */}
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-medium">정렬 방식</h3>
              </div>
              <div className="col-span-3 bg-white border p-4 rounded">
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
                  className="w-full p-2 border rounded"
                >
                  {filterOptions.sortOptions.map(option => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* 적용 필터 */}
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-medium">적용 필터</h3>
              </div>
              <div className="col-span-3 bg-white border p-4 rounded flex flex-wrap gap-2">
                {/* 종류 필터 */}
                  {filters.kind.map(k => (
                      <span key={k} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                          {filterOptions.kind.find(opt => opt.id === k)?.label}
                          <button
                              onClick={() => setFilters(prev => ({
                                  ...prev,
                                  kind: prev.kind.filter(item => item !== k)
                              }))}
                              className="ml-2 hover:text-blue-600"
                          >
                              ×
                          </button>
                      </span>
                  ))}

                  {/* 세부종류 필터 */}
                  {filters.subKind.map(sk => (
                      <span key={sk} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                          {filters.kind.map(k => 
                              filterOptions.subKind[k]?.find(opt => opt.id === sk)?.label
                          ).filter(Boolean)[0]}
                          <button
                              onClick={() => setFilters(prev => ({
                                  ...prev,
                                  subKind: prev.subKind.filter(item => item !== sk)
                              }))}
                              className="ml-2 hover:text-green-600"
                          >
                              ×
                          </button>
                      </span>
                  ))}

                  {/* 사이즈 필터 */}
                  {filters.sizes.map(size => (
                      <span key={size} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
                          {size}
                          <button
                              onClick={() => setFilters(prev => ({
                                  ...prev,
                                  sizes: prev.sizes.filter(item => item !== size)
                              }))}
                              className="ml-2 hover:text-yellow-600"
                          >
                              ×
                          </button>
                      </span>
                  ))}

                  {/* 가격대 필터 */}
                  {filters.priceRange && (
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">
                          {filterOptions.priceRanges.find(range => range.value === filters.priceRange)?.label}
                          <button
                              onClick={() => setFilters(prev => ({
                                  ...prev,
                                  priceRange: ''
                              }))}
                              className="ml-2 hover:text-red-600"
                          >
                              ×
                          </button>
                      </span>
                  )}

                  {/* 정렬 방식 */}
                  {filters.sortBy !== 'newest' && (
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">
                          {filterOptions.sortOptions.find(opt => opt.id === filters.sortBy)?.label}
                          <button
                              onClick={() => setFilters(prev => ({
                                  ...prev,
                                  sortBy: 'newest'
                              }))}
                              className="ml-2 hover:text-purple-600"
                          >
                              ×
                          </button>
                      </span>
                  )}
                
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 상품 그리드 */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleProductClick(product.id)}
          >
            <div className="bg-black rounded-lg mb-4 aspect-square relative overflow-hidden group">
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = '/images/backup.png';
                }}
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{product.title}</h3>
            <p className="text-lg mb-2">{product.price.toLocaleString()} 원</p>
            <p className="text-gray-600">{product.sizes.join(', ')}</p>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <div className="col-span-full text-center py-8 text-gray-500">
            검색 결과가 없습니다.
          </div>
        )}
      </section>
    </main>
  );
};

export default BodyMarket;