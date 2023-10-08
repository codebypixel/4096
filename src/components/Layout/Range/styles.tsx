import styled from "styled-components";

const Container = styled.div`
  width: 320px;
  height: 125px;
  display: flex;
  flex-direction: column;
  border: 1px solid #000
`;

const Input = styled.input`
  width: 300px;
  height: 45px;
  display: flex;
  background: #b00928;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 45px;
    height: 100%;
    background: #b00928;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    background: #b00928; 
    border-radius: 5px; 
}
`;

const Display = styled.div`
  width: 72px;
  height: 72px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #fcf4f4;
  color: #b00928;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  h1 {
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export { Container, Input, Display };
