import { Container, Actions, ShareButton, User } from "./styles";

export default function Header(){
  return (
    <Container>
      <h1>4096</h1>
      <Actions>
        <ShareButton>
          Share
        </ShareButton>
        <User />
      </Actions>
    </Container>
  )
}