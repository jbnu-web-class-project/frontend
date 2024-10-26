import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  // 로그인, 로그아웃, 설정
  const handleLogin = () => {
    console.log("로그인되었습니다.");
  };

  const handleLogout = () => {
    console.log("로그아웃되었습니다.");
  };

  const handleSetting = () => {
    console.log("설정.");
  };

  // 페이지 리디렉션
  const handleHome = () => {
    navigate('/');
    console.log("홈.");
  };

  const handleShopping = () => {
    navigate('/market');
    console.log("쇼핑.");
  };

  const handleSecondHand = () => {
    console.log("중고.");
  };

  const handleCommunity = () => {
    navigate('/community');
    console.log("커뮤니티.");
  };

  return (
    <header className="relative w-full max-w-[2560px] mx-auto bg-[#fff]">
      {/* HEIM.net 로고 */}
      <div className="flex justify-between items-center px-4 py-2 md:px-8">
        <div className="text-4xl font-['Inter'] font-extrabold text-[#000] whitespace-nowrap" onClick={handleHome}>
          HEIM.net
        </div>

        {/* 로그아웃 및 설정 */}
        <div className="flex flex-raw">
          <div className="text-xl font-['Inter'] font-extrabold text-[#000] bg-transparent cursor-pointer hover:text-gray-500" onClick={handleLogout}> 로그아웃 </div>
          <div className="text-xl font-['Inter'] font-extrabold text-[#000] whitespace-pre">    |    </div>
          <div className="text-xl font-['Inter'] font-extrabold text-[#000] bg-transparent cursor-pointer hover:text-gray-500" onClick={handleSetting}> 설정 </div>
        </div>
      </div>

      {/* 메뉴 */}
      <nav className="flex justify-center space-x-6 md:space-x-12 py-2">
        <div className="text-2xl font-['Inter'] font-extrabold text-[#000] bg-transparent cursor-pointer hover:text-gray-500" onClick={handleShopping}>
          쇼핑
        </div>
        <div className="text-2xl font-['Inter'] font-extrabold text-[#000] bg-transparent cursor-pointer hover:text-gray-500" onClick={handleSecondHand}>
          중고
        </div>
        <div className="text-2xl font-['Inter'] font-extrabold text-[#000] bg-transparent cursor-pointer hover:text-gray-500" onClick={handleCommunity}>
          커뮤니티
        </div>
      </nav>

      {/* 하단 경계선 */}
      <div className="w-full h-[0.5vh] bg-[#0000004d] mb-1"></div>
    </header>
  );
};

export default Header;
