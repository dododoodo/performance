import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/onboarding.scss';

function OnboardingPage() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        
        if (isLoggedIn === 'true') {
            navigate('/');
        }
    }, [navigate]);

    function login() {
        navigate('/login');
    };

    function signUp() {
        navigate('/signup');
    };

    function kakaoLogin() {alert('카카오톡 로그인');};

    function naverLogin() {alert('네이버 로그인');};

    return (
        <div className="onboarding">
            <h2>온보딩 페이지</h2>

            <button onClick={login}>로그인</button>
            <button onClick={kakaoLogin}>카카오톡 간편로그인</button>
            <button onClick={naverLogin}>네이버 간편로그인</button>

            <div><button onClick={signUp}>회원가입</button></div>
        </div>
    );
};

export default OnboardingPage;
