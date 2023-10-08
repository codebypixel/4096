import styled from "styled-components";

interface DisplayProps {
  color?: string;
}

const Container = styled.div`
  width: 130px;
  height: 175px;
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
`;

const Picker = styled.input`
  width: 130px;
  height: 130px;
  -webkit-appearance: none;
  background: none;
  border: none;  
`;

const Display = styled.span<DisplayProps>`
  width: 100%;
  height: 45px;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  color: ${(props) => props.color};
`;

export { Container, Picker, Display };
