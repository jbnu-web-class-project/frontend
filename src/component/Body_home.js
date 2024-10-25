import React from 'react';
import { useNavigate } from 'react-router-dom';

const BodyHome = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/tmp');
    };

    return (
        <main className="relative max-w-[2560px] h-auto mx-auto bg-white flex flex-col items-center p-4 md:p-10">
            {/* 검색창 */}
            <div className="mt-5 w-[90%] md:w-2/5 aspect-[25/1] bg-[#d9d9d9] rounded-full flex justify-center items-center"></div>
            <div className="mt-4 text-xl md:text-2xl font-extrabold text-black">
                울산현대 아챔유니폼 ▲
            </div>

            {/* 달력, 안내 */}
            <div className="flex flex-col md:flex-row justify-center items-center w-full mt-10 gap-4">
                {/* 달력 */}
                <div className="w-full md:w-[20%] aspect-[1.5/1.2] bg-white border border-black rounded-3xl flex flex-col items-center">
                    <div className="text-2xl md:text-4xl font-extrabold text-black mt-4">10월</div>
                    {/* 필요한 경우 달력 내용 추가 */}
                </div>

                {/* 동그라미 아이콘 */}
                <div className="w-[30%] md:w-[2%] aspect-[1/1] flex flex-row md:flex-col mt-4 md:mt-10 mb-10 gap-2 justify-between items-center">
                    {[...Array(4)].map((_, idx) => (
                        <div key={idx} className="w-[15%] md:w-[70%] aspect-[1/1] bg-[#d9d9d9] rounded-full"></div>
                    ))}
                </div>

                {/* 안내 */}
                {[...Array(3)].map((_, index) => (
                    <div key={index} className="w-[45%] md:w-[20%] aspect-[1.5/1.2] bg-[#d9d9d9] rounded-3xl"></div>
                ))}
            </div>

            {/* 쇼핑 */}
            <div className="mt-10 text-xl md:text-3xl font-extrabold text-black cursor-pointer" onClick={handleNavigate}> 아시아의 챔피언으로! </div>
            <div className="flex justify-center w-full mt-8 flex-wrap gap-4 md:gap-10">
                {/* 각 상품 아이템 반복 렌더링 */}
                {[...Array(5)].map((_, idx) => (
                    <div key={idx} className="w-[45%] md:w-[15%] text-center">
                        <div className="w-full aspect-[1.5/1.2] bg-[#d9d9d9] rounded-2xl"></div>
                        <div className="mt-4 text-lg md:text-xl font-bold text-black">울산 ACL 홈 유니폼</div>
                        <div className="text-md md:text-xl font-medium text-black">180,000 원</div>
                        <div className="text-sm md:text-lg font-medium text-black">S, M, L, XL, 2XL...</div>
                    </div>
                ))}
            </div>

            {/* 중고거래 */}
            <div className="mt-10 text-xl md:text-3xl font-extrabold text-black">구하기 어려운 레트로 여기있어요!</div>
            <div className="flex justify-center w-full mt-8 flex-wrap gap-4 md:gap-10">
                {/* 각 상품 아이템 반복 렌더링 */}
                {[...Array(5)].map((_, idx) => (
                    <div key={idx} className="w-[45%] md:w-[15%] text-center">
                        <div className="w-full aspect-[1.5/1.2] bg-[#d9d9d9] rounded-2xl"></div>
                        <div className="mt-4 text-lg md:text-xl font-bold text-black">울산 ACL 홈 유니폼</div>
                        <div className="text-md md:text-xl font-medium text-black">180,000 원</div>
                        <div className="text-sm md:text-lg font-medium text-black">S, M, L, XL, 2XL...</div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default BodyHome;
