// src/components/Body_home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Body_home = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/tmp'); // '/tmp' 경로로 이동
      };
    return (
        <main className="relative w-full h-auto mx-auto bg-[#fff]">
            {/* 검색창 */}
            <div className="absolute left-[646px] top-[437px] w-[795px] h-[84px] bg-[#d9d9d9] rounded-[80px]"></div>
            <div className="absolute left-[890px] top-[533px] text-[30px] font-['Inter'] font-extrabold text-[#000] whitespace-nowrap">
                울산현대 아챔유니폼 ▲
            </div>

            {/* 달력, 안내 */}
            <div className="absolute left-[181px] top-[639px] w-[504px] h-[332px] bg-[#fff] border-[1px] border-solid border-[#000] rounded-[40px]"></div>
            <div className="absolute left-[373px] top-[653px] text-[50px] font-['Inter'] font-extrabold text-[#000] whitespace-nowrap">10월</div>
            <div className="absolute left-[829px] top-[639px] w-[351px] h-[327px] bg-[#d9d9d9] rounded-[50px]"></div>
            <div className="absolute left-[1205px] top-[639px] w-[351px] h-[327px] bg-[#d9d9d9] rounded-[50px]"></div>
            <div className="absolute left-[1581px] top-[639px] w-[351px] h-[327px] bg-[#d9d9d9] rounded-[50px]"></div>
            <div className="absolute left-[763px] top-[714px] w-[30px] h-[30px] bg-[#d9d9d9] rounded-full"></div>
            <div className="absolute left-[763px] top-[773px] w-[30px] h-[30px] bg-[#d9d9d9] rounded-full"></div>
            <div className="absolute left-[763px] top-[826px] w-[30px] h-[30px] bg-[#d9d9d9] rounded-full"></div>
            <div className="absolute left-[763px] top-[879px] w-[30px] h-[30px] bg-[#d9d9d9] rounded-full"></div>

            {/* 쇼핑 */}
            <div className="absolute left-[141px] top-[1047px] text-[45px] font-['Inter'] font-extrabold text-[#000] whitespace-nowrap" onClick={handleNavigate}>아시아의 챔피언으로 !</div>
            <div className="absolute left-[146px] top-[1500px] text-[30px] font-['Inter'] font-bold text-[#000] whitespace-nowrap">울산 ACL 홈 유니폼</div>
            <div className="absolute left-[146px] top-[1546px] text-[30px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">180,000 원</div>
            <div className="absolute left-[146px] top-[1592px] text-[25px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">S, M, L, XL, 2XL...</div>
            <div className="absolute left-[141px] top-[1140px] w-[350px] h-[350px] bg-[#d9d9d9] rounded-[20px]"></div>
            <div className="absolute left-[141px] top-[1047px] text-[45px] font-['Inter'] font-extrabold text-[#000] whitespace-nowrap">아시아의 챔피언으로 !</div>
            <div className="absolute left-[146px] top-[1500px] text-[30px] font-['Inter'] font-bold text-[#000] whitespace-nowrap">울산 ACL 홈 유니폼</div>
            <div className="absolute left-[146px] top-[1546px] text-[30px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">180,000 원</div>
            <div className="absolute left-[146px] top-[1592px] text-[25px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">S, M, L, XL, 2XL...</div>
            <div className="absolute left-[513px] top-[1140px] w-[350px] h-[350px] bg-[#d9d9d9] rounded-[20px]"></div>
            <div className="absolute left-[518px] top-[1500px] text-[30px] font-['Inter'] font-bold text-[#000] whitespace-nowrap">울산 ACL 홈 유니폼</div>
            <div className="absolute left-[518px] top-[1546px] text-[30px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">180,000 원</div>
            <div className="absolute left-[518px] top-[1592px] text-[25px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">S, M, L, XL, 2XL...</div>
            <div className="absolute left-[885px] top-[1140px] w-[350px] h-[350px] bg-[#d9d9d9] rounded-[20px]"></div>
            <div className="absolute left-[890px] top-[1500px] text-[30px] font-['Inter'] font-bold text-[#000] whitespace-nowrap">울산 ACL 홈 유니폼</div>
            <div className="absolute left-[890px] top-[1546px] text-[30px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">180,000 원</div>
            <div className="absolute left-[890px] top-[1592px] text-[25px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">S, M, L, XL, 2XL...</div>
            <div className="absolute left-[1257px] top-[1140px] w-[350px] h-[350px] bg-[#d9d9d9] rounded-[20px]"></div>
            <div className="absolute left-[1262px] top-[1500px] text-[30px] font-['Inter'] font-bold text-[#000] whitespace-nowrap">울산 ACL 홈 유니폼</div>
            <div className="absolute left-[1262px] top-[1546px] text-[30px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">180,000 원</div>
            <div className="absolute left-[1262px] top-[1592px] text-[25px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">S, M, L, XL, 2XL...</div>
            <div className="absolute left-[1629px] top-[1140px] w-[350px] h-[350px] bg-[#d9d9d9] rounded-[20px]"></div>
            <div className="absolute left-[141px] top-[1771px] w-[350px] h-[350px] bg-[#d9d9d9] rounded-[20px]"></div>

            {/* 중고거래 */}
            <div className="absolute left-[141px] top-[1678px] text-[45px] font-['Inter'] font-extrabold text-[#000] whitespace-nowrap">구하기 어려운 레트로 여기있어요 !</div>
            <div className="absolute left-[513px] top-[1771px] w-[350px] h-[350px] bg-[#d9d9d9] rounded-[20px]"></div>
            <div className="absolute left-[885px] top-[1771px] w-[350px] h-[350px] bg-[#d9d9d9] rounded-[20px]"></div>
            <div className="absolute left-[1257px] top-[1771px] w-[350px] h-[350px] bg-[#d9d9d9] rounded-[20px]"></div>
            <div className="absolute left-[1629px] top-[1771px] w-[350px] h-[350px] bg-[#d9d9d9] rounded-[20px]"></div>
            <div className="absolute left-[1634px] top-[1500px] text-[30px] font-['Inter'] font-bold text-[#000] whitespace-nowrap">울산 ACL 홈 유니폼</div>
            <div className="absolute left-[1634px] top-[1546px] text-[30px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">180,000 원</div>
            <div className="absolute left-[1634px] top-[1592px] text-[25px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">S, M, L, XL, 2XL...</div>
            <div className="absolute left-[146px] top-[2131px] text-[30px] font-['Inter'] font-bold text-[#000] whitespace-nowrap">울산 ACL 홈 유니폼</div>
            <div className="absolute left-[146px] top-[2177px] text-[30px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">현재가 :  210,000원</div>
            <div className="absolute left-[146px] top-[2223px] text-[25px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">경매 곧 끝낼게요 </div>
            <div className="absolute left-[885px] top-[2223px] text-[25px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">경매 곧 끝낼게요 </div>
            <div className="absolute left-[518px] top-[2131px] text-[30px] font-['Inter'] font-bold text-[#000] whitespace-nowrap">울산 ACL 홈 유니폼</div>
            <div className="absolute left-[518px] top-[2177px] text-[30px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">180,000 원</div>
            <div className="absolute left-[518px] top-[2223px] text-[25px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">경매 곧 끝낼게요</div>
            <div className="absolute left-[890px] top-[2131px] text-[30px] font-['Inter'] font-bold text-[#000] whitespace-nowrap">울산 ACL 홈 유니폼</div>
            <div className="absolute left-[890px] top-[2177px] text-[30px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">180,000 원</div>
            <div className="absolute left-[1262px] top-[2131px] text-[30px] font-['Inter'] font-bold text-[#000] whitespace-nowrap">울산 ACL 홈 유니폼</div>
            <div className="absolute left-[1262px] top-[2177px] text-[30px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">180,000 원</div>
            <div className="absolute left-[1262px] top-[2223px] text-[25px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">S, M, L, XL, 2XL...</div>
            <div className="absolute left-[1634px] top-[2131px] text-[30px] font-['Inter'] font-bold text-[#000] whitespace-nowrap">울산 ACL 홈 유니폼</div>
            <div className="absolute left-[1634px] top-[2177px] text-[30px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">180,000 원</div>
            <div className="absolute left-[1634px] top-[2223px] text-[25px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">S, M, L, XL, 2XL...</div>
        </main>
    );
};

export default Body_home;
