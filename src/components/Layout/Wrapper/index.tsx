import { ReactNode } from 'react';
import Container from "./styles";
import Header from '../Header';
import Main from '../Main';

export default function Wrapper(props: {children: ReactNode}){
  return (
    <Container>
      <Header />
      <Main>
      {props.children}
      </Main>
    </Container>
  )
}