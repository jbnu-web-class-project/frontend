import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleApiError } from '../utils/errorHandler';
import '../styles/Body_signin.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        navigate('/signup');
    };

    const handleSignIn = async (e) => {
        e.preventDefault(); // 기본 폼 제출 동작 방지
        console.log({ email, password });

        try {
            // 로그인 API 호출 (예시 URL 사용)
            const response = await fetch('http://members-svc:3000/api/members/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const httpResponse = await handleApiError(response); // 에러 핸들링 호출
            console.log('서버 응답:', httpResponse);

            const data = await response.json(); // 응답을 JSON으로 변환
            console.log('서버 응답:', data);

            if (data.user.set_profile){
                navigate('/');
            }
            else {
                navigate('/profile');
            }

        } catch (error) {
            console.error('에러 발생:', error);
            alert(`가입 실패: ${error.message}`);
        }
    };

    return (
        <div className="main-container">
            <div className="inner-container">
                {/* Main Container */}
                <div className="form-wrapper">
                    {/* Key Icon */}
                    <div className="icon-container">
                        <div className="icon-circle">
                            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                            </svg>
                        </div>
                    </div>

                    {/* Login Form */}
                    <form className="form" onSubmit={handleSignIn}>
                        {/* Email Input */}
                        <div className="input-container">
                            <input
                                type="email"
                                className="input"
                                placeholder="아이디 (이메일)"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // 이메일 상태 업데이트
                            />
                        </div>

                        {/* Password Input */}
                        <div className="input-container">
                            <input
                                type="password"
                                className="input"
                                placeholder="비밀번호"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // 비밀번호 상태 업데이트
                            />
                        </div>

                        {/* Remember Me Checkbox */}
                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                className="checkbox"
                            />
                            <svg
                                className="checkmark"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-xl text-gray-900">로그인 유지</span>
                        </div>

                        {/* Buttons */}
                        <div className="button-group">
                            <button
                                type="button"
                                className="button signup-button"
                                onClick={handleSignUp}
                            >
                                회원가입
                            </button>
                            <button
                                type="submit"
                                className="button login-button"
                            >
                                로그인
                            </button>
                        </div>

                        {/* Google Sign In */}
                        <div className="google-signin">
                            <button
                                type="button"
                                className="google-button"
                            >
                                <img
                                    src='/assets/image/google-signIn.svg'
                                    alt="Google Sign In"
                                />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
