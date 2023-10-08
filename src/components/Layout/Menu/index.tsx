import { ReactNode } from 'react'
import Container from "./styles";

export default function Menu(props: {children: ReactNode, mode: string}){
  return (
    <Container mode={props.mode}>
        {props.children}
    </Container>
  )
}