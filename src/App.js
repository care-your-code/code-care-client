import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// lazy를 통해 컴포넌트를 동적으로 불러옴
// 필요할 때만 Load 하여 페이지 성능 최적화
const Home = lazy(() => import("./pages/HomePage/Home"));
const Header = lazy(() => import("./components/Header"));
const SubHeader = lazy(() => import("./components/SubHeader"));
const MentorHome = lazy(() => import("./pages/HomePage/MentorHome"));
const MenteeHome = lazy(() => import("./pages/HomePage/MenteeHome"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense>
          <Header />
          <SubHeader />
          <Routes>
            {/* 삼항 연산자로 isLogin, isMentor 받아서 Home 구성 예정 */}
            <Route path="/" element={<Home />} />
            <Route path="/mentee" element={<MenteeHome />} />
            <Route path="/mentor" element={<MentorHome />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
