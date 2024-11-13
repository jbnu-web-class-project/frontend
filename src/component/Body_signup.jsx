import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { handleApiError } from '../utils/errorHandler';
import '../styles/Body_signup.css';

const SignUp = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  // 입력 필드의 값을 업데이트하는 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log(formData); // 현재 formData 출력 (서버로 보내기 전에 확인 용도)
    
    try {
      const response = await fetch('/api/members/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await handleApiError(response); // 에러 핸들링 호출 및 응답 json 반환
      console.log('서버 응답:', data);

      navigate('/login');

    } catch (error) {
      console.error('에러 발생:', error);
      alert(`가입 실패: ${error.message}`);
    }
  };

  // 취소 버튼 핸들러
  const handleCancel = () => {
    navigate('/login');
  };

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
              <img src="../assets/image/google-signUp.svg" alt="Google Sign Up" />
            </button>
          </div>

          {/* Signup Form */}
          <form className="form" onSubmit={handleSubmit}>
            {/* Input Fields */}
            <input 
              type="email" 
              name="email" 
              placeholder="아이디 (이메일)" 
              className="input-field" 
              value={formData.email} 
              onChange={handleChange} 
            />
            <input 
              type="password" 
              name="password" 
              placeholder="비밀번호" 
              className="input-field" 
              value={formData.password} 
              onChange={handleChange} 
            />
            <input 
              type="password" 
              name="confirmPassword" 
              placeholder="비밀번호 확인" 
              className="input-field" 
              value={formData.confirmPassword} 
              onChange={handleChange} 
            />
            <input 
              type="text" 
              name="name" 
              placeholder="이름" 
              className="input-field" 
              value={formData.name} 
              onChange={handleChange} 
            />

            {/* Buttons */}
            <div className="button-group">
              <button type="button" className="cancel-button" onClick={handleCancel}>취소</button>
              <button type="submit" className="submit-button">등록</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
