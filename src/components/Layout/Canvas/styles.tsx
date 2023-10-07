import styled from "styled-components";

interface ContainerProps {
  grid?: number;
}

const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.grid}, 1fr);
  grid-template-rows: repeat(${(props) => props.grid}, 1fr);
  width: 500px;
  height: 500px;
  border: 1px solid black;
`
  
const Block = styled.div`
  border: 1px solid #f2f2f2;
`
  
export { Container, Block }