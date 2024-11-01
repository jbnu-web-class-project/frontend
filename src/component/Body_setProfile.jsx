import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { handleApiError } from '../utils/errorHandler';
import '../styles/Body_signup.css';

const SetProfile = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [formData, setFormData] = useState({
    nickname: '',
    phone: '',
    address: '',
    profile_img: '',
    favoriteSport: '',
    favoriteTeam: ''
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
      // 서버에 데이터 전송 (예시 URL 사용)
      const response = await fetch('/api/members/auth/setProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const httpResponse = await handleApiError(response); // 에러 핸들링 호출
      console.log('서버 응답:', httpResponse);

      const data = await response.json(); // 응답을 JSON으로 변환
      console.log('서버 응답:', data);

      navigate('/');

    } catch (error) {
      console.error('에러 발생:', error);
      alert(`가입 실패: ${error.message}`);
    }
  };

  // 취소 버튼 핸들러
  const handleCancel = () => {
    navigate('/');
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

          {/* Signup Form */}
          <form className="form" onSubmit={handleSubmit}>
            {/* Input Fields */}
            <input 
              type="file" 
              accept="image/*" 
              placeholder="프로필이미지" 
              className="input-field" 
              onChange={(e) => setFormData({ ...formData, profile_img: e.target.files[0] })} 
            />
            <input 
              type="text" 
              name="nickname" 
              placeholder="닉네임" 
              className="input-field" 
              value={formData.nickname} 
              onChange={handleChange} 
            />
            <input 
              type="tel" 
              name="phone" 
              placeholder="전화번호" 
              className="input-field" 
              value={formData.phone} 
              onChange={handleChange} 
            />
            <input 
              type="text" 
              name="address" 
              placeholder="주소" 
              className="input-field" 
              value={formData.address} 
              onChange={handleChange} 
            />

            {/* Dropdown Selects */}
            <div className="relative">
              <select 
                className="select-field" 
                name="favoriteSport" 
                value={formData.favoriteSport} 
                onChange={handleChange}
              >
                <option value="">선호 스포츠</option>
                <option value="football">축구</option>
                <option value="baseball">야구</option>
                <option value="basketball">농구</option>
              </select>
              <ChevronDown className="dropdown-icon" />
            </div>

            <div className="relative">
              <select 
                className="select-field" 
                name="favoriteTeam" 
                value={formData.favoriteTeam} 
                onChange={handleChange}
              >
                <option value="">선호 구단</option>
                <option value="team1">팀 1</option>
                <option value="team2">팀 2</option>
                <option value="team3">팀 3</option>
              </select>
              <ChevronDown className="dropdown-icon" />
            </div>

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

export default SetProfile;
