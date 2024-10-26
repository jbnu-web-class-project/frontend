import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronUp, ChevronDown, Search } from 'lucide-react';

const BodyHome = () => {
    const navigate = useNavigate();
    const [isCalendarExpanded, setIsCalendarExpanded] = useState(true);
    const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
    
    const handleNavigate = () => {
        navigate('/tmp');
    };

    const toggleCalendar = () => {
        setIsCalendarExpanded(!isCalendarExpanded);
    };

    const [products] = useState([
        {
            id: 1,
            title: "울산 ACL 홈 유니폼",
            price: 180000,
            sizes: "S, M, L, XL, 2XL", 
            image: "/api/placeholder/350/350"
        },
        // ... 기존 products 데이터
    ]);

    // 실시간 검색어 상태
    const [searchKeywords, setSearchKeywords] = useState([]);
    // 달력 데이터 상태
    const [calendarData, setCalendarData] = useState({
        month: 10,
        days: [],
        events: []
    });

    // 실시간 검색어 데이터 로드
    useEffect(() => {
        const dummyKeywords = [
            "울산 ACL 홈 유니폼",
            "부산 아이파크 유니폼",
            "대구 FC 유니폼",
            "전북 현대 유니폼",
            "서울 FC 유니폼"
        ];
        setSearchKeywords(dummyKeywords);
    }, []);

    // 실시간 검색어 순환
    useEffect(() => {
        if (searchKeywords.length === 0) return;

        const interval = setInterval(() => {
            setCurrentKeywordIndex((prevIndex) => 
                prevIndex === searchKeywords.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [searchKeywords]);


    // 달력 데이터 로드
    useEffect(() => {
      // 달력 더미 데이터
      const dummyEvents = [
          { date: '2024-10-15', title: 'vs 전북현대' },
          { date: '2024-10-20', title: 'vs FC서울' },
          { date: '2024-10-25', title: 'vs 대구FC' }
      ];
      
      // 달력 날짜 생성
      const getDaysInMonth = (year, month) => {
          return new Date(year, month, 0).getDate();
      };
      
      const totalDays = getDaysInMonth(2024, 10);
      const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);
      
      setCalendarData({
          month: 10,
          days: daysArray,
          events: dummyEvents
      });
  }, []);

    return (
          <main className="container mx-auto px-4 py-8">
          {/* 검색 섹션 */}
          <section className="mb-8">
                {/* 검색창 */}
                <div className="relative mb-4">
                    <div className="flex items-center bg-gray-200 rounded-full p-4">
                        <Search className="w-6 h-6 text-gray-500 mr-2" />
                        <input 
                            type="text"
                            className="w-full bg-transparent outline-none"
                            placeholder="검색어를 입력하세요"
                        />
                    </div>
                </div>
                
                {/* 실시간 검색어 */}
                <div className="text-center">
                    {searchKeywords.length > 0 && (
                        <div className="text-sm text-gray-600 cursor-pointer hover:text-blue-500">
                            {`${currentKeywordIndex + 1}. ${searchKeywords[currentKeywordIndex]}`}
                        </div>
                    )}
                </div>
            </section>

          {/* 일정 및 카드 섹션 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* 일정 */}
              <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-2xl md:text-4xl font-bold mb-4">{calendarData.month}월</h2>
                  {/* 달력 그리드 */}
                  <div className="grid grid-cols-7 gap-2">
                      {/* 요일 헤더 */}
                      {['일', '월', '화', '수', '목', '금', '토'].map(day => (
                          <div key={day} className="text-center font-bold p-2">
                              {day}
                          </div>
                      ))}
                      
                      {/* 날짜 */}
                      {calendarData.days.map((day) => {
                          const hasEvent = calendarData.events.some(
                              event => new Date(event.date).getDate() === day
                          );
                          return (
                              <div 
                                  key={day}
                                  className={`text-center p-2 rounded-lg ${
                                      hasEvent ? 'bg-blue-100 font-bold' : ''
                                  }`}
                              >
                                  {day}
                              </div>
                          );
                      })}
                  </div>
                  
                  {/* 이벤트 목록 */}
                  <div className="mt-4">
                      {calendarData.events.map((event, index) => (
                          <div key={index} className="text-sm text-gray-600 mb-1">
                              {new Date(event.date).getDate()}일: {event.title}
                          </div>
                      ))}
                  </div>
              </div>

              {/* 카드 섹션 */}
              <div className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[...Array(4)].map((_, idx) => (
                          <div key={idx} className="bg-gray-200 rounded-lg aspect-square"></div>
                      ))}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[...Array(3)].map((_, index) => (
                          <div key={index} className="bg-gray-100 rounded-lg h-24"></div>
                      ))}
                  </div>
              </div>
          </section>

            {/* 쇼핑 섹션 */}
            <section className="mb-12">
                <h2 className="text-xl md:text-3xl font-bold mb-6 cursor-pointer" onClick={handleNavigate}>
                    아시아의 챔피언으로!
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
                </div>
            </section>

            {/* 중고거래 섹션 */}
            <section>
                <h2 className="text-xl md:text-3xl font-bold mb-6">
                    구하기 어려운 레트로 여기있어요!
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {[...Array(5)].map((_, idx) => (
                        <div key={idx} className="flex flex-col">
                            <div className="bg-gray-200 rounded-lg mb-4 aspect-square"></div>
                            <h3 className="text-xl font-bold mb-2">울산 ACL 홈 유니폼</h3>
                            <p className="text-lg mb-2">180,000 원</p>
                            <p className="text-gray-600">S, M, L, XL, 2XL</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default BodyHome;