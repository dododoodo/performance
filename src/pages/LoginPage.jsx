import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/onboarding.scss';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function loginSubmit(e) {
        e.preventDefault();
        // 로컬스토리지에 저장된 유저 데이터 가져오기
        const savedUserData = localStorage.getItem('userData');

        // 저장된 정보 없으면
        if (!savedUserData) {
            alert('회원가입된 계정이 없습니다. 먼저 회원가입을 진행해주세요.');
            return;
        }
        // 저장된 데이터 문자로 바꾸기
        const userData = JSON.parse(savedUserData);

        if (email === userData.email && password === userData.password) {
            // 세션스토리지에 로그인 상태 유무를 저장
            sessionStorage.setItem('isLoggedIn', 'true');
            alert('로그인 성공!');
            navigate('/');
        } else {
            alert('이메일 또는 비밀번호가 올바르지 않습니다.');
        }
    };

    // 이전 버튼
    function prev() {
        navigate('/onboarding')
    }

    return (
        <div>
            <div className="login-container">
                <button onClick={prev}>이전</button>

                <h2>로그인</h2>
                <form onSubmit={loginSubmit}>
                    <input 
                        type="email" 
                        placeholder="이메일을 입력해주세요." 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />

                    <input 
                        type="password" 
                        placeholder="비밀번호를 입력해주세요." 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    />

                    <button type="submit">로그인</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
