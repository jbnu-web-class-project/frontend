import React from 'react';
import { useNavigate } from 'react-router-dom';

const Body_market = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
      navigate('/tmp'); // '/tmp' 경로로 이동
    };
  return (
  <main className="relative min-w-[undefined] max-w-[undefined] min-h-[undefined] max-h-[undefined] flex bg-[#fff] opacity-[NaN]">
      {/* 검색창 */}
      <div className="absolute left-[646px] top-[437px] w-[795px] h-[84px] bg-[#d9d9d9] rounded-[80px] z-10"></div>
      <div className="absolute left-[377px] top-[381px] w-[1365px] h-[671px] bg-[#fff] border-[1px] border-solid border-[#000] rounded-[20px]"></div>
      <div className="absolute left-[475px] top-[620px] w-[180px] h-[67px] bg-[#e5e5e5] border-[1px] border-solid border-[#828282] rounded-tl-[4px] rounded-tr-0 rounded-br-0"></div>
      <div className="absolute left-[475px] top-[687px] w-[180px] h-[67px] bg-[#e5e5e5] border-[1px] border-solid border-[#828282] rounded-tl-[4px] rounded-tr-0 rounded-br-0"></div>
      <div className="absolute left-[475px] top-[754px] w-[180px] h-[67px] bg-[#e5e5e5] border-[1px] border-solid border-[#828282] rounded-tl-[4px] rounded-tr-0 rounded-br-0"></div>
      <div className="absolute left-[475px] top-[821px] w-[180px] h-[67px] bg-[#e5e5e5] border-[1px] border-solid border-[#828282] rounded-tl-[4px] rounded-tr-0 rounded-br-0"></div>
      <div className="absolute left-[655px] top-[687px] w-[975px] h-[67px] bg-[#fff] border-[1px] border-solid border-[#828282]"></div>
      <div className="absolute left-[655px] top-[620px] w-[975px] h-[67px] bg-[#fff] border-[1px] border-solid border-[#828282]"></div>
      <div className="absolute left-[655px] top-[754px] w-[975px] h-[67px] bg-[#fff] border-[1px] border-solid border-[#828282]"></div>
      <div className="absolute left-[655px] top-[821px] w-[975px] h-[67px] bg-[#fff] border-[1px] border-solid border-[#828282] rounded-tl-0 rounded-tr-0 rounded-br-[4px]"></div>
      <div className="absolute left-[475px] top-[888px] w-[180px] h-[67px] bg-[#e5e5e5] border-[1px] border-solid border-[#828282] rounded-tl-[4px] rounded-tr-0 rounded-br-0"></div>
      <div className="absolute left-[655px] top-[888px] w-[975px] h-[67px] bg-[#fff] border-[1px] border-solid border-[#828282] rounded-tl-0 rounded-tr-0 rounded-br-[4px]"></div>
      <div className="absolute left-[475px] top-[955px] w-[180px] h-[67px] bg-[#e5e5e5] border-[1px] border-solid border-[#828282] rounded-tl-[4px] rounded-tr-0 rounded-br-0"></div>
      <div className="absolute left-[655px] top-[955px] w-[975px] h-[67px] bg-[#fff] border-[1px] border-solid border-[#828282] rounded-tl-0 rounded-tr-0 rounded-br-[4px]"></div>
      <div className="absolute left-[518px] top-[448px] text-[50px] font-['Inter'] font-bold text-[#000] whitespace-nowrap">검색</div>
      <div className="absolute left-[537px] top-[638px] text-[30px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">종류</div>
      <div className="absolute left-[500px] top-[544px] text-[30px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">연관검색어 : </div>
      <div className="absolute left-[523px] top-[703px] text-[30px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">현재가</div>
      <div className="absolute left-[505px] top-[770px] text-[30px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">판매 기간</div>
      <div className="absolute left-[509px] top-[837px] text-[30px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">경매 여부</div>
      <div className="absolute left-[509px] top-[904px] text-[30px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">정렬 방식</div>
      <div className="absolute left-[509px] top-[971px] text-[30px] font-['Inter'] font-medium text-[#000] whitespace-nowrap">적용 필터</div>


      {/* 중고거래 */}
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
      
    </main>
  );
};

export default Body_market;