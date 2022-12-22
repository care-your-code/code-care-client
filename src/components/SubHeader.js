import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #e6e8e7;
  /* margin: 5px 5px; */
  /* padding: 5px 20px; */
`;

const Button = styled.button`
  width: 100px;
  border: none;
  color: #666666;
  text-align: center;
  line-height: 2.5em;
  font-weight: bold;
  font-size: 16px;
  height: 40px;
  /* margin: 0 4px 5px 4px; */
  cursor: pointer;
  background-color: white;
`;

// isLogin, isMentor에 따라 component 다르게 구성.

function SubHeader() {
  return (
    <HeaderContainer>
      <Button>멘토찾기</Button>
      <Button>커뮤니티</Button>
    </HeaderContainer>
  );
}

export default SubHeader;
