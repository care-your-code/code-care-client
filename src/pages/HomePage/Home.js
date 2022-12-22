import React, { memo } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 30px 30px;
`;

const ServiceIntroduction = styled.div`
  height: 400px;
  border: 1px solid #e6e8e7;
  border-radius: 10px;
  line-height: 2.5em;
  text-align: center;
`;

function Home() {
  return (
    <Container>
      <ServiceIntroduction>서비스 소개 내용</ServiceIntroduction>
    </Container>
  );
}

export default memo(Home);
