import React, { memo } from "react";
import { useState } from "react";
import styled from "styled-components";
import { PrimaryColor } from "../../utils/style";

const Container = styled.div`
  margin: 30px 30px;
`;

const Nickname = styled.div`
  font-size: xx-large;
  font-weight: 700;
  margin-top: 50px;
`;

const TodayClassContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: x-large;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 50vw;
`;

const TodayClass = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #a9a9a9;
  border-radius: 10px;
  width: 50vw;
  height: 100px;
  margin-bottom: 30px;
  box-shadow: 1px 1px 1px 1px #666666;
`;

const MenteeName = styled.div`
  margin-left: 50px;
  font-weight: 700;
`;

const Subject = styled.div`
  font-weight: 700;
`;

const Time = styled.div`
  margin-right: 50px;
  font-weight: 700;
`;

const Color = styled.div`
  color: ${PrimaryColor};
  display: inline;
`;

function MentorHome() {
  const [nickname, setNickname] = useState("김우용");
  // class state 받아오기
  let todayclasses = [
    {
      mentee: "정원호",
      subject: "알고리즘",
      time: "오후 3:00 ~ 오후 5:00",
    },
    {
      mentee: "김우용",
      subject: "Java",
      time: "오후 3:00 ~ 오후 5:00",
    },
  ];

  return (
    <Container>
      <Nickname>
        안녕하세요, <Color>{nickname}</Color> 님
      </Nickname>
      <TodayClassContainer>
        <Title>오늘의 클래스</Title>
        {todayclasses &&
          todayclasses.map((todayclass, index) => (
            <TodayClass key={index}>
              <MenteeName>{todayclass.mentee} 멘티</MenteeName>
              <Subject>{todayclass.subject}</Subject>
              <Time>{todayclass.time}</Time>
            </TodayClass>
          ))}
      </TodayClassContainer>
    </Container>
  );
}

export default memo(MentorHome);
