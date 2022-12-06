import React, { useState } from "react";
import styled from "styled-components";

const FliterPriceSlider = styled.div`
  position: relative;
  width: auto;
  height: 4px;
  border-radius: 10px;
  background-color: #dddddd;
`;

const FliterPriceSliderInner = styled(FliterPriceSlider)`
  position: absolute;
  left: ${(props) => props.rangeMinPercent}%;
  right: ${(props) => props.rangeMaxPercent}%;
  background-color: #000;
`;

const DisplayPrice = styled.div`
  display: flex;
`;

const MinPriceText = styled.p``;

const MaxPriceText = styled(MinPriceText)``;

const PriceRangeWrap = styled(DisplayPrice)`
  position: relative;
  background-color: yellowgreen;
`;

const MinPriceRange = styled.input.attrs({
  type: "range",
})`
  position: absolute;
  width: 100%;
  top: -28px;
  -webkit-appearance: none;
  background: none;

  &::-webkit-slider-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 2px solid #000;
    background-color: #fff;
    -webkit-appearance: none;
  }

  pointer-events: none;

  &::-webkit-slider-thumb {
    pointer-events: auto;
  }
`;
const MaxPriceRange = styled(MinPriceRange)``;

export default function PriceRangeSlider() {
  const fixedMinPrice = 0;
  const fixedMaxPrice = 1000000;
  const priceGap = 1000;

  const [rangeMinVal, setRangeMinVal] = useState(fixedMinPrice);
  const [rangeMaxVal, setRangeMaxVal] = useState(fixedMaxPrice);
  const [rangeMinPercent, setRangeMinPercent] = useState(0);
  const [rangeMaxPercent, setRangeMaxPercent] = useState(0);

  const priceRangeMinValHandler = async (e) => {
    setRangeMinVal(parseInt(e.target.value));
  };

  const priceRangeMaxValHandler = async (e) => {
    setRangeMaxVal(parseInt(e.target.value));
  };

  const RangeHandle = async () => {
    if (rangeMaxVal - rangeMinVal < priceGap) {
      setRangeMaxVal(rangeMinVal + priceGap);
      setRangeMinVal(rangeMaxVal - priceGap);
    } else {
      setRangeMinPercent((rangeMinVal / fixedMaxPrice) * 100);
      setRangeMaxPercent(100 - (rangeMaxVal / fixedMaxPrice) * 100);
    }
  };

  return (
    <>
      <FliterPriceSlider>
        <FliterPriceSliderInner
          rangeMinPercent={rangeMinPercent}
          rangeMaxPercent={rangeMaxPercent}
        />
      </FliterPriceSlider>

      <PriceRangeWrap>
        <MinPriceRange
          min={fixedMinPrice}
          max={fixedMaxPrice - priceGap}
          step="1000"
          value={rangeMinVal}
          onChange={(e) => {
            priceRangeMinValHandler(e);
            RangeHandle();
          }}
        />
        <MaxPriceRange
          min={fixedMinPrice + priceGap}
          max={fixedMaxPrice}
          step="1000"
          value={rangeMaxVal}
          onChange={(e) => {
            priceRangeMaxValHandler(e);
            RangeHandle();
          }}
        />
      </PriceRangeWrap>

      <DisplayPrice>
        <MinPriceText>
          최소 {rangeMinVal.toLocaleString("ko-KR")}원
        </MinPriceText>
        &nbsp;~&nbsp;
        <MaxPriceText>
          최대 {rangeMaxVal.toLocaleString("ko-KR")}원
        </MaxPriceText>
      </DisplayPrice>
    </>
  );
}

// git commit -m "Feat: 멘토 찾기 페이지
// 상단부 구현
// >>
// >> 조건에 맞는 멘토를 찾을 수 있도록 조건체크박스  및 가격 범위 슬라이더 개발"git a
