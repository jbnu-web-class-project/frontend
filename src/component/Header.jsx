import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리

  // 로그인 상태 확인 함수
  const checkLoginStatus = async () => {
    try {
      const response = await fetch('/api/members/auth/status', {
        method: 'GET',
        credentials: 'include', // 쿠키 포함
      });

      if (response.ok) {
        const data = await response.json();
        setIsLoggedIn(data.loggedIn); // 로그인 상태 설정
        console.log('로그인 상태:', data.loggedIn)
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('로그인 상태 확인 실패:', error);
      setIsLoggedIn(false);
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/members/auth/logout', {
        method: 'POST',
        credentials: 'include', // 쿠키 포함
      });
      setIsLoggedIn(false);
      console.log('로그아웃되었습니다.');
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  const handleSetting = () => {
    navigate('/settings');
  };

  const handleHome = () => {
    navigate('/');
  };

  const handleShopping = () => {
    navigate('/market');
  };

  const handleSecondHand = () => {
    navigate('/tmp');
  };

  const handleCommunity = () => {
    navigate('/community');
  };


  // 컴포넌트 로드 시 로그인 상태 확인
  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <header className="relative w-full max-w-[2560px] mx-auto bg-[#fff]">
      <div className="flex justify-between items-center px-4 py-2 md:px-8">
        <div
          className="text-5xl md:text-6xl font-['Inter'] font-extrabold text-[#000] cursor-pointer"
          onClick={handleHome}
        >
          HEIM.net
        </div>

        <div className="flex flex-raw">
          {isLoggedIn ? (
            <>
              <div className="text-xl font-['Inter'] font-extrabold text-[#000] cursor-pointer" onClick={handleLogout}>
                로그아웃
              </div>
              <div className="text-xl font-['Inter'] font-extrabold text-[#000]"> &nbsp;|&nbsp; </div>
              <div className="text-xl font-['Inter'] font-extrabold text-[#000] cursor-pointer" onClick={handleSetting}>
                설정
              </div>
            </>
          ) : (
            <div className="text-xl font-['Inter'] font-extrabold text-[#000] cursor-pointer" onClick={handleLogin}>
              로그인
            </div>
          )}
        </div>
      </div>

      <nav className="flex justify-center space-x-6 md:space-x-12 py-2">
        <div className="text-2xl font-['Inter'] font-extrabold text-[#000] cursor-pointer" onClick={handleShopping}>
          쇼핑
        </div>
        <div className="text-2xl font-['Inter'] font-extrabold text-[#000] cursor-pointer" onClick={handleSecondHand}>
          중고
        </div>
        <div className="text-2xl font-['Inter'] font-extrabold text-[#000] cursor-pointer" onClick={handleCommunity}>
          커뮤니티
        </div>
      </nav>

      <div className="w-full h-[0.5vh] bg-[#0000004d] mb-1"></div>
    </header>
  );
};

export default Header;
