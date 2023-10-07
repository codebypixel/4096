import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 78px;
  padding: 0 32px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Actions = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
`

const ShareButton = styled.button`
  height: 40px;
  padding: 0px 32px;
  border-radius: 12px;
  border: 1px solid black;
`

const User = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #787878;
`

export { Container, Actions, ShareButton, User }