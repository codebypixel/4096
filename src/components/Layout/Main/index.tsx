import { ReactNode } from 'react'
import Container from "./styles";

export default function Main(props: {children: ReactNode}){
  return (
    <Container>
      {props.children}
    </Container>
  )
}