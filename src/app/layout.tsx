'use client';

import styled from "styled-components"
import StyledComponentsRegistry from "./registry";
import {GlobalStyle} from "../../public/styles/GlobalStyle";

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #FCF4F4;
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <GlobalStyle />
      <Body>
        {children}
      </Body>
      </StyledComponentsRegistry>
    </html>
  )
}