import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function MainPage() {
  const navigate = useNavigate();

    // 로그아웃
    function logout() {
        // 정보 삭제하기
        sessionStorage.removeItem('isLoggedIn');
        navigate('/login');
    };

  return (
    <div>
      <header>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search">SearchPage</NavLink>
          <NavLink to="/myshows">MyShowsPage</NavLink>
          <NavLink to="/mypage">MyPage</NavLink>
      </header>

      <button onClick={logout}>로그아웃</button>
    </div>
  )
}

export default MainPage