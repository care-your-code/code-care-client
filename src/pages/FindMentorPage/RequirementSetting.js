import React, { useState } from "react";
import styled from "styled-components";
import PriceRangeSlider from "./PriceRangeSlider";

const Cont = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.6fr;

  width: 95vw;
  height: 25vh;
  border: 1px solid #000;
  margin: 0 auto;
  text-align: left;
  padding: 20px 50px;
  justify-content: space-between;
`;

const CheckboxWrap = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const List = styled.li`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

const Title = styled.p`
  display: inline;
  font-weight: bold;
`;

const Label = styled.label`
  font-weight: bold;
`;

const CheckboxInput = styled.input.attrs({
  type: "checkbox",
})``;

const ClassPriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function RequirementSetting() {
  const [checkedData, setcheckedData] = useState([]);

  const getCheckboxVal = (e) => {
    e.target.checked
      ? setcheckedData([...checkedData, e.target.value])
      : setcheckedData(checkedData.filter((el) => el !== e.target.value));
  };
  return (
    <>
      <Cont>
        <CheckboxWrap>
          <List>
            <Title>&bull; 과외방식</Title>
            <div>
              <Label>
                <CheckboxInput value="대면" onClick={getCheckboxVal} /> 대면
              </Label>
              <Label>
                <CheckboxInput value="비대면" onClick={getCheckboxVal} /> 비대면
              </Label>
            </div>
          </List>
          <List>
            <Title>&bull; 과목</Title>
            <div>
              <Label>
                <CheckboxInput value="C" onClick={getCheckboxVal} /> C
              </Label>
              <Label>
                <CheckboxInput value="C++" onClick={getCheckboxVal} /> C++
              </Label>
              <Label>
                <CheckboxInput value="Java" onClick={getCheckboxVal} /> Java
              </Label>
              <Label>
                <CheckboxInput value="Javascript" onClick={getCheckboxVal} />
                Javascript
              </Label>
              <Label>
                <CheckboxInput value="Algorithm" onClick={getCheckboxVal} />
                Algorithm
              </Label>
            </div>
          </List>
          <List>
            <Title>&bull; 성별</Title>
            <div>
              <Label>
                <CheckboxInput /> 남성
              </Label>
              <Label>
                <CheckboxInput /> 여성
              </Label>
            </div>
          </List>
        </CheckboxWrap>

        <ClassPriceWrap>
          <Title>&bull; 수업료</Title>
          <PriceRangeSlider />
        </ClassPriceWrap>
      </Cont>
    </>
  );
}
