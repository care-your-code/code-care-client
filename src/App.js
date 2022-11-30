import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// lazy를 통해 컴포넌트를 동적으로 불러옴
// 필요할 때만 Load 하여 페이지 성능 최적화
const Home = lazy(() => import("./pages/Home"));
const Header = lazy(() => import("./components/Header"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
