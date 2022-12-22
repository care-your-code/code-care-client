import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6e8e7;
  margin: 5px 5px;
  align-items: center;
  /* padding: 5px 20px; */
`;

const Logo = styled.div`
  width: 200px;
  margin-bottom: 5px;
  cursor: pointer;
`;

const LoginHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  align-items: center;
`;

const NotLoginHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextDecoration = styled.a`
  text-decoration: none;
  color: #a9a9a9;
`;

const Button = styled.button`
  width: 100px;
  border: none;
  color: white;
  text-align: center;
  line-height: 2.5em;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  height: 40px;
  margin: auto 4px 10px 4px;
  cursor: pointer;
  background-color: white;
`;

function Header() {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login");
  };

  const logoutHanlder = () => {};

  const registerHandler = () => {
    navigate("/signup");
  };

  const [isLogin, setIsLogin] = useState(true);

  return (
    <HeaderContainer>
      <Logo>로고</Logo>
      {isLogin ? (
        <LoginHeaderContainer>
          <Button>
            <TextDecoration>마이페이지</TextDecoration>
          </Button>
          <Button>
            <TextDecoration>로그아웃</TextDecoration>
          </Button>
        </LoginHeaderContainer>
      ) : (
        <NotLoginHeaderContainer>
          <Button>
            <TextDecoration>회원가입</TextDecoration>
          </Button>
          <Button>
            <TextDecoration>로그인</TextDecoration>
          </Button>
        </NotLoginHeaderContainer>
      )}
    </HeaderContainer>
  );
}

export default memo(Header);
