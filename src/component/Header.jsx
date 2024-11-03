import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리

  // 로그인, 로그아웃, 설정
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/login')
    console.log("로그인되었습니다.");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("로그아웃되었습니다.");
  };

  const handleSetting = () => {
    navigate('/tmp');
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
    navigate('/tmp');
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
          <div 
              className="text-5xl md:text-6xl font-['Inter'] font-extrabold text-[#000] whitespace-nowrap cursor-pointer hover:scale-105 transition-transform duration-200" 
              onClick={handleHome}
          >
              HEIM.net
          </div>

        {/* 로그아웃 및 설정 */}
        <div className="flex flex-raw">
          {isLoggedIn ? (
            <>
              <div className="text-xl font-['Inter'] font-extrabold text-[#000] bg-transparent cursor-pointer hover:text-gray-500" onClick={handleLogout}> 로그아웃 </div>
              <div className="text-xl font-['Inter'] font-extrabold text-[#000] whitespace-pre">{"    |    "}</div>
              <div className="text-xl font-['Inter'] font-extrabold text-[#000] bg-transparent cursor-pointer hover:text-gray-500" onClick={handleSetting}> 설정 </div>
            </>
          ) : (
            <div className="text-xl font-['Inter'] font-extrabold text-[#000] bg-transparent cursor-pointer hover:text-gray-500" onClick={handleLogin}> 로그인 </div>
          )}
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
