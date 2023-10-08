import styled from "styled-components";

interface ContainerProps {
    mode?: string;
}

const Container = styled.div<ContainerProps>`
  width: 430px;
  height: 535px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: ${(props) => props.mode === "dark" ? "#292A2A" : "#FFF"};
  border-radius: 24px;
`

export default Container