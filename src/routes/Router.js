import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import OnboardingPage from "../pages/OnboardingPage";
import MainPage from "../pages/MainPage";
import SearchPage from "../pages/SearchPage";
import MyShowsPage from "../pages/MyShowsPage";
import MyPage from "../pages/MyPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

function AppRouter() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            navigate('/onboarding');
        }
    }, [navigate, location.pathname]);

    return (
        <div className="App">
            <main>
                <Routes>
                    <Route path="/onboarding" element={<OnboardingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/" element={<MainPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/myshows" element={<MyShowsPage />} />
                    <Route path="/mypage" element={<MyPage />} />
                </Routes>
            </main>
        </div>
    );
}

export default AppRouter;
