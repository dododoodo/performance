import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/onboarding.scss';

function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    function signUpSubmit(e) {
      e.preventDefault();
      // localStorage에 유저 정보 저장
      const userData = { email, password, nickname, phone };
      localStorage.setItem('userData', JSON.stringify(userData));

      // 회원가입 후 로그인 상태 저장하기
      sessionStorage.setItem('isLoggedIn', 'true');
      alert('회원가입 완료!');
      navigate('/');
  }

    // 이전 버튼
    function prev() {
      navigate('/onboarding')
    }


    return (
        <div className="signup-container">
            <button onClick={prev}>이전</button>
            <h2>회원가입</h2>
            <form onSubmit={signUpSubmit}>
                <input 
                type="text" 
                placeholder="닉네임을 입력해주세요." 
                value={nickname}
                onChange={(e) => setNickname(e.target.value)} 
                required/>

                <input type="email" 
                placeholder="이메일을 입력해주세요." 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required/>

                <input type="password" 
                placeholder="비밀번호를 입력해주세요." 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required/>

                <input type="tel" 
                placeholder="전화번호를 입력해주세요." 
                value={phone}
                onChange={(e) => setPhone(e.target.value)} 
                required/>

                <button type="submit">회원가입</button>
            </form>
        </div>
    );
};

export default SignUpPage;
