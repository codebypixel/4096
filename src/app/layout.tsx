"use client";

import React from "react";
import styled from "styled-components";
import StyledComponentsRegistry from "./registry";
import { GlobalStyle } from "../../public/styles/GlobalStyle";

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #FCF4F4;
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Adicione as tags <title>, <meta>, <link> e outros cabeçalhos aqui, se necessário */}
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Body>{children}</Body>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
