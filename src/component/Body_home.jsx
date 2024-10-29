import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronUp, ChevronDown, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const BodyHome = () => {
    const [products] = useState([
        {
            id: 1,
            title: "울산 ACL 홈 유니폼",
            price: 180000,
            sizes: "S, M, L, XL, 2XL", 
            image: "../images/tmp1.png"
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
            id: 1,
            title: "울산 ACL 홈 유니폼",
            price: 180000,
            sizes: "S, M, L, XL, 2XL", 
            image: "../images/tmp1.png"
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
            id: 1,
            title: "울산 ACL 홈 유니폼",
            price: 180000,
            sizes: "S, M, L, XL, 2XL", 
            image: "../images/tmp1.png"
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
    ]);

    const [auctions] = useState([
        {
            id: 1,
            title: "이명재 유니폼 팔아요",
            price: 180000,
            sizes: "S, M, L, XL, 2XL", 
            image: "../images/tmp1.png"
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
            id: 1,
            title: "이명재 유니폼 팔아요",
            price: 180000,
            sizes: "S, M, L, XL, 2XL", 
            image: "../images/tmp1.png"
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
    ]);
    
    const navigate = useNavigate();
    const [isCalendarExpanded, setIsCalendarExpanded] = useState(true);
    const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [productStartIndex, setProductStartIndex] = useState(0);
    const [auctionStartIndex, setAuctionStartIndex] = useState(0);
    const itemsPerView = 5;
    const slideCount = 5; 

    //// 배너 ////
    const bannerImages = [
        "/images/banner1.png",
        "/images/banner2.png",
    ];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
    
        return () => clearInterval(interval);
    }, []);

    ////////
    
    const handleMarket = () => {
        navigate('/market');
    };

    const handleAuction = () => {
        navigate('/auction');
    };

    const toggleCalendar = () => {
        setIsCalendarExpanded(!isCalendarExpanded);
    };

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


    useEffect(() => {
        // 달력 더미 데이터
        const dummyEvents = [
            { date: '2024-11-01', title: 'vs 강원FC', link: 'https://m.sports.naver.com/kfootball/schedule/index?category=kleague&date=2024-11-01&teamCode=01' },
            { date: '2024-11-05', title: 'vs 조호르FC', link: 'https://m.sports.naver.com/kfootball/schedule/index?category=kleague&date=2024-11-01&teamCode=01' },
            { date: '2024-11-10', title: 'vs FC서울', link: 'https://m.sports.naver.com/kfootball/schedule/index?category=kleague&date=2024-11-01&teamCode=01' },
            { date: '2024-11-23', title: 'vs 수원FC', link: 'https://m.sports.naver.com/kfootball/schedule/index?category=kleague&date=2024-11-01&teamCode=01' },
            { date: '2024-11-26', title: 'vs 상하이 하이강', link: 'https://m.sports.naver.com/kfootball/schedule/index?category=kleague&date=2024-11-01&teamCode=01' },
        ];
        
        // 첫째 날의 요일 구하기
        const firstDayOfMonth = new Date(2024, 10, 1).getDay(); // 0(일요일)부터 시작
        
        // 달력 날짜 생성
        const getDaysInMonth = (year, month) => {
            return new Date(year, month, 0).getDate();
        };
        
        const totalDays = getDaysInMonth(2024, 11); // 11월
        const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);
        
        // 빈 날짜 추가
        const emptyDays = Array(firstDayOfMonth).fill(null);
        
        setCalendarData({
            month: 11,
            days: [...emptyDays, ...daysArray],
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
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl md:text-4xl font-bold">{calendarData.month}월</h2>
                    <div className="flex gap-2">
                        {calendarData.events.map((event, index) => (
                            <div 
                                key={index} 
                                className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full cursor-pointer hover:bg-blue-200"
                                onClick={() => window.open(event.link, '_blank')}
                            >
                                {new Date(event.date).getDate()}일 {event.title}
                            </div>
                        ))}
                    </div>
                </div>
                  {/* 달력 그리드 */}
                  <div className="grid grid-cols-7 gap-2">
                      {/* 요일 헤더 */}
                      {['일', '월', '화', '수', '목', '금', '토'].map(day => (
                          <div key={day} className="text-center font-bold p-2">
                              {day}
                          </div>
                      ))}
                      
                      {/* 날짜 */}
                        {calendarData.days.map((day, index) => {
                            const hasEvent = day && calendarData.events.some(
                                event => new Date(event.date).getDate() === day
                            );
                            return (
                                <div 
                                    key={index}
                                    className={`text-center p-2 rounded-lg ${
                                        !day ? '' : hasEvent ? 'bg-blue-100 font-bold' : ''
                                    }`}
                                >
                                    {day || ''}
                                </div>
                            );
                        })}
                  </div>
              </div>

              {/* 배너 이미지 섹션 */}
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                    {bannerImages.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${
                                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <img
                                src={image}
                                alt={`Banner ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
          </section>
            {/* 쇼핑 섹션 */}
            <section className="mb-12 relative">
                <h2 className="text-xl md:text-3xl font-bold mb-6 cursor-pointer" onClick={handleMarket}>
                    아시아의 챔피언으로!
                </h2>
                
                {products.length > itemsPerView && (
                    <>
                        <button 
                            onClick={() => setProductStartIndex((prev) => {
                                const newIndex = prev - slideCount;
                                return newIndex < 0 ? products.length - slideCount : newIndex;
                            })}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button 
                            onClick={() => setProductStartIndex((prev) => 
                                (prev + slideCount) % products.length
                            )}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </>
                )}
                
                <div className="grid grid-cols-5 gap-6">
                    {[...Array(itemsPerView)].map((_, idx) => {
                        const productIndex = (productStartIndex + idx) % products.length;
                        const product = products[productIndex];
                        
                        return (
                            <div key={idx} className="flex flex-col">
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
                                <p className="text-gray-600">{product.sizes}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 중고거래 섹션 */}
            <section className="relative">
                <h2 className="text-xl md:text-3xl font-bold mb-6 cursor-pointer" onClick={handleAuction}>
                    구하기 어려운 레트로 여기있어요!
                </h2>
                
                {auctions.length > itemsPerView && (
                    <>
                        <button 
                            onClick={() => setAuctionStartIndex((prev) => {
                                const newIndex = prev - slideCount;
                                return newIndex < 0 ? products.length - slideCount : newIndex;
                            })}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button 
                            onClick={() => setAuctionStartIndex((prev) => 
                                (prev + slideCount) % products.length
                            )}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </>
                )}
                
                <div className="grid grid-cols-5 gap-6">
                    {[...Array(itemsPerView)].map((_, idx) => {
                        const auctionIndex = (auctionStartIndex + idx) % auctions.length;
                        const auction = auctions[auctionIndex];
                        
                        return (
                            <div key={idx} className="flex flex-col">
                                <div className="bg-black rounded-lg mb-4 aspect-square relative overflow-hidden group">
                                    <img 
                                        src={auction.image}
                                        alt={auction.title}
                                        className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                                        onError={(e) => {
                                            e.currentTarget.src = '/images/backup.png';
                                        }}
                                    />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{auction.title}</h3>
                                <p className="text-lg mb-2">{auction.price.toLocaleString()} 원</p>
                                <p className="text-gray-600">{auction.sizes}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
};

export default BodyHome;