import React from 'react';
import { useNavigate } from 'react-router-dom';

const Body_market = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/tmp');
  };

  return (
    <main className="relative max-w-[2560px] h-auto mx-auto bg-white flex flex-col items-center p-4 md:p-10">
      {/* 검색창 */}
      <div className="mt-5 w-full md:w-2/5 aspect-[25/2] bg-[#d9d9d9] rounded-full flex justify-center items-center"></div>

      {/* 검색 결과 및 옵션 필터 */}
      <div className="mt-10 w-full md:w-[90%] max-w-[1200px] bg-white border border-solid border-black rounded-2xl p-5 justify-center">
        <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
          {/* 좌측 옵션 */}
          <div className="flex flex-col space-y-4 w-full md:w-[20%]">
            {["종류", "현재가", "판매 기간", "경매 여부", "정렬 방식", "적용 필터"].map((option, index) => (
              <button
                key={index}
                className="w-full h-[50px] md:h-[67px] bg-[#e5e5e5] border border-solid border-[#828282] rounded-lg text-sm md:text-base"
              >
                {option}
              </button>
            ))}
          </div>

          {/* 우측 콘텐츠 */}
          <div className="flex-1 flex flex-col space-y-4">
            {[1, 2, 3, 4].map((result, idx) => (
              <div key={idx} className="bg-white border border-solid border-[#828282] p-4 rounded-lg text-sm md:text-base">
                검색결과 {result}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 중고거래 */}
      <section className="w-full mt-10">
        <div className="flex flex-wrap justify-center gap-5">
          {/* 상품 카드 */}
          {[...Array(5)].map((_, idx) => (
            <div
              key={idx}
              className="w-[45%] sm:w-[30%] md:w-[22%] lg:w-[15%] text-center cursor-pointer"
              onClick={handleNavigate}
            >
              <div className="w-full aspect-[1.5/1.2] bg-[#d9d9d9] rounded-2xl"></div>
              <div className="mt-4 text-sm md:text-xl font-bold text-black">울산 ACL 홈 유니폼</div>
              <div className="text-sm md:text-xl font-medium text-black">180,000 원</div>
              <div className="text-xs md:text-lg font-medium text-black">S, M, L, XL, 2XL...</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Body_market;
