import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import '../styles/Body_signup.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    phone: '',
    address: '',
    favoriteSport: '',
    favoriteTeam: ''
  });

  return (
    <div className="main-container">
      <div className="relative-container">
        {/* Main Container */}
        <div className="form-container">
          {/* Icon */}
          <div className="icon-container">
            <div className="icon-wrapper">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
            </div>
          </div>

          {/* Google Sign Up Button */}
          <div className="google-btn-container">
            <button className="google-btn">
              <img src="../assets/image/google-signUp.svg" alt="Google Sign Up"/>
            </button>
          </div>

          {/* Signup Form */}
          <form className="form">
            {/* Input Fields */}
            <input type="email" placeholder="아이디 (이메일)" className="input-field" />
            <input type="password" placeholder="비밀번호" className="input-field" />
            <input type="password" placeholder="비밀번호 확인" className="input-field" />
            <input type="text" placeholder="닉네임" className="input-field" />
            <input type="tel" placeholder="전화번호" className="input-field" />
            <input type="text" placeholder="주소" className="input-field" />

            {/* Dropdown Selects */}
            <div className="relative">
              <select className="select-field">
                <option value="">선호 스포츠</option>
                <option value="football">축구</option>
                <option value="baseball">야구</option>
                <option value="basketball">농구</option>
              </select>
              <ChevronDown className="dropdown-icon" />
            </div>

            <div className="relative">
              <select className="select-field">
                <option value="">선호 구단</option>
                <option value="team1">팀 1</option>
                <option value="team2">팀 2</option>
                <option value="team3">팀 3</option>
              </select>
              <ChevronDown className="dropdown-icon" />
            </div>

            {/* Buttons */}
            <div className="button-group">
              <button type="button" className="cancel-button">취소</button>
              <button type="submit" className="submit-button">등록</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
