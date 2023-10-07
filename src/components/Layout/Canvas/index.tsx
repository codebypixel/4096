import { Container, Block } from "./styles";

export default function Canvas(props: {grid: any}){
  const blocks = [];
  for (let i = 0; i < (props.grid * props.grid); i++) {
    blocks.push(<Block key={i} />);
  }

  return (
    <Container grid={props.grid}>
      {blocks}
    </Container>
  )
}
