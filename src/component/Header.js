import React from 'react';

const Header = () => {
  return (
    <header className="relative w-full max-w-[2560px] h-[1px] mx-auto bg-[#fff]">
      {/* HEIM.net 로고 */}
      <div className="flex justify-between items-center px-8 py-2">
        <div className="text-[50px] md:text-[80px] lg:text-[100px] font-['Inter'] font-extrabold text-[#000] whitespace-nowrap">
          HEIM.net
        </div>

        {/* 로그아웃 및 설정 */}
        <div className="text-[14px] md:text-[20px] lg:text-[25px] font-['Inter'] font-extrabold text-[#000] whitespace-nowrap">
          로그아웃 | 설정
        </div>
      </div>

      {/* 메뉴 */}
      <nav className="flex justify-center space-x-12 py-2">
        <div className="text-[30px] md:text-[40px] lg:text-[50px] font-['Inter'] font-extrabold text-[#000]">
          쇼핑
        </div>
        <div className="text-[30px] md:text-[40px] lg:text-[50px] font-['Inter'] font-extrabold text-[#000]">
          중고
        </div>
        <div className="text-[30px] md:text-[40px] lg:text-[50px] font-['Inter'] font-extrabold text-[#000]">
          커뮤니티
        </div>
      </nav>

      {/* 하단 경계선 */}
      <div className="w-full h-[4px] bg-[#0000004d] mb-1"></div>
    </header>
  );
};

export default Header;
